import { FileDownload } from '@mui/icons-material';
import { downloads } from '../../data/downloads';
import type { Download } from '../types';

const BASE = '/files/';

// ── Helpers ────────────────────────────────────────────────────────────────────

const EXT_STYLES: Record<string, string> = {
  PDF:  'bg-[#c0392b]/20 text-[#e8806a]',
  ZIP:  'bg-[#1a6fa8]/20 text-[#5dade2]',
  VMDX: 'bg-[#7d3c98]/20 text-[#c39bd3]',
  XLSX: 'bg-[#1e8449]/20 text-[#58d68d]',
  XLS:  'bg-[#1e8449]/20 text-[#58d68d]',
  DOCX: 'bg-[#1a5276]/20 text-[#7fb3d3]',
  PNG:  'bg-[#784212]/20 text-[#f0b27a]',
  JPG:  'bg-[#784212]/20 text-[#f0b27a]',
  HTM:  'bg-[#145a32]/20 text-[#6fcf97]',
  GIF:  'bg-[#784212]/20 text-[#f0b27a]',
};

function ExtBadge({ page }: { page: string }) {
  const ext = page.split('.').pop()?.toUpperCase() ?? '';
  const cls = EXT_STYLES[ext] ?? 'bg-[#f0b429]/10 text-[#f0b429]/60';
  return (
    <span className={`inline-block text-[9px] font-bold font-sans px-1.5 py-0.5 uppercase tracking-wider ${cls}`}>
      {ext || 'FILE'}
    </span>
  );
}

function DownloadLink({ item }: { item: Download }) {
  if (!item.page) return null;
  return (
    <a
      href={BASE + item.page}
      download
      className="group flex items-start gap-2 py-2 px-3 bg-[#0f1018] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200"
    >
      <FileDownload
        fontSize="small"
        className="text-[#f0b429]/50 group-hover:text-[#f0b429] transition-colors duration-200 mt-0.5 shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[#e2e2e2]/80 group-hover:text-[#e2e2e2] text-sm font-sans transition-colors duration-200 leading-snug">
          {item.name}
        </p>
        {item.description && (
          <div
            className="text-[#e2e2e2]/40 text-xs font-sans mt-0.5 leading-snug [&_p]:mb-0 [&_br]:hidden"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        )}
      </div>
      <ExtBadge page={item.page} />
    </a>
  );
}

// ── Section partials ────────────────────────────────────────────────────────────

function VaslBoardsSection({ items }: { items: Download[] }) {
  return (
    <div className="mb-14">
      <h3 className="text-2xl uppercase text-[#e2e2e2] mb-2 pb-2 border-b border-[#f0b429]/20">
        VASL Board Downloads
      </h3>
      <p className="text-sm text-[#e2e2e2]/40 font-sans mb-6">
        Board files for use with VASL (Virtual Advanced Squad Leader)
      </p>
      <div className="space-y-6">
        {items.map((product) => {
          const activeFiles = product.files?.filter((f) => f.active !== false) ?? [];
          if (activeFiles.length === 0) return null;
          return (
            <div key={product.name}>
              <p className="text-lg uppercase tracking-widest text-[#e2e2e2]/90 font-sans mb-2">
                {product.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeFiles.map((file) => (
                  <a
                    key={file.name}
                    href={BASE + file.page}
                    download
                    className="group flex items-center gap-1.5 px-3 py-1.5 bg-[#0f1018] border border-[#f0b429]/10 hover:border-[#f0b429]/40 transition-[border-color] duration-200"
                  >
                    <FileDownload
                      fontSize="small"
                      className="text-[#f0b429]/40 group-hover:text-[#f0b429] transition-colors duration-200"
                    />
                    <span className="text-sm text-[#e2e2e2]/90 group-hover:text-[#e2e2e2] font-sans transition-colors duration-200">
                      {file.name}
                    </span>
                    {file.page && <ExtBadge page={file.page} />}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GroupSection({ item }: { item: Download }) {
  const activeFiles = item.files?.filter((f) => f.active !== false) ?? [];
  if (activeFiles.length === 0) return null;

  const LABEL: Record<string, string> = {
    extensions: 'Counter Extensions',
    plano:      'Plano Labels',
    overlays:   'VASL Overlays',
    maps:       'Printable Maps',
    armory:     'BFP Armory',
  };

  return (
    <div className="mb-10">
      <h3 className="text-2xl uppercase text-[#e2e2e2] mb-6 pb-2 border-b border-[#f0b429]/20">
        {LABEL[item.group ?? ''] ?? item.name}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {activeFiles.map((file) => (
          <DownloadLink key={file.name + file.page} item={file} />
        ))}
      </div>
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────────

export const DownloadsSection = () => {
  const vaslItems    = downloads.filter((d) => d.group === 'vasl');
  const otherGrouped = downloads.filter((d) => !!d.files?.length && d.group !== 'vasl');
  const flat         = downloads.filter((d) => !d.files?.length && !!d.page);

  return (
    <section id="downloads" className="bg-[#1a1b2a] py-16 border-t border-[#f0b429]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl uppercase text-[#f0b429] mb-4">Downloads</h2>
          <p className="text-[#e2e2e2]/60 max-w-2xl mx-auto font-sans">
            Rules, errata, VASL boards, overlays, and additional resources for all BFP products
          </p>
        </div>

        {/* VASL Boards */}
        <VaslBoardsSection items={vaslItems} />

        {/* Other grouped sections */}
        {otherGrouped.map((item) => (
          <GroupSection key={item.group ?? item.name} item={item} />
        ))}

        {/* Flat / individual files */}
        {flat.length > 0 && (
          <div>
            <h3 className="text-2xl uppercase text-[#e2e2e2] mb-6 pb-2 border-b border-[#f0b429]/20">
              Rules &amp; Errata
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {flat.map((item) => (
                <DownloadLink key={item.name + item.page} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
