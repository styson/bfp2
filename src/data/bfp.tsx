import type { Product, Sale } from '../components/types';
import {
  bd,
  bd_b,
  bj,
  bj_b,
  btb,
  btb_b,
  cos_b,
  cs,
  ctr,
  ctr_b,
  hg,
  hg_b,
  how,
  // bdA,
  // bdB,
  // bdH,
  // bdI,
  // bdJ,
  // bdK,
  // bdBF1,
  miniA,
  miniB,
  miniH,
  miniI,
  miniJ,
  miniK,
  mini7,
  miniBF1,
  // oRC1,
  miniRC1,
  // oF1,
  miniF1,
  itr,
  itr_b,
  mc,
  mc_b,
  oc,
  oc_b,
  on,
  on_b,
  os,
  os_b,
  oto,
  oto_b,
  pf,
  pif_b,
} from './images';

const who = 'bfp';
export const products: Product[] = [
  {
    id: 2,
    name: 'BFP6: Mannerheim Cross',
    description: `<p>BFP 6: Mannerheim Cross is a another huge package that will thrust players into the battles involving Finland. This is meat and potatoes ASL, so there is plenty of action in Mannerheim Cross for everybody!</p>
    <p>The size of this product is even bigger than Poland in Flames. This was under development for years, and all 44 scenarios were very thoroughly playtested.</p>`,
    shortDescription: `<p>Mannerheim Cross is a another huge package that will thrust players into the battles involving Finland.</p>`,
    includes: `<p><b>Mannerheim Cross</b> includes the following:
        <ul>
          <li>44 Action-Packed Scenarios</li>
          <li>4 full sheets of counters, depicting more units, weapons, fortifications, vehicles, and planes</li>
          <li>1 double-wide 16"x22" geomorphic mapboard. This map represents the terrain and villages of Finland and Russia, and is printed in two 8"x22" sections on heavy card stock (BFP DW&#8209;10)</li>
          <li>1 half-wide 16"x11" geomorphic mapboard. This map represents the "tank-country" and villages of Finland and Russia, and is printed in two 8"x22" sections on heavy card stock (BFP HW&#8209;1)</li>
          <li>3 8"x22" geomorphic mapboards, also printed on heavy card stock (BFP S, T, U)</li>
          <li>Rules pages describing new terrain counters, vehicle listings/notes, and special units</li>
        </ul>
      </p>
      <h5>Other boards needed:</h5>
      <p>
        <ul>
        <li>BFP A, B, Q, R, DW-1, DW-6, DW-8</li>
        <li>34, 37, 42, 57, 62, 67, 69, 73, 74, 75, 85, 86</li>
        <li>1b, 2a, 6a, 7a, 10a, 11a, 14a</li>
        <li>SK o, n</li>
        <li>LFT1</li>
        </ul>
      </p>`,
    price: 194,
    intPrice: 224,
    button: 'HJFWER752C8BE',
    intButton: '9M2M8U7MHXFBQ',
    imageF: mc,
    imageB: mc_b,
    page: 'mc',
    active: true,
    year: 2024,
    who,
    scenarios: [
      { id: 'BFP 150', name: 'Grenades, Knives, and Fists', att: 'russian', arc_id: '67070' },
      { id: 'BFP 151', name: 'Delaying Action at Krylänmäki', att: 'russian', arc_id: '67071' },
      { id: 'BFP 152', name: 'No Vacancy', att: 'finnish', arc_id: '67072' },
      { id: 'BFP 153', name: 'Tolvajarvi Tussle', att: 'finnish', arc_id: '67073' },
      { id: 'BFP 154', name: 'Little Tin Can Opener', att: 'russian', arc_id: '67074' },
      { id: 'BFP 155', name: 'Leningrad Reds', att: 'finnish', arc_id: '67075' },
      { id: 'BFP 156', name: 'Attacking the Giant', att: 'russian', arc_id: '67077' },
      { id: 'BFP 157', name: 'Gateway to Viipuri', att: 'russian', arc_id: '67078' },
      { id: 'BFP 158', name: 'Mutka Strikes Again', att: 'russian', arc_id: '67079' },
      { id: 'BFP 159', name: 'Machine Gun Alley', att: 'finnish', arc_id: '67076' },
      { id: 'BFP 160', name: 'Karelian Sculptors', att: 'finnish', arc_id: '67080' },
      { id: 'BFP 161', name: 'Red Ice', att: 'russian', arc_id: '67081' },
      { id: 'BFP 162', name: 'Hand Delivered Sausage', att: 'russian', arc_id: '67082' },
      { id: 'BFP 163', name: 'Million Dollar Bash', att: 'russian', arc_id: '67083' },
      { id: 'BFP 164', name: 'Fire and Brimstone', att: 'russian', arc_id: '67084' },
      { id: 'BFP 165', name: 'Summajarvi 5 (Sj5)', att: 'russian', arc_id: '67085' },
      { id: 'BFP 166', name: 'Haunted Zoo', att: 'finnish', arc_id: '67086' },
      { id: 'BFP 167', name: 'Muolaa 1', att: 'russian', arc_id: '67087' },
      { id: 'BFP 168', name: 'Leningrad Monsters', att: 'russian', arc_id: '67088' },
      { id: 'BFP 169', name: 'Last Minute Heroics', att: 'russian', arc_id: '67089' },
      { id: 'BFP 170', name: "The Tyrant's Block", att: 'russian', arc_id: '67090' },
      { id: 'BFP 171', name: 'Teaching Superman', att: 'german', arc_id: '67091' },
      { id: 'BFP 172', name: 'Beauty Ruined', att: 'finnish', arc_id: '67098' },
      { id: 'BFP 173', name: 'Kalevela Beckons', att: 'russian', arc_id: '67099' },
      { id: 'BFP 174', name: 'Castle of Onega', att: 'finnish', arc_id: '67100' },
      { id: 'BFP 175', name: 'Hostage to Fortune', att: 'finnish', arc_id: '67101' },
      { id: 'BFP 176', name: 'Hell Frozen Over', att: 'finnish', arc_id: '67102' },
      { id: 'BFP 177', name: 'The 11th Man', att: 'russian', arc_id: '67103' },
      { id: 'BFP 178', name: 'Karelian Inferno', att: 'russian', arc_id: '67104' },
      { id: 'BFP 179', name: 'Call Them Bazookas', att: 'russian', arc_id: '67105' },
      { id: 'BFP 180', name: "Stig's Stugs", att: 'russian', arc_id: '67106' },
      { id: 'BFP 181', name: 'Under the Bloody Birches', att: 'russian', arc_id: '67107' },
      { id: 'BFP 182', name: 'The Anzio of East Karelia', att: 'russian', arc_id: '67108' },
      { id: 'BFP 183', name: 'Bad Blood', att: 'finnish', arc_id: '67109' },
      { id: 'BFP 184', name: "Blick's Balk", att: 'russian', arc_id: '67110' },
      { id: 'BFP 185', name: 'Talinmylly Motti', att: 'russian', arc_id: '67111' },
      { id: 'BFP 186', name: 'Tali Whacker', att: 'russian', arc_id: '67112' },
      { id: 'BFP 187', name: 'Bloody Road to Ihantala', att: 'russian', arc_id: '67113' },
      { id: 'BFP 188', name: 'Inferno at Ihantala', att: 'russian', arc_id: '67114' },
      { id: 'BFP 189', name: 'Blood on the Shores', att: 'russian', arc_id: '67115' },
      { id: 'BFP 190', name: 'Vuoski Melee', att: 'russian', arc_id: '67116' },
      { id: 'BFP 191', name: 'Brotell: The Finnish Ace', att: 'russian', arc_id: '67117' },
      { id: 'BFP 192', name: 'The Last Motti', att: 'russian', arc_id: '67118' },
      { id: 'BFP 193', name: 'Lapland Armor', att: 'russian', arc_id: '67119' },
    ],
  },
  {
    id: 4,
    name: 'BFP5: Poland in Flames',
    description: `<p>Poland in Flames (PiF) covers the conflict that triggered the start of World War 2 in Europe when Germany invaded Poland in September, 1939. This campaign was much more than the German Blitzkrieg overrunning a helpless Polish opponent. Rather, the polish, deficient in both quality and quantity to the German Army as well as having to fight against Slovak and Russian forces, put up stiff resistance under the most dire of circumstances. The contents of PiF depict this brave struggle against overwhelming odds.</p>
    <p>The size of this product is bigger than <i>Blood and Jungle</i> or <i>Crucible of Steel</i>. This was under development for years, and all 45 of the scenarios were very thoroughly playtested.</p>`,
    shortDescription: `<p>Poland in Flames covers the conflict that triggered WW2 when Germany invaded Poland in September, 1939.</p>`,
    includes: `<p><b>Poland in Flames</b> includes the following:
        <ul>
          <li>45 Action-Packed Scenarios in full color print</li>
          <li>840 Full color, die cut &frac12;" counters</li>
          <li>440 Full color, die cut &frac58;" counters</li>
          <li>Four 8"x22" geomorphic boards (BFP O, P, Q, R) printed on heavy card stock</li>
          <li>Two 16"x22" doublewide geomorphic boards (DW&#8209;5, DW&#8209;6) printed on heavy card stock</li>
          <li>Articles covering Guns, Fires, and much more</li>
          <li>Rules for Ground Attack Aircraft, Multiple Bomb Load Bombers, Multi-Material Buildings, and more</li>
          <li>Rules pages describing new Vehicles/Ordnance notes, period Aircraft, and new Infantry units</li>
        </ul>
      </p>
      <p>This is not a complete game. Ownership of the following products are required to play all of the included scenarios:</p>
      <p>ASL&reg; Boards: 3, 5, 6, 10, 13, 17, 18, 21, 32, 34, 36, 38, 40, 42, 44, 45, 46, 52, 57, 59, 62, 63, 64, 65, 1a, 2a, 3a, 5a, 6a, 7a/b</p>
      <p>MMP/Hasbro: Beyond Valor&reg;, Armies of Oblivion&reg;</p>
      <p>BFP: Into the Rubble (1 scenario), High Ground 2 (3 scenarios), Blood and Jungle (3 scenarios), Crucible of Steel (4 scenarios)</p>`,
    price: 149,
    intPrice: 175,
    button: '9XW4EM8VMWCTU',
    intButton: '3VDEQKQSK39WE',
    imageF: pf,
    imageB: pif_b,
    page: 'pif',
    active: true,
    year: 2018,
    who,
    scenarios: [
      { id: 'BFP 105', name: 'The Winter City', att: 'axis', arc_id: '62639' },
      { id: 'BFP 106', name: 'Going Postal', att: 'german', arc_id: '62640' },
      { id: 'BFP 107', name: 'Costly Baptism', att: 'german', arc_id: '62642' },
      { id: 'BFP 108', name: 'Ceramic City', att: 'german', arc_id: '62643' },
      { id: 'BFP 109', name: 'Training Day', att: 'german', arc_id: '62644' },
      { id: 'BFP 110', name: 'Polish Panzerjaegers', att: 'german', arc_id: '62645' },
      { id: 'BFP 111', name: 'Before the Blunder', att: 'german', arc_id: '62646' },
      { id: 'BFP 112', name: 'Killer Carp', att: 'allied', arc_id: '62648' },
      { id: 'BFP 113', name: 'Bunker Bash', att: 'german', arc_id: '62649' },
      { id: 'BFP 114', name: 'Engineering Defeat', att: 'german', arc_id: '62650' },
      { id: 'BFP 115', name: 'Turned Back at Tylicz', att: 'axis', arc_id: '62651' },
      { id: 'BFP 116', name: 'Stop, Turn, Fight!', att: 'allied', arc_id: '62652' },
      { id: 'BFP 117', name: 'Silent Bayonets', att: 'allied', arc_id: '62653' },
      { id: 'BFP 118', name: 'Kazina Klash', att: 'german', arc_id: '62654' },
      { id: 'BFP 119', name: 'Real Steel', att: 'german', arc_id: '62655' },
      { id: 'BFP 120', name: 'Defiant Resistance', att: 'german', arc_id: '62656' },
      { id: 'BFP 121', name: 'Old Friends', att: 'german', arc_id: '62657' },
      { id: 'BFP 122', name: 'At Sword Point', att: 'allied', arc_id: '62658' },
      { id: 'BFP 123', name: 'Asphalt Soldiers', att: 'allied', arc_id: '62659' },
      { id: 'BFP 124', name: 'The Tanks of Warsaw', att: 'german', arc_id: '62660' },
      { id: 'BFP 125', name: 'A Wave Breaking with the Tide', att: 'allied', arc_id: '62661' },
      { id: 'BFP 126', name: 'Give em Some Flak', att: 'german', arc_id: '62662' },
      { id: 'BFP 127', name: 'The Road to Warsaw', att: 'german', arc_id: '62663' },
      { id: 'BFP 128', name: 'The Devil’s Armpit', att: 'allied', arc_id: '62664' },
      { id: 'BFP 129', name: 'A Bitter Day', att: 'allied', arc_id: '62665' },
      { id: 'BFP 130', name: 'The Spearhead', att: 'allied', arc_id: '62666' },
      { id: 'BFP 131', name: 'Zboiska Heights', att: 'allied', arc_id: '62667' },
      { id: 'BFP 132', name: 'Steel Garden', att: 'german', arc_id: '62668' },
      { id: 'BFP 133', name: 'Over the Hills', att: 'german', arc_id: '62669' },
      { id: 'BFP 134', name: 'Hell at Kiernozia', att: 'german', arc_id: '62670' },
      { id: 'BFP 135', name: 'No Shortage of Determination', att: 'allied', arc_id: '62671' },
      {
        id: 'BFP 136',
        name: 'Boiling Kettle of Fire and Blood',
        att: 'allied',
        arc_id: '62672',
      },
      { id: 'BFP 137', name: 'Death Throes', att: 'allied', arc_id: '62673' },
      { id: 'BFP 138', name: 'Outgunned', att: 'allied', arc_id: '62674' },
      { id: 'BFP 139', name: 'Cockroaches Against Panzers', att: 'german', arc_id: '62675' },
      { id: 'BFP 140', name: 'Iron Greeting', att: 'allied', arc_id: '62676' },
      { id: 'BFP 141', name: 'Belorussian Brawl', att: 'russian', arc_id: '62677' },
      { id: 'BFP 142', name: 'The New Eagles', att: 'russian', arc_id: '62678' },
      { id: 'BFP 143', name: 'Gun Show', att: 'russian', arc_id: '62681' },
      { id: 'BFP 144', name: 'Forest of Death', att: 'german', arc_id: '62682' },
      { id: 'BFP 145', name: 'Rock and a Hard Place', att: 'german', arc_id: '62683' },
      { id: 'BFP 146', name: 'Szacked', att: 'allied', arc_id: '62684' },
      { id: 'BFP 147', name: 'The Commissar’s Folly', att: 'russian', arc_id: '62685' },
      { id: 'BFP 148', name: 'Backs Against the Wall', att: 'russian', arc_id: '62686' },
      { id: 'BFP 149', name: 'Kock Strong', att: 'german', arc_id: '62687' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 6,
    name: 'BFP4: Crucible of Steel',
    description: `<p>BFP 4: Crucible of Steel is a another huge package that will thrust players into the battles of Kursk. This is meat and potatoes ASL, so there is plenty of action in Crucible of Steel for everybody!</p>
    <p>The size of this product is on the same scale as Blood and Jungle. This was under development for years, and all 32 of the scenarios were very thoroughly playtested.</p>`,
    shortDescription: `<p>Crucible of Steel sends players into the battles of Kursk, which involved over 6,000 tanks and 2 million men.</p>`,
    includes: `<p><b>Crucible of Steel</b> includes the following:
        <ul>
          <li>32 Action-Packed Scenarios</li>
          <li>2 full sheets of counters, depicting more units, weapons, vehicles, and planes that are depicted in the scenarios</li>
          <li>3 double-wide 16"x22" geomorphic mapboards. These maps represent the "tank-country" and villages of Kursk, and are printed in two 8"x22" sections on heavy card stock (BFP DW&#8209;2, DW&#8209;3, DW&#8209;4)</li>
          <li>3 8"x22" geomorphic mapboards, also printed on heavy card stock (BFP L, M, N)</li>
          <li>Huge magazine with articles on the project, slopes, fortifications, and dug-in tanks</li>
          <li>Rules pages describing new terrain counters, vehicle listings/notes, and special units</li>
        </ul>
      </p>
      <h5>Other boards required to play all 32 scenarios:</h5>
      <table>
        <tbody>
        <tr>
          <td>16, 17 </td>
          <td>Yanks</td>
        </tr>
        <tr>
          <td>33 </td>
          <td>Last Hurrah or Doomed Battalions 3rd Edition</td>
        </tr>
        <tr>
          <td>38 </td>
          <td>Gung Ho</td>
        </tr>
        <tr>
          <td>43 </td>
          <td>Action Pack 1 or Action Pack 3</td>
        </tr>
        <tr>
          <td>44 </td>
          <td>Doomed Battalions</td>
        </tr>
        <tr>
          <td>56, 57 </td>
          <td>Action Pack 5</td>
        </tr>
        <tr>
          <td>62 </td>
          <td>Action Pack 7</td>
        </tr>
        <tr>
          <td>BFP B </td>
          <td>Into the Rubble</td>
        </tr>
        <tr>
          <td>BFP H, BFP I</td>
          <td>High Ground 2</td>
        </tr>
        <tr>
          <td>BFP DW&#8209;1</td>
          <td>Blood & Jungle</td>
        </tr>
        </tbody>
      </table>
      <h5>Scenarios that need the other boards listed:</h5>
      <table>
        <tbody>
        <tr>
          <td>BFP B, 43</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>BFP H, BFP I</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>BFP DW&#8209;1, 57</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>17</td>
          <td>3 scenarios</td>
        </tr>
        <tr>
          <td>33</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>38</td>
          <td>2 scenarios</td>
        </tr>
        <tr>
          <td>43</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>44</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>56</td>
          <td>2 scenarios</td>
        </tr>
        <tr>
          <td>62</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>56, 57</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>57, 43</td>
          <td>1 scenario</td>
        </tr>
        <tr>
          <td>16, 44</td>
          <td>1 scenario</td>
        </tr>
        </tbody>
      </table>`,
    price: 149,
    intPrice: 175,
    button: 'RP87E9JA9FSEN',
    intButton: 'RKN5YHK3LATEA',
    imageF: cs,
    imageB: cos_b,
    page: 'cos',
    active: true,
    year: 2017,
    who,
    scenarios: [
      { id: 'BFP 73', name: 'Preliminary Move', att: 'german', arc_id: '61322' },
      { id: 'BFP 74', name: 'Coiled to Strike', att: 'german', arc_id: '61323' },
      { id: 'BFP 75', name: "Schreiber's Success", att: 'german', arc_id: '61324' },
      { id: 'BFP 76', name: 'Trial of the Infantry', att: 'german', arc_id: '61325' },
      { id: 'BFP 77', name: 'Burning Down the House', att: 'german', arc_id: '61326' },
      { id: 'BFP 78', name: 'Operation Wheatfield', att: 'german', arc_id: '61327' },
      { id: 'BFP 79', name: 'A Hard Push', att: 'german', arc_id: '61328' },
      { id: 'BFP 80', name: "Ratushniak's Sacrifice", att: 'german', arc_id: '61329' },
      { id: 'BFP 81', name: 'Iron Coffins', att: 'german', arc_id: '61330' },
      { id: 'BFP 82', name: 'Steamroller', att: 'german', arc_id: '61332' },
      { id: 'BFP 83', name: 'The Second Belt', att: 'german', arc_id: '61333' },
      { id: 'BFP 84', name: 'Kreida Station', att: 'german', arc_id: '61334' },
      { id: 'BFP 85', name: 'Churchills at Kursk', att: 'russian', arc_id: '61335' },
      { id: 'BFP 86', name: 'Panzer Regiment Rothenburg', att: 'german', arc_id: '61336' },
      { id: 'BFP 87', name: 'Fork in the Road', att: 'german', arc_id: '61337' },
      { id: 'BFP 88', name: 'The Bunkered Village', att: 'german', arc_id: '61338' },
      { id: 'BFP 89', name: 'Relentless Pressure', att: 'russian', arc_id: '61339' },
      { id: 'BFP 90', name: 'Early Morning Action', att: 'german', arc_id: '61340' },
      { id: 'BFP 91', name: 'Death Roamed Freely', att: 'german', arc_id: '61341' },
      { id: 'BFP 92', name: 'Trenches in Flames', att: 'german', arc_id: '61342' },
      { id: 'BFP 93', name: 'Klein Stalingrad', att: 'german', arc_id: '61343' },
      { id: 'BFP 94', name: 'To the Last Shell', att: 'german', arc_id: '61344' },
      { id: 'BFP 95', name: 'Obian Highway', att: 'german', arc_id: '61345' },
      { id: 'BFP 96', name: 'Hotly Contested Town', att: 'german', arc_id: '61346' },
      { id: 'BFP 97', name: 'Renewed Pressure', att: 'german', arc_id: '61347' },
      { id: 'BFP 98', name: 'Place of Honor', att: 'german', arc_id: '61348' },
      { id: 'BFP 99', name: 'Ivanovskii', att: 'german', arc_id: '61349' },
      { id: 'BFP 100', name: 'Tiger Vanguard', att: 'german', arc_id: '61350' },
      { id: 'BFP 101', name: 'Panzer Spirit', att: 'russian', arc_id: '61351' },
      { id: 'BFP 102', name: 'Tolstoy Woods', att: 'russian', arc_id: '61352' },
      { id: 'BFP 103', name: 'Knife in the Flank', att: 'russian', arc_id: '61353' },
      { id: 'BFP 104', name: 'Flying Turrets', att: 'russian', arc_id: '61354' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 8,
    name: 'BFP3: Blood and Jungle',
    description: `<p>Blood and Jungle sends players into the Pacific Theater of Operations, fighting through jungles, swamps, kunai and other treacherous terrain. For all of you who have been longing for some great, new PTO ASL action, Blood and Jungle was made for you! And if you've put off playing PTO, now is your chance to dive in headfirst and experience some of the best we've produced to date.</p>
      <p>The size of this product is unprecedented by any other module, magazine, or scenario pack. This product was in development for over 8 years, and the scenarios - yes, all 47 of them - were thoroughly playtested. There is a wide variety of actions from all over the PTO including the wood-covered hills and plains of China, the jungles and villages of Burma, Borneo and the Philippines, the bloody beaches of Tarawa, and many other locations throughout southeast Asia and the Pacific.</p>`,
    shortDescription: `<p>Blood and Jungle targets fighting through jungles, swamps, kunai while playing the 47 scenarios.</p>`,
    includes: `<p><b>Blood and Jungle</b> includes the following:
        <ul>
          <li>47 Action-Packed Scenarios.</li>
          <li>4 full sheets of counters, depicting more units, weapons, vehicles, and planes that are depicted in the scenarios.</li>
          <li>The first ever double-wide 16"x22" geomorphic mapboard. This map represents a large urban area, made up of buildings and huts. (BFP DW&#8209;1) This is actually printed in two 8"x22" sections on heavy card stock.</li>
          <li>One 8"x22" geomorphic mapboard, printed on heavy card stock, depicting a port village on a river. (BFP G)</li>
          <li>Huge magazine with articles on tactics, histories, units, countries, tank hunters, etc.</li>
          <li>Rules pages describing new terrain counters, vehicle listings/notes, and special units.</li>
          <li>A divider card with new unit capabilities and terrain counter notes.</li>
        </ul>
      </p>
      <p>Ownership of the <b>Bounding Fire Production</b><sup>&copy;</sup> board BFP B is also required for scenario BFP-26.</p>`,
    price: 149,
    intPrice: 175,
    button: 'TFKUCQK9NUWLA',
    intButton: 'GBQEEJCLP65RJ',
    imageF: bj,
    imageB: bj_b,
    page: 'bfp3',
    active: true,
    year: 2016,
    who,
    scenarios: [
      {
        id: 'BFP 26',
        name: 'Armored Samurai',
        att: 'japanese',
        boards: 'BFP B (from ITR)',
        arc_id: '60684',
      },
      {
        id: 'BFP 27',
        name: 'Chapei Chockblock',
        att: 'japanese',
        boards: 'BFP DW&#8209;1',
        arc_id: '60685',
      },
      {
        id: 'BFP 28',
        name: 'Marco Polo Bridge',
        att: 'chinese',
        boards: '22, 40',
        arc_id: '60686',
      },
      {
        id: 'BFP 29',
        name: 'Hueishan Docks',
        att: 'chinese',
        boards: 'BFP DW&#8209;1, BFP G',
        arc_id: '60687',
      },
      {
        id: 'BFP 30',
        name: 'Melee Near the Coast',
        att: 'japanese',
        boards: '47, 32',
        arc_id: '60688',
      },
      {
        id: 'BFP 31',
        name: 'Chinese Alamo',
        att: 'japanese',
        boards: 'BFP G, 51',
        arc_id: '60689',
      },
      {
        id: 'BFP 32',
        name: 'Slaughter at Nanyaun',
        att: 'japanese',
        boards: '43, 17',
        arc_id: '60690',
      },
      {
        id: 'BFP 33',
        name: 'Kunlunguan',
        att: 'chinese',
        boards: '15, 18, 25, v',
        arc_id: '60691',
      },
      {
        id: 'BFP 34',
        name: 'Hundred Regiments Offensive',
        att: 'russian',
        boards: '32, 42',
        arc_id: '60692',
      },
      { id: 'BFP 35', name: 'Mai Phu', att: 'japanese', boards: '38, u', arc_id: '60693' },
      {
        id: 'BFP 36',
        name: 'Wannan Incident',
        att: 'chinese',
        boards: '36, 47',
        arc_id: '60694',
      },
      {
        id: 'BFP 37',
        name: 'Debacle at Yeang Dang',
        att: 'french',
        boards: 'BFP DW&#8209;1, 50, 34',
        arc_id: '60695',
      },
      {
        id: 'BFP 38',
        name: 'Sugar Cane Shuffle',
        att: 'japanese',
        boards: '35, 43',
        arc_id: '60696',
      },
      {
        id: 'BFP 39',
        name: 'Langoan Airfield',
        att: 'japanese',
        boards: '33, 35, 38',
        arc_id: '60697',
      },
      {
        id: 'BFP 40',
        name: 'Advance to Kakas',
        att: 'japanese',
        boards: '37, 49',
        arc_id: '60698',
      },
      {
        id: 'BFP 41',
        name: 'Last Cavalry Charge',
        att: 'american',
        boards: '32, 38',
        arc_id: '60699',
      },
      {
        id: 'BFP 42',
        name: 'Bukit Full of Trouble',
        att: 'japanese',
        boards: '42, 43',
        arc_id: '60700',
      },
      { id: 'BFP 43', name: 'Aerodrome P1', att: 'japanese', boards: '35, 38', arc_id: '60701' },
      {
        id: 'BFP 44',
        name: 'Claws of the Sparrow',
        att: 'japanese',
        boards: '37',
        arc_id: '60702',
      },
      {
        id: 'BFP 45',
        name: "BIA's First Battle",
        att: 'axis',
        boards: '32, 34, 37',
        arc_id: '60703',
      },
      {
        id: 'BFP 46',
        name: 'The Shan Capital',
        att: 'axis',
        boards: 'BFP DW&#8209;1a, 47',
        arc_id: '60704',
      },
      {
        id: 'BFP 47',
        name: 'Seizing Viru Harbor',
        att: 'american',
        boards: '32, 37',
        arc_id: '60705',
      },
      { id: 'BFP 48', name: 'Ninth Tanks', att: 'american', boards: '32, 37', arc_id: '60706' },
      {
        id: 'BFP 49',
        name: 'Just a Drive Along the Beach',
        att: 'american',
        boards: 'BRT',
        arc_id: '60707',
      },
      { id: 'BFP 50', name: 'Alligator Tanks', att: 'american', boards: '38', arc_id: '60708' },
      {
        id: 'BFP51',
        name: 'Kwajalein Crush',
        att: 'american',
        boards: '35, 37',
        arc_id: '60709',
      },
      { id: 'BFP 52', name: 'Kachin Rangers', att: 'american', boards: '36', arc_id: '60710' },
      {
        id: 'BFP 53',
        name: 'Grant vs. Stuart',
        att: 'british',
        boards: '35, 37, 42',
        arc_id: '60711',
      },
      { id: 'BFP 54', name: 'Shenam Pass', att: 'japanese', boards: '47, 50', arc_id: '60712' },
      {
        id: 'BFP 55',
        name: 'Used and Abused',
        att: 'japanese',
        boards: '14, 37',
        arc_id: '60713',
      },
      { id: 'BFP 56', name: 'White Beach 1', att: 'american', boards: '40', arc_id: '60714' },
      {
        id: 'BFP 57',
        name: 'Last Drop',
        att: 'japanese',
        boards: '16, 38, 48',
        arc_id: '60715',
      },
      {
        id: 'BFP 58',
        name: 'San Manuel Melee',
        att: 'american',
        boards: '12, 17',
        arc_id: '60716',
      },
      { id: 'BFP 59', name: 'Geki Cacti', att: 'american', boards: '37', arc_id: '60717' },
      {
        id: 'BFP 60',
        name: 'Thrilla in Manila',
        att: 'american',
        boards: 'BFP DW&#8209;1',
        arc_id: '60718',
      },
      { id: 'BFP 61', name: 'Flaming Arseholes', att: 'allied', boards: '36', arc_id: '60719' },
      {
        id: 'BFP 62',
        name: 'Curly and the Brigadier',
        att: 'british',
        boards: '10, 17, 32, 39',
        arc_id: '60720',
      },
      {
        id: 'BFP 63',
        name: 'Typhoon of Steel',
        att: 'american',
        boards: '18, 25',
        arc_id: '60721',
      },
      {
        id: 'BFP 64',
        name: 'Fighting With the Devil',
        att: 'american',
        boards: '2, 7, 36',
        arc_id: '60722',
      },
      {
        id: 'BFP 65',
        name: 'Frogs in the Pocket',
        att: 'british',
        boards: '36, 37',
        arc_id: '60723',
      },
      {
        id: 'BFP 66',
        name: 'Signal Hill',
        att: 'british',
        boards: 'Deluxe b, d',
        arc_id: '60724',
      },
      { id: 'BFP 67', name: 'Coke Hill', att: 'british', boards: '50', arc_id: '60725' },
      {
        id: 'BFP 68',
        name: 'First Day at Fuchin',
        att: 'russian',
        boards: '22, 40, 49',
        arc_id: '60726',
      },
      {
        id: 'BFP 69',
        name: 'Fuchin Fortified',
        att: 'russian',
        boards: 'BFP DW&#8209;1',
        arc_id: '60727',
      },
      {
        id: 'BFP 70',
        name: 'Emperor of Shozu Hill',
        att: 'russian',
        boards: '11, 25',
        arc_id: '60728',
      },
      {
        id: 'BFP 71',
        name: 'Surabaya Slugfest',
        att: 'allied',
        boards: 'BFP DW&#8209;1',
        arc_id: '60729',
      },
      {
        id: 'BFP 72',
        name: 'Police Action',
        att: 'allied',
        boards: 'BFP G, 49',
        arc_id: '60730',
      },
    ],
  },
  {
    id: 10,
    name: 'OtO: Onslaught to Orsha',
    description: `<p>Months of extensive research along with vigorous play testing by the veteran game designers at Bounding Fire Productions brings you the completely revamped Onslaught to Orsha.</p>
    <p>In addition to the fortified line HASL scenarios, there are two other interwoven themes in this expanded and updated version: River/bridgehead-type scenarios, and very mobile/relatively mobile actions. All capturing the varying situations of the epic Operation Bagration action. Thousands of hours of work have been invested to make this a product up to BFP standards. We hope you enjoy it.</p>`,
    shortDescription: `<p>Onslaught to Orsha covers Operation Bagration, covering The Death of Army Group Center in 1944.</p>`,
    includes: `<p><b>Onslaught to Orsha</b> includes the following:
        <ul>
          <li>32 action packed scenarios <span class="red">(10 new!)</span> in full-color print, on both geo and HASL maps, plus a Campaign Game, <b>Ontrack to Orsha</b></li>
          <li>370 full color, die cut &frac12;" counters</li>
          <li>296 full color, die cut &frac58;" counters</li>
          <li>Two 22"x 28" and one 28" x 28" HASL map sheets which combine to represent the historical situation around the Orsha Plain in late June of 1944.</li>
          <li>Rules pages describing the aircraft, vehicles and Guns used, map terrain and Campaign Game rules</li>
          <li>Two <span class="red">new</span> 16"x22" double-wide mapboards (DW-8, DW-9) printed on heavy card stock, depicting East Front terrain</li>
          <li>A <span class="red">new</span> player aid for quick reference of HBRs, procedures and tables during scenario and CG play</li>
        </ul>
      </p>`,
    price: 134,
    intPrice: 164,
    button: 'YJVTAAJ8AXBD8',
    intButton: 'WL2BVST52KCRN',
    imageF: oto,
    imageB: oto_b,
    page: 'oto',
    active: true,
    year: 2019,
    who,
    scenarios: [
      { id: 'OtO 1', name: 'Down in a Hole', from: 'orig', att: 'russian', arc_id: '64145' },
      { id: 'OtO 2', name: "Hornet's Nest", from: 'orig', att: 'russian', arc_id: '64146' },
      { id: 'OtO 3', name: 'Shumilino', from: 'new', att: 'russian', arc_id: '64147' },
      { id: 'OtO 4', name: 'Funnel of Death', from: 'orig', att: 'russian', arc_id: '64148' },
      { id: 'OtO 5', name: 'Bunker Burning', from: 'orig', att: 'russian', arc_id: '64149' },
      { id: 'OtO 6', name: 'Fire from the Hole', from: 'orig', att: 'russian', arc_id: '64150' },
      { id: 'OtO 7', name: 'The Orsha Plain', from: 'orig', att: 'russian', arc_id: '64151' },
      {
        id: 'OtO 8',
        name: 'Another Bloody Morning',
        from: 'orig',
        att: 'russian', arc_id: '64152',
      },
      { id: 'OtO 9', name: 'Sparkplug', from: 'orig', att: 'russian', arc_id: '64153' },
      {
        id: 'OtO 10',
        name: 'Falling Like Dominoes',
        from: 'orig',
        att: 'russian', arc_id: '64154',
      },
      { id: 'OtO 11', name: 'Tooth and Nail', from: 'orig', att: 'russian', arc_id: '64155' },
      { id: 'OtO 12', name: 'Close Quarters', from: 'orig', att: 'russian', arc_id: '64156' },
      {
        id: 'OtO 13',
        name: 'Motoring to Mogilev',
        from: 'orig',
        att: 'russian', arc_id: '64157',
      },
      { id: 'OtO 14', name: 'Hornet Swarm', from: 'new', att: 'russian', arc_id: '64158' },
      { id: 'OtO 15', name: 'Western Dvina Duel', from: 'new', att: 'german', arc_id: '64159' },
      {
        id: 'OtO 16',
        name: 'Tangle at Tolochin',
        from: 'orig',
        att: 'russian', arc_id: '64160',
      },
      { id: 'OtO 17', name: 'Down in Flames', from: 'new', att: 'russian', arc_id: '64161' },
      {
        id: 'OtO 18',
        name: "Hoffmeister's Charge",
        from: 'orig',
        att: 'german', arc_id: '64162',
      },
      { id: 'OtO 19', name: "Where's the Beef", from: 'orig', att: 'russian', arc_id: '64163' },
      { id: 'OtO 20', name: 'Bloody Bobruisk', from: 'orig', att: 'russian', arc_id: '64164' },
      { id: 'OtO 21', name: 'Oriola Force', from: 'orig', att: 'german', arc_id: '64165' },
      { id: 'OtO 22', name: 'Lapitschi Fit', from: 'orig', att: 'german', arc_id: '64166' },
      { id: 'OtO 23', name: 'Inferno at Krupki', from: 'new', att: 'russian', arc_id: '64167' },
      { id: 'OtO 24', name: 'Cooked Hamman', from: 'new', att: 'russian', arc_id: '64168' },
      {
        id: 'OtO 25',
        name: 'Shootout at Slutsk',
        from: 'orig',
        att: 'russian', arc_id: '64169',
      },
      {
        id: 'OtO 26',
        name: 'Bridgehead on the Berezina',
        from: 'orig',
        att: 'russian', arc_id: '64170',
      },
      {
        id: 'OtO 27',
        name: 'Clash at the Berezina',
        from: 'new',
        att: 'german', arc_id: '64171',
      },
      {
        id: 'OtO 28',
        name: 'Desperate Bridgehead',
        from: 'new',
        att: 'russian', arc_id: '64172',
      },
      { id: 'OtO 29', name: "The Cat's Lair", from: 'orig', att: 'russian', arc_id: '64173' },
      { id: 'OtO 30', name: "The Big Cat's Lair", from: 'new', att: 'russian', arc_id: '64174' },
      {
        id: 'OtO 31',
        name: "Schmidt's Roadblock",
        from: 'new',
        att: 'russian', arc_id: '64175'
      },
      {
        id: 'OtO 32',
        name: 'Berated at Baronovichi',
        from: 'orig',
        att: 'russian', arc_id: '64176'
      },
      { id: '', name: '(color indicates attacking side)' },
      { id: '*', name: 'New Scenarios in version 2' },
    ],
  },
  {
    id: 12,
    name: 'ITR2: Into the Rubble 2',
    description: `<p>Into The Rubble offers players the opportunity to do cardboard battle in cities and railroad yards. The scenarios range from 1938 to 1945 with a variety of forces including American, Chinese, German/SS, Hungarian, Japanese, Nationalist Spanish, Republican Spanish, Romanian and Russian.</p>
    <p>Into The Rubble 2 builds on BFP's initial offering, adding 12 new and exciting scenarios in addition to the 8 which came in the original pack, in addition to <b>new boards, overlays and counters</b>. Everything from the original ITR is here, all known errata has been incorporated, and some of the original scenarios have been adjusted for play balance.</p>`,
    shortDescription: `<p>Into The Rubble offers is about the battles in cities and railroad yards. The scenarios range from 1938-1945.</p>`,
    includes: `<p><b>Into the Rubble 2</b> includes the following:
        <ul>
          <li>20 action-packed scenarios in full-color print</li>
          <li>140 Full color, die cut &frac12;" counters</li>
          <li>88 Full color, die cut &frac58;" counters</li>
          <li>Two 8"x22" geomorphic mapboards (BFP A and B) printed on heavy card stock, depicting city and railroad yard terrain. BFP B contains an errata update from the original ITR board<br /><img src="${miniA}" style="margin:.5em;" /><img src="${miniB}" style="margin:.5em;" /></li>
          <li>One 16"x22" geomorphic double-wide mapboard (BFP DW&#8209;7) printed on heavy card stock, depicting dense city terrain<br /><img src="${mini7}" style="margin:.5em;" /></li>
          <li>One 8"x12" rubbled city overlay (BFP RC&#8209;1), 1 large factory overlay, 1 sheet of debris overlays, and 1 sheet of rubble/rubbled building overlays <img src="${miniRC1}" style="margin:.5em;" /><img src="${miniF1}" style="margin:.5em;height:100px;" /></li>
          <li>Rules pages describing new terrain, including Railroad Factories, and new unit types.</li>
        </ul>
      </p>
      <p>Ownership of the following MMP ASL products are required to play all 20 of the included scenarios: Beyond Valor<sup>&copy;</sup>, Yanks<sup>&copy;</sup>, Doomed Battalions<sup>&copy;</sup>, Armies of Oblivion<sup>&copy;</sup>, Red Barricades<sup>&copy;</sup>, For King and Country<sup>&copy;</sup>, Rising Sun<sup>&copy;</sup>.</p>`,
    price: 95,
    intPrice: 119,
    button: 'PA52D4QYAWQT6',
    intButton: '34TKMTC2L54US',
    imageF: itr,
    imageB: itr_b,
    page: 'itr',
    active: true,
    year: 2007,
    who,
    scenarios: [
      { id: 'ITR 1', name: 'Debacle at Sung Kiang', att: 'japanese', arc_id: '60119' },
      { id: 'ITR 2', name: 'Factory in Flix', att: 'allied', arc_id: '60120' },
      { id: 'ITR 3', name: 'Tough as Nails', att: 'german', arc_id: '60121' },
      { id: 'ITR 4', name: 'Clash at Ponyri', att: 'german', arc_id: '60122' },
      { id: 'ITR 5', name: 'Fire Teams', att: 'american', arc_id: '60123' },
      { id: 'ITR 6', name: 'The Ceramic Factory', att: 'russian', arc_id: '60124' },
      { id: 'ITR 7', name: 'Rebounded Spirit', att: 'axis', arc_id: '60125' },
      { id: 'ITR 8', name: 'Beyond the Slaughterhouse', att: 'russian', arc_id: '60126' },
      { id: 'ITR 9', name: "Asia's Stalingrad", att: 'japanese', arc_id: '62926' },
      { id: 'ITR 10', name: 'Samurai Stalingrad', att: 'japanese', arc_id: '62927' },
      { id: 'ITR 11', name: 'Cremation Station', att: 'chinese', arc_id: '62928' },
      { id: 'ITR 12', name: 'Sosabowski Slapdown', att: 'german', arc_id: '62929' },
      { id: 'ITR 13', name: 'To the Last Bullet', att: 'german', arc_id: '62930' },
      {
        id: 'ITR 14',
        name: 'Between Rockets and a Hard Place',
        att: 'german',
        arc_id: '62931',
      },
      { id: 'ITR 15', name: 'Tractor Factory 137', att: 'german', arc_id: '62932' },
      { id: 'ITR 16', name: 'The Fighting Tankbusters', att: 'german', arc_id: '62933' },
      { id: 'ITR 17', name: "The Devil's Factory", att: 'american', arc_id: '62934' },
      { id: 'ITR 18', name: 'Capital of the Ruins', att: 'american', arc_id: '62935' },
      { id: 'ITR 19', name: 'The Narrow Front', att: 'american', arc_id: '62936' },
      { id: 'ITR 20', name: "Fill 'Er Up, Mac?", att: 'american', arc_id: '62937' },
    ],
  },
  {
    id: 16,
    name: 'OS: Objective: Schmidt',
    description: `<p>Objective Schmidt depicts the hard fought battles that occurred in early November, 1944 in the Hurtgen Forest by the U.S. 28th Infantry Division for the small towns of Schmidt/Kommerscheidt and Vossenack.</p>`,
    shortDescription: `<p>Objective Schmidt depicts the hard fought battles in the Hurtgen Forest by the U.S. 28th Infantry Division.</p>`,
    includes: `<p><b>Objective: Schmidt</b> includes the following:
        <ul>
          <li>17 action packed scenarios in full-color print, including a campaign game (CG) covering the battle for Kommerscheidt over 7 CG dates</li>
          <li>560 full color, die cut &frac12;" counters (not 576 as printed on the back cover)</li>
          <li>88  full color, die cut &frac58;" counters</li>
          <li>Two 22"x 34" HASL map sheets which combine to represent the historical situation of the town of Vossenack</li>
          <li>Four 22"x 34" HASL map sheets with 1" hexgrids which combine to represent the historical situation of the towns of Schmidt and Kommerscheidt</li>
          <li>An article covering "Slopes in ASL"</li>
          <li>Rules pages describing Vehicles/Ordnance notes, Historical Battle Rules (HBR), map terrain and campaign game rules</li>
          <li>A divider card for quick reference of HBRs during scenario and CG play</li>
        </ul>
      </p>
      <p>Ownership of the following Hasbro/MMP ASL products are required to play all of the included scenarios: Beyond Valor<sup>&copy;</sup>, Yanks<sup>&copy;</sup></p>`,
    price: 120,
    intPrice: 152,
    button: 'WF2ZRJ4XUDMEL',
    intButton: 'EMJZZ2PKNGRDA',
    imageF: os,
    imageB: os_b,
    page: 'os',
    active: true,
    year: 2016,
    who,
    scenarios: [
      { id: 'OS 1', name: 'Conscript Counter', att: 'american', arc_id: '63140' },
      { id: 'OS 2', name: "The Wolf's Howl", att: 'german', arc_id: '63141' },
      { id: 'OS 3', name: "Schindler's Limp", att: 'german', arc_id: '63142' },
      { id: 'OS 4', name: 'Bad Onnen', att: 'german', arc_id: '63144' },
      { id: 'OS 5', name: 'Disaster at Schmidt', att: 'german', arc_id: '63145' },
      { id: 'OS 6', name: 'General Fleig', att: 'german', arc_id: '63146' },
      { id: 'OS 7', name: "Devil's Sunday", att: 'german', arc_id: '63147' },
      { id: 'OS 8', name: 'Toehold', att: 'german', arc_id: '63148' },
      { id: 'OS 9', name: 'Walk the Walk', att: 'german', arc_id: '63149' },
      { id: 'OS 10', name: 'Greyhounds!', att: 'german', arc_id: '63150' },
      { id: 'OS 11', name: 'Kickoff In Huertgen', att: 'american', arc_id: '63151' },
      { id: 'OS 12', name: 'Roll On!', att: 'american', arc_id: '63152' },
      { id: 'OS 13', name: 'The Route', att: 'german', arc_id: '63153' },
      { id: 'OS 14', name: "Drive 'Em Out", att: 'american', arc_id: '63154' },
      { id: 'OS 15', name: 'Nightlife Is For The Junge', att: 'german', arc_id: '63155' },
      { id: 'OS 16', name: 'Sappers as Infantry', att: 'american', arc_id: '63156' },
      { id: 'OS 17', name: 'The Worst Place Of Any', att: 'american', arc_id: '63157' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 23,
    name: 'BD: Bitterest Day',
    description: `<p>Bitterest Day sends players into the Okinawa, fighting through the mountainous terrain.</p>`,
    shortDescription: `<p>Bitterest Day sends players into the Okinawa, fighting through the mountainous terrain.</p>`,
    includes: `<p><b>Bitterest Day</b> includes the following:
        <ul>
          <li>9 Action-Packed Scenarios.</li>
          <li>1 full sheet of counters, depicting more units, weapons, vehicles, and planes that are depicted in the scenarios.</li>
          <li>One HASL map sheet which represents the historical situation in Okinawa.</li>
        </ul>
      </p>
      <p>Ownership of the following <b>Advanced Squad Leader</b><sup>&copy;</sup> components are required to play all 9 of the included scenarios: Nationalities - Americans & Japanese.</p>`,
    price: 89,
    intPrice: 109,
    button: '85WHUCGKJS3R2',
    intButton: 'MGCF7D5D8G64A',
    imageF: bd,
    imageB: bd_b,
    page: 'bd',
    active: true,
    year: 2023,
    who,
    scenarios: [
      { id: 'BD 1', name: 'Opening Probe', att: 'american', arc_id: '66839' },
      { id: 'BD 2', name: 'Limited Gains', att: 'american', arc_id: '66840' },
      { id: 'BD 3', name: 'Western Anchor', att: 'american', arc_id: '66841' },
      { id: 'BD 4', name: 'Thicker Than Flies', att: 'american', arc_id: '66842' },
      { id: 'BD 5', name: 'Ultimate Insult', att: 'japanese', arc_id: '66843' },
      { id: 'BD 6', name: 'Bitterest Day', att: 'american', arc_id: '66844' },
      { id: 'BD 7', name: 'Crescent Carnage', att: 'american', arc_id: '66846' },
      { id: 'BD 8', name: '"We\'re Dead Anyway"', att: 'american', arc_id: '66845' },
      { id: 'BD 9', name: 'Good Luck Charm', att: 'japanese', arc_id: '66847' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 24,
    name: 'BFP2: Operation Cobra',
    description: `<p>BFP 2: Operation Cobra offers players the opportunity to do cardboard battle in bocage country, following some of the action from Operation Cobra.</p>
    <p>Operation Cobra was the codename for an offensive launched by the First United States Army, seven weeks after the D-Day landings, during the Normandy Campaign of World War II. The objective was to punch through the German defenses and advance into Brittany, rolling up the German flanks and freeing itself of the constraints imposed by operating in the Norman bocage countryside. Operation Cobra, together with concurrent offensives by the Second British and First Canadian Armies, was decisive in securing an Allied victory in the Normandy Campaign.</p>
    <p>(2022 Reprint)</p>`,
    shortDescription: `<p>Operation Cobra provides for battles in bocage country, following actions of Operation Cobra.</p>`,
    includes: `
    <p><b>Operation Cobra</b> includes the following:
      <ul>
        <li>12 Action-Packed Scenarios</li>
        <li>88 counters with Vehicle and Ordnance Notes</li>
        <li>Huge magazine with the history of Operation Cobra and an article about fighting in bocage in ASL terms</li>
        <li>1 Bocage Overlay</li>
        <li>Rules pages describing new terrain</li>
      </ul>
    </p>
    <p>Ownership of BFP's Beyond the Beachhead 2 and the following MMP ASL products are required to play all 12 of the included scenarios: Beyond Valor<sup>©</sup>, Yanks<sup>©</sup>, West of Alamein<sup>©</sup> or For King and Country<sup>©</sup>, Pegasus Bridge<sup>©</sup>, Kampfgruppe Peiper II<sup>©</sup>, The Last Hurrah<sup>©</sup>, Doomed Batallions<sup>©</sup>, A Bridge Too Far<sup>©</sup>, and boards 6, 24, 42, and 46.</p>`,
    price: 70,
    intPrice: 95,
    button: '9EJ9WMWN2VDHL',
    intButton: 'JVTGVNB4JMFQN',
    imageF: oc,
    imageB: oc_b,
    page: 'oc',
    active: true,
    year: 2008,
    who,
    scenarios: [
      { id: 'BFP 14', name: 'Opening Phase', att: 'american', arc_id: '60503' },
      { id: 'BFP 15', name: "Cobra's Venom", att: 'american', arc_id: '60504' },
      { id: 'BFP 16', name: 'Snake Charmed', att: 'american', arc_id: '60505' },
      { id: 'BFP 17', name: 'Seize That Crossroad', att: 'american', arc_id: '60506' },
      { id: 'BFP 18', name: 'Necklace of Pearls', att: 'american', arc_id: '60507' },
      { id: 'BFP 19', name: 'Russian Style', att: 'american', arc_id: '60508' },
      { id: 'BFP 20', name: 'Bypassed Lehr', att: 'american', arc_id: '60509' },
      { id: 'BFP 21', name: 'Ripe for the Picking', att: 'american', arc_id: '60510' },
      { id: 'BFP 22', name: 'Speed Over Caution', att: 'american', arc_id: '60511' },
      { id: 'BFP 23', name: 'Prelim to Death Night', att: 'german', arc_id: '60512' },
      { id: 'BFP 24', name: 'Death Ride of Das Reich', att: 'german', arc_id: '60513' },
      { id: 'BFP 25', name: 'From Villebaudon to Valhalla', att: 'german', arc_id: '60514' },
    ],
  },
  {
    id: 29,
    name: 'BtB2: Beyond the Beachhead 2',
    description: `<p>Beyond the Beachhead 2 offers players the opportunity to do cardboard battle in the bocage country.</p><p>(2022 Reprint)</p>`,
    shortDescription: `<p>Beyond the Beachhead 2 offers the opportunity to battle in bocage country, Beyond the Beachheads.</p>`,
    includes: `<p>Beyond the Beachhead 2 offers players the opportunity to do cardboard battle in the bocage country.</p>
      <p><b>Beyond the Beachhead</b> includes the following:
        <ul>
          <li>16 Action-Packed Scenarios.</li>
          <li>Four 8"x22" Geomorphic mapboards, printed on heavy card stock, depicting bocage and village terrain (BFP C, D, E, F)</li>
          <li>5 overlays</li>
          <li>Rules pages describing new terrain</li>
        </ul>
      </p>
      <p>Ownership of the following <b>Advanced Squad Leader</b><sup>©</sup> components are required to play all of the included scenarios: Nationalities - Americans, Germans, Japanese, British, French, Russians, Italians, Allied Minors, and Axis Minors; Boards - 8, 11, 15, 16, 17, 18, 19, 22, 32, 33, 36, 37, 38, 44.</p>
      <p>Ownership of the <b>Bounding Fire Production</b><sup>©</sup> Product <i>BFP3: Blood and Jungle</i> is also required for some of the counters and nationality rules used in some scenarios.</p>`,
    price: 75,
    intPrice: 100,
    button: 'QPJXW3ZALEMQQ',
    intButton: 'YDFMX5UAKGBQS',
    imageF: btb,
    imageB: btb_b,
    page: 'btb',
    active: true,
    year: 2007,
    who,
    scenarios: [
      { id: 'BtB 1', name: 'Taking Tailleville', att: 'british', arc_id: '60487' },
      { id: 'BtB 2', name: 'Merely Hanging On', att: 'german', arc_id: '60488' },
      { id: 'BtB 3', name: 'Kraut Corner', att: 'american', arc_id: '60489' },
      { id: 'BtB 4', name: 'Firestorm in St. Manvieu', att: 'british', arc_id: '60490' },
      { id: 'BtB 5', name: 'Martinville Ridge', att: 'german', arc_id: '60491' },
      { id: 'BtB 6', name: 'Men Against Tanks', att: 'american', arc_id: '60492' },
      { id: 'BtB 7', name: 'Blood on Hill 192', att: 'american', arc_id: '60493' },
      { id: 'BtB 8', name: 'Steel Inferno', att: 'british', arc_id: '60494' },
      { id: 'BtB 9', name: 'Norman "D"', att: 'american', arc_id: '60495' },
      { id: 'BtB 10', name: 'Unplanned Attack', att: 'american', arc_id: '60496' },
      { id: 'BtB 11', name: 'Bosq Barbeque', att: 'british', arc_id: '60497' },
      { id: 'BtB 12', name: 'Going against the Grain', att: 'german', arc_id: '60498' },
      { id: 'BtB 13', name: 'By Chance', att: 'american', arc_id: '60499' },
      { id: 'BtB 14', name: 'Swatting a Hornet', att: 'american', arc_id: '60500' },
      { id: 'BtB 15', name: "Becker's Battery", att: 'british', arc_id: '60501' },
      { id: 'BtB 16', name: 'Battlegroup Nor-mons', att: 'german', arc_id: '60502' },
    ],
  },
  {
    id: 210,
    name: 'CtR: Corregidor: the Rock',
    description: `<p>Corregidor: the Rock takes a detailed look at the hard-fought battles for the island of Corregidor, located at the entrance to Manila Bay in the Philippines, during both the Japanese invasion in 1942 and the subsequent U.S. retaking of the island in 1945</p>`,
    shortDescription: `<p>Corregidor: the Rock takes a detailed look at the hard-fought battles for the island of Corregidor in the Philippines.</p>`,
    includes: `<p><b>Corregidor: the Rock</b> includes the following:
        <ul>
          <li>21 Scenarios covering actions from 1942 (3 scenarios) and 1945 (18 scenarios)</li>
          <li>2 Campaign Games</li>
          <li>180 full color, die cut &frac12;" counters (Infantry, SW, Control, and info)</li>
          <li>64 full color, die cut &frac58;" counters (2 AFVs, 3 Aircraft, and info)</li>
          <li>HASL map printed on two 22"x28" sheets that cover a portion of the 'head' of the island based on the state of the island in 1945, and is used for the CGs and 33% of the scenarios (the rest being on geo boards from other parts of the island)</li>
          <li>Player aids for the Campaign Games, NOBA, and Para Drops</li>
          <li>Rules pages describing Vehicles/Ordnance notes, Historical Battle Rules (HBR), map terrain and campaign game rules</li>
        </ul>
      </p>`,
    price: 97,
    intPrice: 132,
    button: 'DD8PCACVDWUGC',
    intButton: '7L2QZLS3M8VQQ',
    imageF: ctr,
    imageB: ctr_b,
    page: 'ctr',
    active: true,
    year: 2020,
    who,
    scenarios: [
      {
        id: 'CtR 1',
        name: 'Assault At Monkey Point<br/>(May 1942)',
        att: 'japanese',
        arc_id: '63687',
      },
      {
        id: 'CtR 2',
        name: 'The Japanese Are In Denver!<br/>(May 1942)',
        att: 'american',
        arc_id: '63688',
      },
      {
        id: 'CtR 3',
        name: 'With Profound Regret<br/>(May 1942)',
        att: 'japanese',
        arc_id: '63689',
      },
      { id: 'CtR 4', name: 'Return To The Rock', att: 'american', arc_id: '63690' },
      { id: 'CtR 5', name: 'Loss Of Command', att: 'american', arc_id: '63691' },
      { id: 'CtR 6', name: 'Black And Blue Swarms', att: 'american', arc_id: '63693' },
      { id: 'CtR 7', name: 'Desperate Hours', att: 'japanese', arc_id: '63694' },
      { id: 'CtR 8', name: 'A Deadly Tide', att: 'japanese', arc_id: '63695' },
      { id: 'CtR 9', name: 'Black Beach Slaughter', att: 'american', arc_id: '63696' },
      { id: 'CtR 10', name: 'Par For The Course', att: 'japanese', arc_id: '63697' },
      { id: 'CtR 11', name: 'Fire In The Hole', att: 'american', arc_id: '63698' },
      { id: 'CtR 12', name: 'Bloodied At Wheeler', att: 'american', arc_id: '63690' },
      { id: 'CtR 13', name: 'The Infernal Machine', att: 'american', arc_id: '63700' },
      {
        id: 'CtR 14',
        name: 'Dangerous Descent Into Maggot Valley',
        att: 'american',
        arc_id: '63701',
      },
      { id: 'CtR 15', name: 'Night Of The Living Dead', att: 'japanese', arc_id: '63702' },
      { id: 'CtR 16', name: 'Too Close For Comfort', att: 'japanese', arc_id: '63703' },
      { id: 'CtR 17', name: 'Clearing The Badlands', att: 'american', arc_id: '63704' },
      { id: 'CtR 18', name: 'Disaster Near Infantry Point', att: 'japanese', arc_id: '63707' },
      { id: 'CtR 19', name: 'Pug-Nacious', att: 'american', arc_id: '63706' },
      { id: 'CtR 20', name: 'Prequel To Armageddon', att: 'american', arc_id: '63708' },
      { id: 'CtR 21', name: 'The Gates Of Hell', att: 'american', arc_id: '63709' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 211,
    name: 'HG2: High Ground 2',
    description: `<p>High Ground 2 is a Battlepack that includes the best of the original <b><i>High Ground™</i></b> release from Heat of Battle. From the original pack, the 2 unique map boards that make up the hill are included, and 7 of the original 8 scenarios have been updated. BFP has expanded on the original product with 9 more scenarios, two more challenging map boards depicting mountains with village terrain, and a specialized half-board castle overlay.</p><p>(2022 Reprint)</p>`,
    shortDescription: `<p>High Ground 2 includes 2 unique hill map boards, 9 new scenarios, and 7 of the original 8 scenarios from HG1.</p>`,
    includes: `<p><b>High Ground 2</b> includes the following:
        <ul>
          <li>16 Action-Packed, heavily play-tested scenarios, in full-color print</li>
          <li>Four 8"x22" geomorphic mapboards (BFP H, I, J, and K) printed on heavy card stock, depicting mountains with village terrain.<br/>
            title="BFP H"><img src="${miniH}" style="margin:.5em;"/>
            title="BFP I"><img src="${miniI}" style="margin:.5em;"/>
            title="BFP J"><img src="${miniJ}" style="margin:.5em;"/>
            title="BFP K"><img src="${miniK}" style="margin:.5em;"/>
          </li>
          <li>One new specialized half-board castle overlay (BFP C-1)<br/>
            <img src="${miniRC1}" style="margin:.5em;"/>
          </li>
          <li>Updated Rules page for <i>Into the Rubble</i>.</li>
        </ul>
      </p>
      <p>Ownership of the following <b>Advanced Squad Leader</b><sup>&copy;</sup> components are required to play all of the included scenarios: Nationalities - Americans, Germans, Japanese, British, French, Russians, Italians, Allied Minors, and Axis Minors; Boards - 8, 11, 15, 16, 17, 18, 19, 22, 32, 33, 36, 37, 38, 44.</p>
      <p>Ownership of the <b>Bounding Fire Production</b><sup>&copy;</sup> Product <i>BFP3: Blood and Jungle</i> is also required for some of the counters and nationality rules used in some scenarios.</p>`,
    price: 80,
    intPrice: 105,
    button: '9K35V8VZVSPJW',
    intButton: 'YNQG9QRML77YA',
    imageF: hg,
    imageB: hg_b,
    page: 'hg',
    active: true,
    year: 2009,
    who,
    scenarios: [
      { id: 'HG 1', name: 'Corniche Game', att: 'italian', arc_id: '60994' },
      { id: 'HG 2', name: 'Konitsa Crackdown', att: 'allied', arc_id: '60995' },
      { id: 'HG 3', name: 'Cohort and the Phalanx', att: 'allied', arc_id: '60996' },
      { id: 'HG 4', name: 'Mount Istibei', att: 'german', arc_id: '60997' },
      { id: 'HG 5', name: 'Tanks Take Rook', att: 'german', arc_id: '60998' },
      { id: 'HG 6', name: 'Damned at Demyansk', att: 'russian', arc_id: '60999' },
      { id: 'HG 7', name: 'Bonny Nouvelle', att: 'british', arc_id: '61000' },
      { id: 'HG 8', name: 'Peruns Thunder', att: 'german', arc_id: '61001' },
      { id: 'HG 9', name: 'The Gifu', att: 'american', arc_id: '61002' },
      { id: 'HG 10', name: 'Stampede at Hill 253', att: 'german', arc_id: '61003' },
      { id: 'HG 11', name: 'Skill in Khiliki', att: 'russian', arc_id: '61004' },
      { id: 'HG 12', name: 'Bumps Along Tiddam Rd.', att: 'british', arc_id: '61005' },
      { id: 'HG 13', name: 'Tigers on the Hill', att: 'german', arc_id: '61006' },
      { id: 'HG 14', name: 'An Unfriendly Welcome', att: 'american', arc_id: '61007' },
      { id: 'HG 15', name: 'King Darges', att: 'russian', arc_id: '61008' },
      { id: 'HG 16', name: 'Blood Brothers', att: 'british', arc_id: '61009' },
    ],
  },
  {
    id: 213,
    name: 'ON: Operation Neptune',
    description: `<p></p>`,
    shortDescription: `<p>Operation Neptune gives insight into the British assault of the River Seine at Vernon, France.</p>`,
    includes: `<p><b>Operation Neptune</b> includes the following:
      <ul>
        <li>10 action packed scenarios in full-color print covering actions, plus a Campaign Game</li>
        <li>One 25"x 25" HASL map sheet representing the historical situation around Vernon, France in late August, 1944</li>
        <li>90 full color, die cut ½" counters</li>
        <li>32 full color, die cut ⅝" counters</li>
        <li>Rules pages describing map terrain and campaign game rules</li>
        <li>A divider card for quick reference of HBRs during scenario and CG play</li>
      </ul>
      </p>
    <p>This is not a complete game. Ownership of the following products are required to play all of the included scenarios:
      <ul>
        <li><b>BFP</b>: Either of the following: Poland in Flames or Onslaught to Orsha 2 (2 counters needed)</li>
        <li><b>MMP/Hasbro/AH</b>: Beyond Valor<sup>©</sup>, For King and Country<sup>©</sup> (or West of Alamein<sup>©</sup>)</li>
      </ul>
    </p>
    <p>3 of the scenarios need boards from other <b>MMP</b> products.
      <ul>
        <li>ON-1 thru ON-7 use the HASL map</li>
        <li>ON-8 uses boards 81 and 83 from Forgotten War<sup>©</sup></li>
        <li>ON-9 uses boards 1b and 4b from Action Pack 6<sup>©</sup> &amp; Action Pack 8<sup>©</sup></li>
        <li>ON-10 uses board 7a from Action Pack 9<sup>©</sup></li>
      </ul>
    </p>`,
    price: 70,
    intPrice: 95,
    button: 'GFZBE2UVGXYNJ',
    intButton: 'HTXFMZS4475PG',
    imageF: on,
    imageB: on_b,
    page: 'on',
    active: true,
    year: 2022,
    who,
    scenarios: [
      { id: 'ON 1', name: 'Freedom!', att: 'british', arc_id: '65629' },
      { id: 'ON 2', name: 'Wet Feet', att: 'british', arc_id: '65630' },
      { id: 'ON 3', name: 'Stuck Ducks', att: 'british', arc_id: '65631' },
      { id: 'ON 4', name: 'Valiant Sacrifice', att: 'german', arc_id: '65632' },
      { id: 'ON 5', name: 'Sweeping East', att: 'british', arc_id: '65633' },
      { id: 'ON 6', name: 'Sweeping West', att: 'british', arc_id: '65634' },
      { id: 'ON 7', name: 'Sweeping North', att: 'british', arc_id: '65638' },
      { id: 'ON 8', name: 'A Blow Too Late', att: 'british', arc_id: '65635' },
      { id: 'ON 9', name: 'An Unexpected Complication', att: 'german', arc_id: '65636' },
      { id: 'ON 10', name: 'Chateau of Death', att: 'german', arc_id: '65637' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
  {
    id: 213,
    name: 'Hell on Wheels',
    description: `<p>The Hell on Wheels Battle Pack (HoW) concentrates on the U.S. 2nd Armored Division in its battles in Sicily, Normandy, the Siegfried Line, the Battle of the Bulge, and the Rhine campaign.</p>
    <p>The 13 HoW scenarios featured a range of actions, tending heavily towards large scenarios (there are 2 small scenarios, 3 medium-sized scenarios, and 8 large scenarios). Three of the scenarios are DASL scenarios, all of which feature the included DASL board (HoW5 - The Narrow Front; HoW6 - From Bad to Wuerselen; HoW9 - A Perfect Match).</p>`,
    shortDescription: `<p>The Hell on Wheels Battle Pack concentrates on the U.S. 2nd Armored Division in its battles.</p>`,
    includes: `<p><b>Hell on Wheels</b> includes the following:
        <ul>
          <li>12-page mini-magazine including 13 scenarios, 1 SASL Mission, 1 "guest" GSTK scenario.</li>
          <li>2 sheets of DASL rubble overlays.</li>
          <li>10 &frac34;" x 26" Deluxe mapboard (BFP 1) printed on heavy card stock, depicting open village terrain.<br/>
            <img src="${miniBF1}" style="margin:.5em;" />
          </li>
        </ul>
      </p>
      <p>Ownership of the following <b>Advanced Squad Leader</b><sup>&copy;</sup> components are required to play all of the included scenarios: Nationalities - Americans, Germans, British, and Italians; Boards - 1, 2, 4, 6, 7, 9, 10, 11, 15, 16, 19, 20, 21, 24, 33, 39, 42, 43, a, b, c, d, e. (GSTK map for extra scenario)</p>`,
    price: 0,
    intPrice: 0,
    imageF: how,
    page: 'how',
    active: false,
    year: 1998,
    who,
    scenarios: [
      { id: 'HoW 1', name: 'Guns of Naro', att: 'american' },
      { id: 'HoW 2', name: 'Canicatti', att: 'american', arc_id: '56450' },
      { id: 'HoW 3', name: 'Redlegs as Infantry', att: 'american', arc_id: '56794' },
      { id: 'HoW 4', name: 'Inch by Inch', att: 'german', arc_id: '56795' },
      { id: 'HoW 5', name: 'Narrow Front', att: 'american', arc_id: '56795' },
      { id: 'HoW 6', name: 'From Bad to Wuerselen', att: 'german', arc_id: '56797' },
      { id: 'HoW 7', name: 'Trench Warfare', att: 'american', arc_id: '56798' },
      { id: 'HoW 8', name: 'Merzenhausen Zoo', att: 'german', arc_id: '56417' },
      { id: 'HoW 9', name: 'A Perfect Match', att: 'german', arc_id: '56800' },
      { id: 'HoW 10', name: 'In the Bag', att: 'german', arc_id: '56460' },
      { id: 'HoW 11', name: 'InHumaine', att: 'german', arc_id: '63144' },
      { id: 'HoW 12', name: "Lee's Charge", att: 'american' },
      { id: 'HoW 13', name: "Hitler's Bridge", att: 'american' },
      { id: 'GSTK8', name: 'Premature Evaluation', att: 'german', arc_id: '56805' },
      { id: '', name: '(color indicates attacking side)' },
    ],
  },
];

export const sales: Sale[] = [];

export const bf2025sales: Sale[] = [
  {
    name: 'OtO',
    description: 'Onslaught to Orsha has 32 action-packed scenarios plus a Campaign Game, over 650 counters, geomorphic boards, and two large HASL map sheets depicting the Orsha Plain in 1944.',
    id: 1,
    // imageF: mc,
    price: 95,
    button: '8H7NL9GA52RH8',
    links: [
      products.find(p => p.id === 10)!,
    ],
  },
  {
    name: 'OC & BtB2',
    description: 'Operation Cobra and Beyond the Beachhead offer the BFP effort to bring you fighting in bocage in ASL terms. Each pack has many action-packed scenarios, geomorphic boards, and terrain rules.',
    id: 2,
    // imageF: mc,
    price: 105,
    button: 'MCRDRTGVT7XXG',
    links: [
      products.find(p => p.id === 24)!,
      products.find(p => p.id === 29)!,
    ],
  },
  {
    name: 'ITR2 & HG2',
    description: 'These packs offer some unique terrain and scenarios. Into the Rubble 2 has urban rubble terrain and High Ground 2 has mountain village terrain. There are 36 action-packed scenarios, counters, geomorphic boards, and terrain rules.',
    id: 3,
    // imageF: mc,
    price: 115,
    button: 'NTJPAESUMWBGJ',
    links: [
      products.find(p => p.id === 12)!,
      products.find(p => p.id === 211)!,
    ],
  },
  {
    name: 'ON & BD',
    description: 'Operation Neptune gives insight into the British assault of the River Seine at Vernon, France, while Bitterest Day sends players into the Okinawa, fighting through the mountainous terrain. Each pack is also loaded with action-packed scenarios, counters, a HASL map sheet, and CG rules.',
    id: 4,
    // imageF: mc,
    price: 100,
    button: 'UACLFU8CEF86A',
    links: [
      products.find(p => p.id === 213)!,
      products.find(p => p.id === 23)!,
    ],
  },
];
