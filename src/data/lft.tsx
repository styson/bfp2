import type { Product } from '../components/types';
import {
  aslCompanion,
  dx,
  ffs,
  ftc10,
  ftc11,
  ftc12,
  ftc13,
  ftc5,
  ftc6,
  ftc8,
  ftc9,
  gh,
  inorPg,
  bdNP1,
  bdNP2,
  bdNP3,
  inorCg,
  inorCounters,
  inorMap,
  kgp,
  kgs,
  lft13,
  lft14,
  lft15,
  lft15maps,
  lft16,
  np,
  rpc3,
  tff,
} from './images';

const who = 'lft';
export const products: Product[] = [
  {
    id: 93,
    name: 'The Trials of Task Force Faith',
    description:
      '<p><b>The Trials of Task Force Faith</b> is a historical module, designed by Andrew Hershey. It is the second release by LFT in its "Perimeter of Necessity" series, which focuses on the Chosin/Changjin Reservoir Campaign during the early months of the Korean War. Many of you will recall that the first in this "Perimeter" series covered the actions of Fox Company, 2nd Battalion, 7th Marines at Toktong Pass (see "From the Cellar" # 10). Now with <b>The Trials of Task Force Faith</b>, the action switches from the deep snow covered high mountain pass to the west of Chosin to its lightly snow swept and ice covered eastern shores at the Pungnyuri-gang Inlet. Here beginning on the night of the 27th of November and through the 1st of December, 1950, the 31st Regimental Combat Team (31-RCT), U.S. Army held the bulk of the 80th Division, of the Chinese Peoples Army, at bay in a stand worthy of comparison to Thermopylae.</p><p><b>The Trials of Task Force Faith</b> contains 11 H-series scenarios (6 day and 5 night), 1 map (KGS in size) and a rules booklet. There is no CG. The battle was not one that lends itself to such a depiction, as 31-RCT received no reinforcements of personnel, and very little in the way of re-supply (which came only sporadically from the air). Likewise, there are no counters in the module pack. This was done deliberately in order : "a" to keep cost down, and "b" to maximize the value of Forgotten War, which, with Yanks, is all you need to play, the ASLRB not withstanding. Those familiar with the rules from FTC#10 will find many of them exactly the same, although there are some new ones to cover new terrain, and certain aspects of the battle.</p>',
    shortDescription: `TFF focuses on the Chosin/Changjin Reservoir Campaign during the early months of the Korean War.`,
    includes: `<p>TFF includes the following:
      <ul>
        <li>11 H-series scenarios (6 day and 5 night)</li>
        <li>1 Historical map (KGS in size)</li>
        <li>rules booklet</li>
      </ul></p>`,
    price: 65,
    intPrice: 100,
    button: '9R69PEZYS8Y7G',
    intButton: 'TDWTRB7U7G444',
    imageF: tff,
    page: 'tff',
    active: true,
    year: 2025,
    who,
    scenarios: [
      { id: 'TF-F1', name: 'Red Dragon Stalking Polar Bears', arc_id: '67157' },
      { id: 'TF-F2', name: 'Shaking Off the Shock Wave', arc_id: '67158' },
      { id: 'TF-F3', name: 'Taking Back Vital Ground', arc_id: '67159' },
      { id: 'TF-F4', name: 'Return of the Dragon', arc_id: '67160' },
      { id: 'TF-F5', name: 'Triple a to the Rescue', arc_id: '67161' },
      { id: 'TF-F6', name: 'The Assumption of Faith', arc_id: '67162' },
      { id: 'TF-F7', name: 'Growing Pains', arc_id: '67163' },
      { id: 'TF-F8', name: 'Firemen vs. Icemen', arc_id: '67164' },
      { id: 'TF-F9', name: 'Bridges of Sorrow', arc_id: '67165' },
      { id: 'TF-F10', name: 'Hold Out, One More Night', arc_id: '67166' },
      { id: 'TF-F11', name: "The First Station on Faith's Via Dolorosa", arc_id: '67167' },
    ],
  },
  {
    id: 98,
    name: 'LFT 13',
    description: `<p>LFT 13 focuses on the Crimean Campaign, from the German invasion to the Russian counteroffensive of 1944. Also included, a Berlin Red Vengeance strategy guide, as well as 17 scenarios and an overlay, thus a thicker issue than the regular 80 page LFT mag.</p>`,
    shortDescription: `LFT 13 focuses on the Crimean Campaign, from the German invasion to the Russian counteroffensive of 1944.`,
    includes: `<p><b>LFT 13</b> includes the following:
      <ul>
        <li>17 Action-Packed Scenarios</li>
        <li>Huge magazine with the Berlin Red Vengeance strategy guide</li>
        <li>1 Overlay</li>
      </ul></p>`,
    price: 99,
    intPrice: 100,
    button: '',
    intButton: '',
    imageF: lft13,
    page: 'lft13',
    active: false,
    year: 2024,
    who,
    scenarios: [{ id: '', name: '(color indicates attacking side)' }],
  },
  {
    id: 9300,
    name: 'LFT 14',
    description: `<p>This issue focuses on the Italians, from the invasion of France to the Greek mountains, from Eritrea to Abyssinia or Somalia, Yugoslavia, Ukraine, but also Sicily and even China.</p>`,
    shortDescription: `<p>LFT 14 focuses on the Italians, with 32 scenarios, 2 counter sheets, and a 104 page LFT magazine.</p>`,
    includes: `<p><b>LFT 14</b> includes the following:
        <ul>
          <li>32 Action-Packed Scenarios</li>
          <li>Huge 104-page magazine</li>
          <li>2 Sheets of Counters</li>
          <li>Editor's Foreword</li>
          <li>Advancing Fire (an Italian project for ASL)</li>
          <li>10 questions to&hellip; ECZ</li>
          <li>LFT Humor</li>
          <li>Villeneuve d'Ascq 2018</li>
          <li>The Bulgarian Armor 1944</li>
          <li>The Decima MAS</li>
          <li>I gruppi di Combattimento</li>
          <li>SS Italia</li>
          <li>Lighting Strikes: the Folgore Division</li>
          <li>Birds of Prey: Aerial support in ASL</li>
          <li>Italians in ASL</li>
          <li>Series Replay: LFT 214 A Grain of Sand</li>
          <li>Bibliography</li>
        </ul>
      </p>`,
    price: 0, //80,
    intPrice: 0, //105,
    button: 'U7K842NCFTZB8',
    intButton: 'NNUEZ3S8X2962',
    imageF: lft14,
    page: 'lft14',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'LFT225', name: 'Blue Hell at P.A. ABRIES', att: 'french', arc_id: '63542' },
      { id: 'LFT226', name: 'Veni Venezia&nbsp;!', att: 'allied', arc_id: '63543' },
      { id: 'LFT227', name: 'Damsels in Distress', att: 'italian', arc_id: '63544' },
      { id: 'LFT228', name: 'Last Charge at Umbrega', att: 'italian', arc_id: '63545' },
      { id: 'LFT229', name: 'A Push in the Bush', att: 'italian', arc_id: '57209' },
      { id: 'LFT230', name: 'Italian Behemoth', att: 'axis', arc_id: '63547' },
      { id: 'LFT231', name: 'Cub Cub Hills', att: 'italian', arc_id: '63548' },
      { id: 'LFT232', name: 'Heart of Darkness', att: 'axis', arc_id: '63549' },
      { id: 'LFT233', name: 'Surprised Gideon', att: 'allied', arc_id: '63550' },
      { id: 'LFT234', name: 'Meat Meats Attack', att: 'italian', arc_id: '63551' },
      { id: 'LFT235', name: 'Once More Unto the Breach', att: 'british', arc_id: '63552' },
      { id: 'LFT236', name: 'Ethnic Cleansing', att: 'russian', arc_id: '63553' },
      { id: 'LFT237', name: 'Roma Victor', att: 'russian', arc_id: '63554' },
      { id: 'LFT238', name: 'El Himeimat Ridge', att: 'italian', arc_id: '63555' },
      { id: 'LFT239', name: 'Armored Probe at Sidi-Nsir', att: 'french', arc_id: '63557' },
      { id: 'LFT240', name: 'Commando Beach 1', att: 'italian', arc_id: '63558' },
      { id: 'LFT241', name: 'Commando Beach 2', att: 'italian', arc_id: '63559' },
      { id: 'LFT242', name: 'That Bridge Again', att: 'british', arc_id: '63560' },
      { id: 'LFT243', name: 'Send More Pigeons II', att: 'italian', arc_id: '63561' },
      { id: 'LFT244', name: 'Venturi Effect', att: 'italian', arc_id: '63562' },
      { id: 'LFT245', name: 'Ciao Cina', att: 'japanese', arc_id: '63563' },
      { id: 'LFT246', name: 'Gladium Pro Patria e Rege', att: 'italian', arc_id: '63564' },
      { id: 'LFT247', name: 'Roter Mann', att: 'italian', arc_id: '63565' },
      { id: 'LFT248', name: 'Hunting High', att: 'german', arc_id: '63566' },
      { id: 'LFT249', name: "Winter's Fury", att: 'american', arc_id: '53567' },
      { id: 'LFT250', name: 'Decimation', att: 'italian', arc_id: '63568' },
      { id: 'LFT251', name: 'The Last Drive', att: 'german', arc_id: '63569' },
      { id: 'LFT252', name: 'Fratelli...', att: 'german', arc_id: '63570' },
      { id: 'LFT253', name: 'Axis & Allies', att: 'german', arc_id: '63571' },
      { id: 'LFT254', name: 'Insurrection at Cividale', att: 'german', arc_id: '63572' },
      { id: 'LFT255', name: 'Paper Tigers', att: 'german', arc_id: '63573' },
      { id: 'LFT256', name: 'Radio X-MAS', att: 'american', arc_id: '63574' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 94,
    name: 'LFT 15',
    description: ``,
    shortDescription: `LFT 15 focuses on Desert scenarios, with 23 scenarios, 8 new boards, and an 88 page LFT magazine.`,
    includes: `<p><b>LFT 15</b> includes the following:
        <ul>
          <li>Editor's Foreword</li>
          <li>Advancing Fire</li>
          <li>30 years of ASL Ring</li>
          <li>10 questions for Steve Swann</li>
          <li>ASL events</li>
          <li>ASL humor "The Play Fast Machine"</li>
          <li>The North African Tirailleurs</li>
          <li>The Tunisian Campaign 1942-43</li>
          <li>Surrender (A15.5)</li>
          <li>Map concepts</li>
          <li>Left out in the Sun too long</li>
          <li>Chapter AD: Arid Desert Terrain</li>
          <li>The Russian Civil War ASL rules</li>
          <li>Night and Desert rules</li>
          <li>Bibliography</li>
        </ul>
      </p>
      <h5 style="font-weight:bold;font-size:30px;margin-bottom:10px;">There are 8 new boards.</h5>
      <a href="${lft15maps}" target="_blank"><img alt="Boards" src="${lft15maps}" style="height:280px;" /></a>`,
    price: 90,
    intPrice: 120,
    button: 'V8RUGR6QZ3DY8',
    intButton: '5LPEGR9CMEJCN',
    imageF: lft15,
    page: 'lft15',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'LFT274', name: 'Bear Valley', att: 'allied', arc_id: '66412' },
      { id: 'LFT275', name: 'Trust Us!', att: 'allied', arc_id: '66413' },
      { id: 'LFT276', name: 'Genghis Khan Lives!', att: 'chinese', arc_id: '66414' },
      { id: 'LFT277', name: 'No Post Here!', att: 'japanese', arc_id: '66415' },
      { id: 'LFT278', name: 'Toridatsu!', att: 'allied', arc_id: '66416' },
      { id: 'LFT279', name: 'The Russians are coming', att: 'axis', arc_id: '66417' },
      { id: 'LFT280', name: 'Salvation at the Temple', att: 'japanese', arc_id: '66418' },
      { id: 'LFT281', name: 'Pink Hill', att: 'british', arc_id: '66419' },
      { id: 'LFT282', name: 'Gardens of Heaven', att: 'british', arc_id: '66420' },
      { id: 'LFT283', name: 'Road to Merdjayoun', att: 'british', arc_id: '66421' },
      { id: 'LFT284', name: 'Vichy Strikes Back', att: 'british', arc_id: '66422' },
      { id: 'LFT285', name: 'The Arab Legion', att: 'british', arc_id: '66423' },
      { id: 'LFT286', name: 'The Last Fire Mission', att: 'russian', arc_id: '59599' },
      { id: 'LFT287', name: 'Operation Scipio', att: 'british', arc_id: '66425' },
      { id: 'LFT288', name: 'Fondouk Express', att: 'german', arc_id: '66426' },
      { id: 'LFT289', name: 'Haka at Takrouna', att: 'german', arc_id: '66427' },
      { id: 'LFT290', name: 'Picking Olives', att: 'italian', arc_id: '66428' },
      { id: 'LFT291', name: 'First Skirmish', att: 'german', arc_id: '66429' },
      { id: 'LFT292', name: 'Engineer Hill', att: 'american', arc_id: '66430' },
      { id: 'LFT293', name: 'Wild Men from Texas', att: 'german', arc_id: '66431' },
      { id: 'LFT325', name: 'The Cauquigny Bridgehead', att: 'american', arc_id: '66432' },
      { id: 'LFT326', name: 'Vitamin B', att: 'japanese', arc_id: '66433' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 96,
    name: 'LFT 16',
    description: `<p>LFT 16 focuses on PTO scenarios, with 15 Pacific scenarios and an 80 page PTO-focused magazine.</p>
      <p>The LFT 16 Jungle Boards are only available directly from LFT.</p>`,
    shortDescription: `LFT 16 focuses on PTO scenarios, with 15 Pacific scenarios and an 80 page PTO-focused magazine.`,
    includes: `<p><b>Very Important - Please Note:<br/>We are not including any maps or overlays in this product.</b></p>
      <p>LFT12 has been out of print for many years now. The demand was steadily growing for a reprint, or, at least, for us to return to the Pacific. After LFT15's success with its DTO boards, widening the Desert "Lybian" experience to a real full Desert Theater of Operations that includes the Mediterranean basin, we thought it was a great time to plunge back into the PTO. So here is LFT16!</p>
      <p><b>LFT 16</b> includes the following:
        <ul>
          <li>Editor's Foreword</li>
          <li>10 questions to Olli</li>
          <li>Tiger Meet 2022 : The Last Bid + Men of Steel</li>
          <li>Tiger Meet 2023</li>
          <li>The Forgotten Blitzkrieg</li>
          <li>Japanese Tank Division 1942</li>
          <li>ASL humor</li>
          <li>A Mediocre Dragon</li>
          <li>"Bambrush?"</li>
          <li>PTO Basics<sup>*</sup></li>
          <li>LC Charts</li>
          <li>Japanese MMC Chart</li>
          <li>Defending in Japanese scenarios</li>
          <li>Sons of Beaches<sup>*</sup></li>
          <li>Seaborne Assaults<sup>*</sup></li>
          <li>Sims Ridge<sup>*</sup></li>
          <li>Bibliography</li>
        </ul>
        <br/><sup>*</sup> These articles are updated LFT 12 articles.
        <br/><br/>
        <b>The LFT16 Jungle Boards are only available directly from LFT.</b></p>`,
    price: 60,
    intPrice: 90,
    button: 'G4Z4BVKB72B68',
    intButton: 'FDT2EK9FZFLT6',
    imageF: lft16,
    page: 'lft16',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'LFT327', name: 'Thai Beaches', att: 'allied', arc_id: '66807' },
      { id: 'LFT328', name: 'Gaining Time at Baliuag', att: 'japanese', arc_id: 'X' },
      { id: 'LFT329', name: 'Quinauan Point', att: 'japanese', arc_id: '66808' },
      { id: 'LFT330', name: 'Rescuing the Pocket', att: 'allied', arc_id: '66822' },
      { id: 'LFT331', name: 'Point of Departure', att: 'allied', arc_id: '66820' },
      { id: 'LFT332', name: 'Goodenough ?', att: 'japanese', arc_id: 'X' },
      { id: 'LFT333', name: 'Cpl. Anzac', att: 'japanese', arc_id: '66811' },
      { id: 'LFT334', name: 'Infuriatingly Invisible', att: 'japanese', arc_id: '66816' },
      { id: 'LFT335', name: 'Fourteen Paddles', att: 'japanese', arc_id: '66809' },
      { id: 'LFT336', name: 'Not So Ichi-Go', att: 'chinese', arc_id: '66810' },
      { id: 'LFT337', name: 'RJ-177', att: 'japanese', arc_id: '66815' },
      { id: 'LFT338', name: 'Arakian Rose', att: 'japanese', arc_id: '57423' },
      { id: 'LFT339', name: 'Zig Zag Pass', att: 'japanese', arc_id: 'X' },
      { id: 'LFT340', name: 'Spring Cleaning', att: 'japanese', arc_id: '60968' },
      { id: 'LFT341', name: 'Harvesting Opium', att: 'french', arc_id: '66813' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 938,
    name: 'FTC 10',
    description: `<p>Welcome to "Sand & Snow" a themed HASL issue of From the Cellar, which examines two critical battles that the United States Marine Corps fought in WW2 and in Korea. The two battles (Tarawa and Toktong Pass) that this pack looks at could not be more different in geography, weather and enemy capabilities. As an ASL player you will have to adapt to the changing conditions just as the Marines who participated in these battles had to do.</p>
      <p>In order to play the scenarios in FTC10, you will need the map of MMP's "Blood Reef Tarawa"&copy;, as well as its non-official extension (<a href="/src/files/tarawa_add_on_map.pdf" target="_blank">download it here</a>) and the "Fox Hill" Historical map, provided within the booklet itself.</p>`,
    shortDescription: `FTC10 is a selection of 10 scenarios of "Sand & Snow", a USMC themed HASL issue.`,
    includes: `<p>Check <a href="https://www.lefranctireur.org/spip.php?page=article&id_article=154" target="_blank">LFT's FTC10 page</a> for more details.</p>`,
    price: 40,
    intPrice: 70,
    button: 'MAQ6LCRSALWRJ',
    intButton: 'DNDZBM8L624PE',
    imageF: ftc10,
    page: 'ftc10',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'FT 294', name: "Cannonball & Company's Run", arc_id: '65457' },
      { id: 'FT 295', name: 'A Toe Hold on Red Beach 3', arc_id: '65458' },
      { id: 'FT 296', name: '"Go Get Your Feet Wet, Boys !"', arc_id: '65459' },
      { id: 'FT 297', name: '"Black Beach Rendez-Vous"', arc_id: '65460' },
      { id: 'FT 298', name: 'Finishing off the Tailenders', arc_id: '65461' },
      { id: 'FT 299', name: 'The Pocket', arc_id: '65462' },
      { id: 'FT 300', name: 'Fox in the Cold', arc_id: '65463' },
      { id: 'FT 301', name: 'Chinese Machinations', arc_id: '65465' },
      { id: 'FT 302', name: '"We Will Hold"', arc_id: '65466' },
      { id: 'FT 303', name: 'Ridgeline Rendez-Vous', arc_id: '65467' },
    ],
  },
  {
    id: 936,
    name: 'FTC 11',
    description: `<p>Our latest issue of "From the Cellar", this time containing an in depth article from one of the very best players if not in the World, at least in Europe !</p>
      <p>With 10 accompanying ETO only scenarios that will take you from Dunkerque to the snow covered Russian winter, Italy or Walcheren island and the replacement countersheet for "The Green Hell of Inor", countersheet # 3, of course at absolutely NO ADDITIONAL COST.</p>
      <p>For those of you, buyers of "The Green Hell of Inor", who do not want to purchase FTC 11 but only want to get a copy of the replacement countersheet, contact <a href='mailto:dritter3@triad.rr.com'>Derek Ritter</a>.</p>`,
    shortDescription: `FTC11 is a selection of 10 ETO-only scenarios & the replacement counters for "Green Hell of Inor".`,
    includes: `<p>Check <a href="https://www.lefranctireur.org/spip.php?page=article&id_article=172" target="_blank">LFT's FTC11 page</a> for more details.</p>`,
    price: 42,
    intPrice: 70,
    button: 'A24APEDTBFC4Y',
    intButton: 'VEGTWGLBLZ3TG',
    imageF: ftc11,
    page: 'ftc11',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'FT304', name: 'Loosening the Noose', arc_id: '65659' },
      { id: 'FT305', name: 'Kutrik', arc_id: '65660' },
      { id: 'FT306', name: "Stalin's Orders", arc_id: '65661' },
      { id: 'FT307', name: 'Backstabbing Paratroopers', arc_id: '65662' },
      { id: 'FT308', name: 'Luchs', arc_id: '65663' },
      { id: 'FT309', name: 'Smoke on the Water', arc_id: '65664' },
      { id: 'FT310', name: 'Back to the River', arc_id: '65665' },
      { id: 'FT311', name: 'Five-Oh-Sink', arc_id: '65666' },
      { id: 'FT312', name: 'W11', arc_id: '65667' },
      { id: 'FT313', name: 'Sainte Barbe on Fire', arc_id: '65668' },
    ],
  },
  {
    id: 934,
    name: 'FTC 12',
    description: `<p>From the Cellar # 11 was definitely not supposed to be designed as a manual, but LFT is glad that Toby Pilling submitted his extensive article on the art of defending in ASL...after many years, it was finally published, and we have received a lot of emails and inquiries for a sequel, or better said, another manual explaining how to attack in ASL. So here you are... <b>FTC 12: "Attacking in ASL, A Mid-Level Player's Perspective"</b>.</p>
      <p>Be warned that there is not a single small scenario in this issue. A couple of medium ones, and all the rest are large to very large... and quite challenging for both sides. All of them can be played with VASL though, so you can resume your Seaborne assault peacefully with your favorite opponent without the need of installing the overlays again and again at each FtF session.</p>`,
    shortDescription: `FTC12 is a selection of 11 medium-large/very-large scenarios that will be quite challenging for both sides.`,
    includes: `<p>Check <a href="https://www.lefranctireur.org/spip.php?page=article&id_article=175" target="_blank">LFT's FTC12 page</a> for more details.</p>`,
    price: 42,
    intPrice: 70,
    button: '2JCEK5LT7KEMJ',
    intButton: 'QJW9R2RHAKQ8E',
    imageF: ftc12,
    page: 'ftc12',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'FT314', name: 'Red Army Funnies', arc_id: '65886' },
      { id: 'FT315', name: 'Stumbling Colossus', arc_id: '65887' },
      { id: 'FT316', name: 'Operation Munchen', arc_id: '65888' },
      { id: 'FT317', name: 'Bridge to Oblivion', arc_id: '65889' },
      { id: 'FT318', name: 'Arsenal of Communism', arc_id: '65890' },
      { id: 'FT319', name: 'Tuloksa River Assault', arc_id: '65891' },
      { id: 'FT320', name: 'Osasto Bjorkman', arc_id: '65892' },
      { id: 'FT321', name: 'A Counter Offensive Denied', arc_id: '65892' },
      { id: 'FT322', name: 'Last Desperate Gamble', arc_id: '65893' },
      { id: 'FT323', name: 'Empire Strikes Back', arc_id: '65894' },
      { id: 'FT324', name: 'Smashing the Corridor', arc_id: '65895' },
      // { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 932,
    name: 'FTC 13',
    description: `<p>From the Cellar # 13 has 35 updated scenarios from LFT#5 (with one overlay), LFT#9 (with2 overlays), FTC # 1 & 2 (and another couple of overlays).</p>`,
    shortDescription: `FTC13 is a collection of 35 updated scenarios from earlier LFT products.`,
    includes: `<p>Check <a href="https://www.lefranctireur.org/spip.php?page=article&id_article=184" target="_blank">LFT's FTC13 page</a> for more details.</p>`,
    price: 50,
    intPrice: 80,
    button: 'J4DEV87LM9PEY',
    intButton: '5NBYVZLASUPKU',
    imageF: ftc13,
    page: 'ftc13',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'FT13', name: 'Cabanes Vieilles', arc_id: '58113' },
      { id: 'FT14', name: 'Les Mille Fourches', arc_id: '58114' },
      { id: 'FT15', name: 'La Forca', arc_id: '58115' },
      { id: 'FT16', name: 'Les 3 Communes', arc_id: '58116' },
      { id: 'FT17', name: 'Patrol', arc_id: '56216' },
      { id: 'FT49', name: 'Lingèvres, aftermath', arc_id: '65458' },
      { id: 'FT50', name: 'Meeting on the Summit', arc_id: '58153' },
      { id: 'FT51', name: 'Harmless Steel', arc_id: '58154' },
      { id: 'FT52', name: 'Bouchon à Bouchain', arc_id: '58155' },
      { id: 'FT53', name: 'First Drop', arc_id: '58156' },
      { id: 'FT54', name: 'The Wisps Come and Go', arc_id: '58157' },
      { id: 'FT55', name: 'Finnish Blitzkrieg', arc_id: '58158' },
      { id: 'FT56', name: 'Primo Contatto', arc_id: '58159' },
      { id: 'FT57', name: 'Wyzoka Mountain', arc_id: '58160' },
      { id: 'FT58', name: 'The Dream is Over', arc_id: '58161' },
      { id: 'FT59', name: 'War the Italian Way', arc_id: '59674' },
      { id: 'FT60', name: 'BloOdy Brothers', arc_id: '59675' },
      { id: 'FT61', name: 'First Cossack Victory', arc_id: '59676' },
      { id: 'FT62', name: 'New Model Army', arc_id: '59677' },
      { id: 'FT63', name: 'Clear That Road!', arc_id: '59678' },
      { id: 'FT64', name: 'Savnik', arc_id: '59679' },
      { id: 'FT65', name: 'Last Chance Breakout', arc_id: '59680' },
      { id: 'FT66', name: 'Raid on Grohote', arc_id: '59681' },
      { id: 'FT67', name: 'Knin Pocket', arc_id: '59682' },
      { id: 'FT68', name: 'Red Lightning', arc_id: '59683' },
      { id: 'FT69', name: 'Durs à Cuire', arc_id: '59684' },
      { id: 'FT70', name: 'Ride Across the Caucasus', arc_id: '60006' },
      { id: 'FT71', name: 'The Last Circle', arc_id: '60007' },
      { id: 'FT72', name: 'Catcher Caught !', arc_id: '60008' },
      { id: 'FT73', name: 'The Adriatic Pirates', arc_id: '60009' },
      { id: 'FT74', name: 'Freeing the Roadway', arc_id: '60010' },
      { id: 'FT75', name: 'Unexpected Fire', arc_id: '60013' },
      { id: 'FT76', name: 'White Suns', arc_id: '60014' },
      { id: 'FT77', name: 'Surprised Buffalo', arc_id: '60015' },
      { id: 'FT78', name: 'The War is Over', arc_id: '60016' },
      // { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 9326,
    name: 'FTC 5',
    description: ``,
    shortDescription: ``,
    includes: ``,
    price: 0, //99,
    intPrice: 0, //100,
    button: '',
    intButton: '',
    imageF: ftc5,
    page: 'ftc5',
    active: false,
    year: 2024,
    who,
    scenarios: [{ id: '', name: '(color indicates attacking side)' }],
  },
  {
    id: 9327,
    name: 'FTC 6',
    description: ``,
    shortDescription: ``,
    includes: ``,
    price: 0, //99,
    intPrice: 0, //100,
    button: '',
    intButton: '',
    imageF: ftc6,
    page: 'ftc6',
    active: false,
    year: 2024,
    who,
    scenarios: [{ id: '', name: '(color indicates attacking side)' }],
  },
  {
    id: 942,
    name: 'FTC 8',
    description: `<p>This product contains both a 56-page magazine and 15 scenarios. The magazine itself contains historical and technical articles on subjects you never dared to ask.</p>`,
    shortDescription: `This product contains both a 56-page magazine and 15 scenarios, and historical and technical articles.`,
    includes: `<p>Map dependency : 2, 10, 13, 15, 16, 17, 19, 21, 23, 32, 33, 43,44, 48, 49, 51, 54, 57, 58, 62, 63, 69, 75, t, 5a, 9b, BFP I, BFP H and BFP M.</p>
      <p>Check <a href="https://lefranctireur.org/spip.php?article147" target="_blank">LFT's FTC9 page</a> for more details.</p>`,
    price: 38,
    intPrice: 70,
    button: 'FFZ6C5WBL55NA',
    intButton: 'F6WXQPAPUPQSY',
    imageF: ftc8,
    page: 'ftc8',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'FT 209', name: 'Euphrates Clash', att: 'allied', arc_id: '63071' },
      { id: 'FT 210', name: 'The Longest Week', arc_id: '63069' },
      { id: 'FT 211', name: '9&egrave; Company Sacrifice', arc_id: '63070' },
      { id: 'FT 212', name: 'For Hitler, for Allah', arc_id: '63074' },
      { id: 'FT 213', name: 'Up the Liri Valley', arc_id: '63075' },
      { id: 'FT 214', name: 'A grain of Sand', arc_id: '63076' },
      { id: 'FT 215', name: 'Ghostly Attack', arc_id: '63079' },
      { id: 'FT 216', name: 'Back in Force', arc_id: '63080' },
      { id: 'FT 217', name: 'Cavalry Delaying Action', arc_id: '63081' },
      { id: 'FT 218', name: 'Taking Luneville', arc_id: '63082' },
      { id: 'FT 219', name: "Koniev's Finest", arc_id: '63077' },
      { id: 'FT 220', name: 'Alsatian Verdun ', arc_id: '63072' },
      { id: 'FT 221', name: 'Independence Day', arc_id: '63078' },
      { id: 'FT 222', name: 'Hetzer Butcher', arc_id: '63083' },
      { id: 'FT 223', name: 'Kings of Bollersdorf', arc_id: '63084' },
    ],
  },
  {
    id: 940,
    name: 'FTC 9',
    description: `<p>The LFT crew is very happy to offer to our little ASL world a selection of 10 scenarios from "Vae Victis", as well as 7 other original designs.</p>
      <p>For those who do not know this publication, "Vae Victis" is a French magazine that deals with wargames in general, and that contains in each of its issues one original ASL scenario (most of the time, from Herr Doktor). It covers a wide variety of subjects and also contains a full game inside. You can check it out here : <a href="https://www.vaevictismag.fr/en/">https://www.vaevictismag.fr/en/</a> as well as on the back cover of FTC9.</p>`,
    shortDescription: `FTC9 is a selection of 10 scenarios from "Vae Victis", as well as 7 other original designs.`,
    includes: `<p>Check <a href="https://lefranctireur.org/spip.php?article147" target="_blank">LFT's FTC9 page</a> for more details.</p>`,
    price: 38,
    intPrice: 70,
    button: '2FFB6HJYWL5J6',
    intButton: '7EEPQBA3GTSQQ',
    imageF: ftc9,
    page: 'ftc9',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'FT 257', name: 'Too little, Too Soon', arc_id: '63872' },
      { id: 'FT 258', name: 'Panzerschlacht!', arc_id: '63863' },
      { id: 'FT 259', name: 'Alcazar!', arc_id: '63864' },
      { id: 'FT 260', name: 'Inainte!', arc_id: '63073' },
      { id: 'FT 261', name: 'The Battle of Algiers', arc_id: '63865' },
      { id: 'FT 262', name: '20 years later...', arc_id: '63866' },
      { id: 'FT 263', name: 'Summer Duty', arc_id: '63874' },
      { id: 'FT 264', name: 'Hands off the Loot!', arc_id: '63868' },
      { id: 'FT 265', name: 'Balkan-Kessel!', arc_id: '63875' },
      { id: 'FT 266', name: 'A Fine Mess...', arc_id: '63876' },
      { id: 'FT 267', name: 'Thugny-Trugny', arc_id: '63877' },
      { id: 'FT 268', name: "Spain's Crusaders", arc_id: '63869' },
      { id: 'FT 269', name: 'End of the Rope...', arc_id: '63870' },
      { id: 'FT 270', name: 'Revenges at Saint-Julien', arc_id: '63878' },
      { id: 'FT 271', name: 'The Lock of Colmar', arc_id: '63879' },
      { id: 'FT 272', name: 'Rise of the Viet Minh', arc_id: '63880' },
      { id: 'FT 273', name: 'Former Foes', arc_id: '63881' },
    ],
  },
  {
    id: 9101,
    name: 'Deluxe Pack #1',
    description: ``,
    shortDescription: ``,
    includes: ``,
    price: 0, //99,
    intPrice: 0, //100,
    button: '',
    intButton: '',
    imageF: dx,
    page: 'deluxe',
    active: false,
    year: 2024,
    who,
    scenarios: [{ id: '', name: '(color indicates attacking side)' }],
  },
  {
    id: 9202,
    name: 'Fight for Seoul',
    description: `<p><b>The Fight for Seoul</b> is LFT's third Historical Module, after The Shield of Kholm and Operation Chariot. This module is also LFT's first foray into the Korean War, the first hot war of the Cold War era.</p>
      <p><b>The Fight for Seoul</b> contains 21 H-series scenarios, 2 campaign games, two maps (each KGS in size), rules, and one sheet of full-color counters. The action moves from battles to cross rolling rural terrain in the face of entrenched hilltop defenders and on into a bitter urban struggle amid a city that was a mix of architectural styles. <b>The Fight for Seoul</b> captures a pivotal moment in the Korean War, one which swung the war in favor of the United Nations, if only for a few months.</p>`,
    shortDescription: `Fight for Seoul captures the liberation of Seoul by U.S. Marines and ROK Marine Corps from KPA forces.`,
    includes: `<p><b>The Fight for Seoul</b> contents will come in a box (shrink-wrapped, not like KGS or StN, and in another format, 3 cms thick).</p>
      <h5 style="font-weight:bold;font-size:30px;margin-bottom:10px;">Smith's Ridge module</h5>
      <p><ul>
        <li>2 A1 maps (594 x 841 mm, which is 23.39 x 33.11 inches) for a total playing area of 33.11 x 46.81 inches.</li>
        <li>Specific Rules Booklet (28 pages)</li>
        <li>11 Scenarios</li>
        <li>3 pages of Terrain Charts</li>
      </ul></p>
      <h5 style="font-weight:bold;font-size:30px;margin-bottom:10px;">Seoul module</h5>
      <p><ul>
        <li>2 A1 maps (594 x 841 mm, which is 23.39 x 33.11 inches) for a total playing area of 33.11 x 46.81 inches.</li>
        <li>its specific rules booklet (36 pages)</li>
        <li>10 scenarios</li>
        <li>4 pages of Terrain charts</li>
        </li>
      </ul></p>
      <h5 style="font-weight:bold;font-size:30px;margin-bottom:10px;">Campaign games:</h5>
      <p><ul>
        <li>CG specific rules booklet (28 pages)</li>
        <li>Two CGs with, for each of them:
          <ul>
            <li>Scenario cards</li>
            <li>UN initial OB</li>
            <li>Initial KPA OB</li>
            <li>Reinforcements Charts</li>
            <li>FLAK Alley Aid Chart (x2)</li>
            <li>RG Purchase Record</li>
            <li>CG Roster</li>
          </ul>
      </ul></p>
      <h5 style="font-weight:bold;font-size:30px;margin-bottom:10px;">A counter sheet</h5>
      <p>LFT style (with a mix of &frac58;" and &frac12;" counters)</p>`,
    price: 121.5,
    intPrice: 150,
    button: 'ZN524W8N2Q5ZA',
    intButton: 'NAYCYG9DXFTFG',
    imageF: ffs,
    page: 'ffs',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: '', name: "Smith's Ridge Scenarios" },
      { id: 'FT SmR1', name: 'Mired', att: 'KPA', arc_id: '64082' },
      { id: 'FT SmR2', name: "Fenton's Foe", att: 'KPA', arc_id: '64083' },
      { id: 'FT SmR3', name: "In Min's Gun", att: 'USMC', arc_id: '64085' },
      { id: 'FT SmR4', name: 'Passage Of Lines', att: 'KPA', arc_id: '64086' },
      { id: 'FT SmR5', name: 'Fox On The Hill', att: 'KPA', arc_id: '64088' },
      { id: 'FT SmR6', name: "Fox's Fretful Night", att: 'USMC', arc_id: '64089' },
      { id: 'FT SmR7', name: "Fightin' Over The Finger", att: 'KPA', arc_id: '64090' },
      { id: 'FT SmR8', name: "Smith's Ridge", att: 'KPA', arc_id: '64091' },
      { id: 'FT SmR9', name: "Puller's Pugilists", att: 'KPA', arc_id: '64092' },
      { id: 'FT SmR10', name: 'Hotheaded Treadheads', att: 'KPA', arc_id: '64093' },
      { id: 'FT SmR11', name: 'Whoa Nellie!', att: 'KPA', arc_id: '64094' },
      { id: '', name: 'Seoul Scenarios' },
      { id: 'FT S1', name: 'Sights On Seoul', att: 'KPA', arc_id: '64095' },
      { id: 'FT S2', name: 'Besting Basilone', att: 'USMC', arc_id: '64096' },
      { id: 'FT S3', name: 'Last Stand On An-san', att: 'KPA', arc_id: '64x' },
      { id: 'FT S4', name: 'Dilemma On Ma Po Boulevard', att: 'KPA', arc_id: '64098' },
      { id: 'FT S5', name: 'Rail Yard Rumble', att: 'KPA', arc_id: '64099' },
      { id: 'FT S6', name: 'At The Races With Dark Horse Six', att: 'KPA', arc_id: '64100' },
      { id: 'FT S7', name: 'Looks Like The Fourth Of July', att: 'KPA', arc_id: '64101' },
      { id: 'FT S8', name: 'Changing The Guard At Namdeamun', att: 'KPA', arc_id: '64102' },
      { id: 'FT S9', name: 'Cowboys And Indians', att: 'KPA', arc_id: '64103' },
      { id: 'FT S10', name: 'Liberte Call', att: 'KPA', arc_id: '64104' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 9110,
    name: 'INOR',
    description: `<p><b>The Green Hell of Inor</b> is LFT's attempt at bringing you 2 weeks of epic fighting that took place in the Ardennes Forest during the very first days of Fall Gelb, the invasion of France.</p>
            <p><img alt="HASL Map" src="${inorMap}" style="float:left;padding:0 10px 10px 0;" />Designed by Lionel Colin and Xavier Vitry, with the help of scholars in the field of French and German military history, and the international team that is Le Franc Tireur, <b>The Green Hell of Inor</b> contains everything you need to play <i>[EXC : the metric half-ton of ASL material that you always need]</i> including two counter sheets with French Foreign Legion, Colonial infantry, early war German machine guns and several other new counters.<br><br>Also included are a historical map, a rules booklet (supplemented with a historical booklet with images of the town "Then & Now", enhanced with a battlefield tour and several other articles about the battle of Inor and the 1940 French Campaign), and 16 historical scenarios.</p>
            <p>In addition, three CGs are offered, with several new and easy to understand rules that will allow the players to place interdiction fire with their artillery, or use counter battery fire against enemy guns!</p>`,
    shortDescription: `<b>The Green Hell of Inor</b> is LFT's coverage of epic fighting that took place in the Ardennes Forest.`,
    includes: `
      <div style="clear:both;" />
      <img alt="Counters" src="${inorCounters}" style="float:left;margin-top:10px;margin-right:15px;" />
      <h3 style="font-weight:bold;font-size:30px;margin-bottom:10px;">The Troops:</h3>
      <p>This module provides counters to represent various troops that are not depicted in the core modules.</p>

      <p>As the French, you will get (all of them with specific counters):
      <ul style="margin-left:100px;">
        <li>Senegalese Tirailleurs</li>
        <li>Algerian Tirailleurs</li>
        <li>Colonial troops</li>
        <li>Corps-Francs units</li>
        <li>Foreign Legion (including sappers!)</li>
        <li>Full-color AFV that fought this battle (with camouflage pattern)</li>
        <li>Leaders never seen before (and probably, thereafter!)</li>
      </ul></p>

      <p>The Germans use regular MMP counters, but LFT has provided early-war MG. You will want to read one of the 32 designer's notes to get the explanation.</p>

      <div style="clear:both;" />
      <img alt="CG Cards" src="${inorCg}" style="float:left;margin-top:10px;margin-right:15px;" />
      <h3 style="font-weight:bold;font-size:30px;margin-bottom:10px;">The Campaign Games</h3>
      <p><ul>
        <li><b>CG I - The Pride of the Foreign Legion</b> (introductory CG, 3 CG dates)</li>
        <li><b>CG II - Sauerei Wald</b> (5 CG dates)</li>
        <li><b>CG III - Flanking the Maginot Line</b> (8 CG dates, the whole campaign that uses the whole map)</li>
      </ul></p>`,
    price: 140,
    intPrice: 160,
    button: '7FXF3MDR5XNK6',
    intButton: 'LL8M5SXLLCXE6',
    imageF: gh,
    page: 'green-hell',
    active: true,
    year: 2020,
    who,
    scenarios: [
      { id: 'INOR 1', name: 'Deep Into the French Front', att: 'german', arc_id: '65490' },
      { id: 'INOR 2', name: 'Villy Muss Fallen ! East', att: 'german', arc_id: '65491' },
      { id: 'INOR 3', name: "Roucaud's Blow", att: 'french', arc_id: '65482' },
      { id: 'INOR 4', name: 'Wooden Hell', att: 'german', arc_id: '65493' },
      { id: 'INOR 5', name: 'Bois de la Hache', att: 'french', arc_id: '65494' },
      { id: 'INOR 6', name: 'First Counterattack', att: 'french', arc_id: '65495' },
      { id: 'INOR 7', name: 'Sauerei Wald', att: 'german', arc_id: '65496' },
      { id: 'INOR 8', name: 'Hill 311', att: 'french', arc_id: '65497' },
      { id: 'INOR 9', name: 'Night Terror', att: 'french', arc_id: '65498' },
      { id: 'INOR 10', name: 'Villy Muss Fallen ! West', att: 'german', arc_id: '65499' },
      { id: 'INOR 11', name: 'Woods Ashes', att: 'french', arc_id: '65500' },
      { id: 'INOR 12', name: 'Reaction', att: 'french', arc_id: '65501' },
      { id: 'INOR 13', name: 'Night Patrol', att: 'german', arc_id: '65502' },
      { id: 'INOR 14', name: "Cendriere's Farm", att: 'german', arc_id: '65503' },
      { id: 'INOR 15', name: '« À moi la légion ! »', att: 'french', arc_id: '65504' },
      { id: 'INOR 16', name: 'Not Men but Demons', att: 'german', arc_id: '65505' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 9111,
    name: 'KGS',
    description: ``,
    shortDescription: ``,
    includes: ``,
    price: 0, //99,
    intPrice: 0, //100,
    button: '',
    intButton: '',
    imageF: kgs,
    page: 'kgs',
    active: false,
    year: 2024,
    who,
    scenarios: [{ id: '', name: '(color indicates attacking side)' }],
  },
  {
    id: 9112,
    name: 'KGS Players Guide',
    description: ``,
    shortDescription: ``,
    includes: ``,
    price: 0, //99,
    intPrice: 0, //100,
    button: '',
    intButton: '',
    imageF: kgp,
    page: 'kgs-pg',
    active: false,
    year: 2024,
    who,
    scenarios: [{ id: '', name: '(color indicates attacking side)' }],
  },
  {
    id: 9117,
    name: "Nor'easter Pack II",
    description: `This is the latest product (2021) from the new England ASLERs! This is from the same producers who brought you the YASL pack a few years ago. This time they had LFT produce the pack. It features 3 boards and 15 scenarios.`,
    shortDescription: `This 2021 offering from the New England ASLERs features 3 boards and 15 scenarios.`,
    includes: `<p>This pack includes the following:</p>
      <p>Board NP1: <br class="autobr">
      <img src="${bdNP1}" width="287" height="105" alt=""></p>
      <p>Board NP2: <br class="autobr">
      <img src="${bdNP2}" width="287" height="107" alt=""></p>
      <p>Board NP3: <br class="autobr">
      <img src="${bdNP3}" width="287" height="106" alt=""></p>
      <p>Check <a href="https://lefranctireur.org/spip.php?article153" target="_blank">LFT's page</a> for more details.</p>`,
    price: 42,
    intPrice: 55,
    button: '5U8479JHQKV5C',
    intButton: 'S5YXT88798G3A',
    imageF: np,
    page: 'norpack2',
    active: true,
    year: 2021,
    who,
    scenarios: [
      { id: 'YASL 14', name: 'Szczuki', arc_id: '65416' },
      { id: 'YASL 15', name: 'Chances are Slim', arc_id: '65323' },
      { id: 'YASL 16', name: 'Legion of Doom', arc_id: '65417' },
      { id: 'YASL 17', name: 'Hill 200 &#8211; Gateway to Rzhev', arc_id: '65418' },
      { id: 'YASL 18', name: 'Recon on the logging trail', arc_id: '65334' },
      { id: 'YASL 19', name: 'Indirect Panther', arc_id: '65335' },
      { id: 'YASL 20', name: 'Broe Bay Brouhaha', arc_id: '65322' },
      { id: 'YASL 21', name: 'A Matter of Honor', arc_id: '65419' },
      { id: 'YASL 22', name: 'Where the Reindeer Dare Not Go', arc_id: '65336' },
      { id: 'YASL 23', name: 'Bloody Christmas Hill', arc_id: '65420' },
      { id: 'YASL 24', name: 'The Flying Column', arc_id: '65339' },
      { id: 'YASL 25', name: "Stein's Stinger", arc_id: '65421' },
      { id: 'YASL 26', name: 'Whiteout', arc_id: '65337' },
      { id: 'YASL 27', name: 'A Man Called Hog Jaw', arc_id: '65422' },
      { id: 'YASL 28', name: "Fool's Errand", arc_id: '65338' },
    ],
  },
  {
    id: 9301,
    name: 'Rat Pocket Charts v.3',
    description: '',
    shortDescription: `The latest Rat Pocket Charts were updated to include the Korean War information!`,
    includes: `<p>52 pages with all the necessary charts to play IFT or IIFT, OBA & OVR flowchart, night, PTO, National capabilities, and so on.</p>
      <p>Here are the main additions & changes for the new version:
      <ul>
        <li>The TH & TK tables have been moved on page 4 & 5</li>
        <li>The national capabilities charts have been expanded (including LFT 14 Italians, Spanish Blue Division, updated French for a future LFT module & Korean War)</li>
        <li>Updated chapter B</li>
        <li>Bombardment table</li>
        <li>Naval OBA</li>
        <li>Stun/STUN/Shock/UK tables</li>
        <li>Weather charts</li>
        <li>LC charts</li>
        <li>Chapter W with Korean War specific charts</li>
      </ul></p>`,
    price: 0, //44,
    intPrice: 0,
    button: '',
    intButton: '',
    imageF: rpc3,
    page: 'rpc3',
    active: true,
    year: 2021,
    who,
  },
  {
    id: 92,
    name: 'Inor Players Guide',
    description: '',
    shortDescription: `All is in its title: 64 pages for "The Green Hell of Inor" fans, as well as 16 scenarios and a Campaign Game.`,
    includes: `<p>What's inside:
      <ul>
        <li>12 Inor scenarios</li>
        <li>4 scenarios around Eben Emaël and the bridges over the Canal Albert</li>
        <li>1 Campaign Game (CG IV "Death at Soiry Farm")</li>
        <li>A big article which reads as an ASL novel (Inor CG AAR by Clément "Hill" Bertrand)</li>
        <li>Designers notes on several Inor scenarios</li>
        <li>A small Interview of Dan Dolan about his Dinant module</li>
        <li>2 AAR or the taking of Villy sur Chiers (East and West)</li>
        <li>Inor optional Rules</li>
      </ul></p>`,
    price: 85,
    intPrice: 115,
    button: 'V2DNH6B8BXBW6',
    intButton: '45AJ3KMUXEGZJ',
    imageF: inorPg,
    page: 'inor-pg',
    active: true,
    year: 2025,
    who,
    scenarios: [
      { id: 'FT342', name: 'Extra-Muros', arc_id: '67244' },
      { id: 'FT343', name: 'Manu Militari', arc_id: '67245' },
      { id: 'FT344', name: 'Ex Cathedra', arc_id: '67246' },
      { id: 'FT345', name: 'Deus Ex Machina', arc_id: '67247' },
      { id: 'FT INOR17', name: 'Corps-Franc', arc_id: '67220' },
      { id: 'FT INOR18', name: 'Here I Stand', arc_id: '67221' },
      { id: 'FT INOR19', name: '"Pointed Stone" Broken', arc_id: '67222' },
      { id: 'FT INOR20', name: 'Operation Waldfest', arc_id: '67223' },
      { id: 'FT INOR21', name: 'Gaudron Bridge', arc_id: '67240' },
      { id: 'FT INOR22', name: 'The Legion Roadblock', arc_id: '67225' },
      { id: 'FT INOR23', name: 'Last Attack Before Rotation', arc_id: '67241' },
      { id: 'FT INOR24', name: 'Trial of Will', arc_id: '67242' },
      { id: 'FT INOR25', name: 'Last Stand at Connage', arc_id: '67226' },
      { id: 'FT INOR26', name: 'The Defense of Mont Damion', arc_id: '67248' },
      { id: 'FT INOR27', name: 'The Colonials Hold The Line', arc_id: '67224' },
      { id: 'FT INOR28', name: 'Visibility Zero', arc_id: '67227' },
    ],
  },
  {
    id: 91,
    name: 'The ASL Companion #1',
    description: '',
    shortDescription: `<b>The ASL Companion</b> is divided into 90 chapters grouped into twelve parts.`,
    includes: `<p>PART I
      <h4>The Many Facets of ASL</h4>
      <ul>
        <li> Chapter 1 Welcome to Advanced Squad Leader</li>
        <li> Chapter 2 Warriors and Weapons</li>
        <li> Chapter 3 The Lay of the Land</li>
        <li> Chapter 4 The Play of the Game</li>
        <li> Chapter 5 The Role of Fate</li>
      </ul>
      <p>Chapter 1, “Welcome to Advanced Squad Leader” introduces the reader to ASL and discusses the history of the Squad Leader and ASL game systems.</p>
      <p>Chapter 2, “Warriors and Weapons” describes the infantry squads, leaders, and weapons that make up the core of ASL. It also discusses vehicles and ordnance in general terms.</p>
      <p>Chapter 3, “The Lay of the Land” discusses the various terrain types found on ASL mapboards and how they affect gameplay.</p>
      <p>Chapter 4, “The Play of the Game” provides an overview of how a typical game turn proceeds, including movement, firing, and other actions.</p>
      <p>Chapter 5, “The Role of Fate” explains the use of dice in ASL and how randomness influences the outcome of actions in the game.</p>
      <p>The next four chapters will discuss the four main components of ASL, the pieces, the mapboards and overlays, the scenarios, and the dice. These five chapters form Part I, “The Many Facets of ASL”.</p>`,
    price: 50,
    intPrice: 0,
    button: 'QR9PDVXU5P8UL',
    imageF: aslCompanion,
    page: 'aslCompanion-pg',
    active: true,
    year: 2025,
    who,
  },
];
