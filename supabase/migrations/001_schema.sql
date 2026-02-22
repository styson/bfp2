-- ============================================================
-- Bounding Fire Productions — Auth + Persistent User Data
-- ============================================================

-- profiles (auto-created on signup via trigger)
create table if not exists public.profiles (
  id              uuid references auth.users on delete cascade primary key,
  display_name    text,
  mailing_opt_in  boolean default false,
  created_at      timestamptz default now()
);

-- cart_items
create table if not exists public.cart_items (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references auth.users on delete cascade not null,
  product_id  text not null,
  quantity    int not null default 1,
  variant     jsonb,  -- { shippingType: 'domestic' | 'international' }
  created_at  timestamptz default now()
);

-- Unique index on (user_id, product_id, shippingType) — expression-based, must be separate
create unique index if not exists cart_items_user_product_shipping
  on public.cart_items (user_id, product_id, (variant->>'shippingType'));

-- orders (snapshot of cart at purchase time)
create table if not exists public.orders (
  id               uuid default gen_random_uuid() primary key,
  user_id          uuid references auth.users on delete cascade not null,
  paypal_order_id  text,
  status           text default 'pending' check (status in ('pending', 'completed', 'refunded')),
  items            jsonb not null,
  total_usd        numeric(10, 2) not null,
  created_at       timestamptz default now()
);

-- ============================================================
-- Row-Level Security
-- ============================================================

alter table public.profiles   enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders     enable row level security;

-- profiles: full access to own row
create policy "profiles_own" on public.profiles
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- cart_items: full access to own rows
create policy "cart_own" on public.cart_items
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- orders: select + insert own rows (no update/delete for data integrity)
create policy "orders_select" on public.orders
  for select using (auth.uid() = user_id);

create policy "orders_insert" on public.orders
  for insert with check (auth.uid() = user_id);

-- ============================================================
-- Auto-create profile on signup
-- ============================================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1)
    )
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
