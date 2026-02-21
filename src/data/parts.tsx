import type { Part } from '../components/types';
import { bdA, bdB, bdC, bdD, bdE, bdF, bdG, bdH, bdI, bdJ, bdK, bdL, bdM, bdN, bdO, bdP, bdS, bdT, bdU,
  bdQ, bdR, bitterest, corregidor, dw1, dw2, dw3, dw4, dw5, dw6, dw7, dw8, dw9, dw10, hw1, neptune, 
  orsha, schmidt1, schmidt2, schmidt3, schmidt4, voss1, voss2 } from './images';

export const parts: Part[] = [
  {
    name: 'Crucible of Steel',
    group: 'cos',
    type: 'boards',
    files: [
      {
        name: 'BFP DW-2',
        image: dw2,
        price: 7,
        paypalKey: '6CMETG926PFUA',
      },
      {
        name: 'BFP DW-3',
        image: dw3,
        price: 7,
        paypalKey: '6XAHU5MRU645N',
      },
      {
        name: 'BFP DW-4',
        image: dw4,
        price: 7,
        paypalKey: 'CEHJ22U4YNQFS',
      },
      {
        name: 'BFP L',
        image: bdL,
        price: 5,
        paypalKey: 'PHZ6EWX5HHLWJ',
      },
      {
        name: 'BFP M',
        image: bdM,
        price: 5,
        paypalKey: 'TSWAK8QWVCM2N',
      },
      {
        name: 'BFP N',
        image: bdN,
        price: 5,
        paypalKey: '53EE6ZNM6YTCA',
      },
    ],
  },
  {
    name: 'Poland in Flames',
    group: 'pif',
    type: 'boards',
    files: [
      {
        name: 'BFP DW-5',
        image: dw5,
        price: 7,
        paypalKey: 'QA9ZUFT9JGWC4',
      },
      {
        name: 'BFP DW-6',
        image: dw6,
        price: 7,
        paypalKey: '7B9YCKJPCE8P8',
      },
      {
        name: 'BFP O',
        image: bdO,
        price: 5,
        paypalKey: 'YMRVTWRFVUKV8',
      },
      {
        name: 'BFP P',
        image: bdP,
        price: 5,
        paypalKey: 'X4S6BWATYC484',
      },
      {
        name: 'BFP Q',
        image: bdQ,
        price: 5,
        paypalKey: '2ZQ29CKW6D6GG',
      },
      {
        name: 'BFP R',
        image: bdR,
        price: 5,
        paypalKey: 'BRHHUL34RMXXL',
      },
    ],
  },
  {
    name: 'Into the Rubble',
    group: 'itr2',
    type: 'boards',
    files: [
      {
        name: 'BFP DW-7',
        image: dw7,
        price: 7,
        paypalKey: '8MUC27LY584Z2',
      },
      {
        name: 'BFP A',
        image: bdA,
        price: 5,
        paypalKey: 'KLDQP67LVNT8E',
      },
      {
        name: 'BFP B',
        image: bdB,
        price: 5,
        paypalKey: 'DNX2L9ZB4QYUG',
      },
    ],
  },
  {
    name: 'Blood & Jungle',
    group: 'bj',
    type: 'boards',
    files: [
      {
        name: 'BFP DW-1',
        image: dw1,
        price: 7,
        paypalKey: 'RRBBVUCK3HUYE',
        active: false,
      },
      {
        name: 'BFP G',
        image: bdG,
        price: 5,
        paypalKey: 'GQXS86LWEZL9A',
        active: false,
      },
    ],
  },
  {
    name: 'High Ground 2',
    group: 'hg2',
    type: 'boards',
    files: [
      {
        name: 'BFP H',
        image: bdH,
        price: 5,
        paypalKey: '4BAYRKRCU7JJ8',
      },
      {
        name: 'BFP I',
        image: bdI,
        price: 5,
        paypalKey: '2R96522ZHELF2',
      },
      {
        name: 'BFP J',
        image: bdJ,
        price: 5,
        paypalKey: 'DPCPUA6JN47RE',
      },
      {
        name: 'BFP K',
        image: bdK,
        price: 5,
        paypalKey: 'Y3552QMHE48H2',
      },
    ],
  },
  {
    name: 'Beyond the Beachhead 2',
    group: 'btb2',
    type: 'boards',
    files: [
      {
        name: 'BFP C',
        image: bdC,
        price: 5,
        paypalKey: 'YXBE63RBEEK7A',
      },
      {
        name: 'BFP D',
        image: bdD,
        price: 5,
        paypalKey: '9WYPNZ7TD759U',
      },
      {
        name: 'BFP E',
        image: bdE,
        price: 5,
        paypalKey: '9PVL95KM5ZACA',
      },
      {
        name: 'BFP F',
        image: bdF,
        price: 5,
        paypalKey: '8Z4B2WAMWCFJC',
      },
    ],
  },
  {
    name: 'Onslaught to Orsha',
    group: 'oto',
    type: 'boards',
    files: [
      {
        name: 'BFP DW-8',
        image: dw8,
        price: 7,
        paypalKey: 'KNYD57SYRU7QY',
        active: false,
      },
      {
        name: 'BFP DW-9',
        image: dw9,
        price: 7,
        paypalKey: 'VD6GUJSBF386W',
      },
    ],
  },
  {
    name: 'Mannerheim Cross',
    prices: [
      { type: 'US', price: 50 },
      { type: 'Canada', price: 65 },
      { type: 'International', price: 80 },
    ],
    paypalKey: 'E67W6PXFLVCAW',
    type: 'counters',
  },
  {
    name: 'Mannerheim Cross',
    group: 'mc',
    type: 'boards',
    files: [
      {
        name: 'BFP DW-10',
        image: dw10,
        price: 7,
        paypalKey: 'DEN3Q2YX6DTDQ',
      },
      {
        name: 'BFP HW-1',
        image: hw1,
        price: 7,
        paypalKey: 'PR6CHXGXMP38G',
      },
      {
        name: 'BFP S',
        image: bdS,
        price: 5,
        paypalKey: 'EGXHXMTU59GRS',
      },
      {
        name: 'BFP T',
        image: bdT,
        price: 5,
        paypalKey: 'L4SZBWLJM59WJ',
        active: false,
      },
      {
        name: 'BFP U',
        image: bdU,
        price: 5,
        paypalKey: 'JLE2Q2JL4J9P2',
      },
    ],
  },
  {
    name: 'Onslaught to Orsha',
    prices: [
      { type: 'US', price: 40 },
      { type: 'Canada', price: 50 },
      { type: 'International', price: 75 },
    ],
    paypalKey: 'BW5ULPWF8ZY7Y',
    type: 'counters',
  },
  {
    name: 'Corregidor the Rock',
    prices: [
      { type: 'US', price: 30 },
      { type: 'Canada', price: 45 },
      { type: 'International', price: 60 },
    ],
    paypalKey: 'FHZZQRHH35NLN',
    type: 'counters',
  },
  {
    name: 'Objective Schmidt',
    prices: [
      { type: 'US', price: 30 },
      { type: 'Canada', price: 45 },
      { type: 'International', price: 60 },
    ],
    paypalKey: 'TUMQH9Z9BHHH6',
    type: 'counters',
  },
  {
    name: 'Bitterest Day',
    prices: [
      { type: 'US', price: 30 },
      { type: 'Canada', price: 45 },
      { type: 'International', price: 60 },
    ],
    paypalKey: 'SREPTZAWRYHE8',
    type: 'counters',
  },
  {
    name: 'Blood & Jungle',
    prices: [
      { type: 'US', price: 60 },
      { type: 'Canada', price: 75 },
      { type: 'International', price: 90 },
    ],
    paypalKey: 'TFGXB3NFPT8FC',
    type: 'counters',
  },
  {
    name: 'Crucible of Steel',
    prices: [
      { type: 'US', price: 40 },
      { type: 'Canada', price: 60 },
      { type: 'International', price: 75 },
    ],
    paypalKey: 'JLJJYN5SWRXC2',
    type: 'counters',
  },
  {
    name: 'Poland in Flames',
    prices: [
      { type: 'US', price: 50 },
      { type: 'Canada', price: 65 },
      { type: 'International', price: 80 },
    ],
    paypalKey: 'TDWJRAJVLW7VA',
    type: 'counters',
  },
  {
    name: 'Schmidt 1',
    price: 10,
    paypalKey: 'MALL6CPBNZ8PC',
    type: 'hasl',
    image: schmidt1,
  },
  {
    name: 'Schmidt 2',
    price: 10,
    paypalKey: 'XF2RK94AKP938',
    type: 'hasl',
    image: schmidt2,
  },
  {
    name: 'Schmidt 3',
    price: 10,
    paypalKey: 'WQDCTE6AA2NSW',
    type: 'hasl',
    image: schmidt3,
  },
  {
    name: 'Schmidt 4',
    price: 10,
    paypalKey: 'JU6XY9CCWBDWU',
    type: 'hasl',
    image: schmidt4,
  },
  {
    name: 'Vossenack 1',
    price: 10,
    paypalKey: '4VBKTADMZLFKN',
    type: 'hasl',
    image: voss1,
  },
  {
    name: 'Vossenack 2',
    price: 10,
    paypalKey: 'KXYLQDKFFFWAA',
    type: 'hasl',
    image: voss2,
  },
  {
    name: 'Onslaught to Orsha',
    price: 20,
    paypalKey: 'C9TJ9QR6GC2SY',
    type: 'hasl',
    image: orsha,
  },
  {
    name: 'Op. Neptune',
    price: 20,
    paypalKey: '2WH5UZVZ4SMQC',
    type: 'hasl',
    image: neptune,
  },
  {
    name: 'Corregidor the Rock',
    price: 20,
    paypalKey: 'TKA3U8JZTSJBA',
    type: 'hasl',
    image: corregidor,
  },
  {
    name: 'Bitterest Day',
    price: 20,
    paypalKey: 'GCW5E657DDUGS',
    type: 'hasl',
    image: bitterest,
  },
];

/*

        <h5>Onslaught to Orsha</h5>
        <input value="" />
        prices
        <option value="US"> US $40.00 USD
        <option value="Canada"> Canada $50.00 USD
        <option value="International"> International $75.00 USD

*/
