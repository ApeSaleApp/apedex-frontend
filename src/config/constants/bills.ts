import { CHAIN_ID } from './chains'
import tokens from './tokens'
import { BillsConfig } from './types'

const bills: BillsConfig[] = [
  {
    index: 12,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0x3f02ce456b9da36352439fbd1897c2233a77e46f',
    },
    billType: 'JUNGLE Bill',
    token: tokens.radar,
    quoteToken: tokens.wbnb,
    lpToken: tokens.radarBnb,
    earnToken: tokens.radar,
  },
  {
    index: 5,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0x1c36913ca7c64365a54694cd91dde9c7cf5e44ec',
    },
    billType: 'JUNGLE Bill',
    token: tokens.ceek,
    quoteToken: tokens.wbnb,
    lpToken: tokens.ceekBnb,
    earnToken: tokens.ceek,
  },
  {
    index: 6,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0xd9e18fae215f10f4ce35a24fcbfe944fbfb96643',
    },
    billType: 'JUNGLE Bill',
    token: tokens.nfty,
    quoteToken: tokens.wbnb,
    lpToken: tokens.nftyBnb,
    earnToken: tokens.nfty,
  },
  {
    index: 7,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0xda0149da023cb204b3ffba33a88d9dd19393c6fc',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
    inactive: true,
  },
  {
    index: 8,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0xaf3016100f67c66af15c973cb8da94962653a726',
    },
    billType: 'JUNGLE Bill',
    token: tokens.stars,
    quoteToken: tokens.wbnb,
    lpToken: tokens.starsBnb,
    earnToken: tokens.stars,
  },
  {
    index: 9,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0x6a5be77e3fc1c99ef4aae2846432d61fa78a564c',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
  },
  {
    index: 10,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0xb5fd0ac23267da501fc6c59c6e12ae32831e72bb',
    },
    billType: 'JUNGLE Bill',
    token: tokens.hotcross,
    quoteToken: tokens.busd,
    lpToken: tokens.hotcrossBusd,
    earnToken: tokens.hotcross,
  },
  {
    index: 11,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0x4a3adf34b1f8830fb8d673477d52fa5cb91a2531',
    },
    billType: 'JUNGLE Bill',
    token: tokens.tlos,
    quoteToken: tokens.busd,
    lpToken: tokens.tlosBusd,
    earnToken: tokens.tlos,
  },
  {
    index: 0,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '0xB0878C819c4eD242d9780540E728dDE46DAcC42b',
      [CHAIN_ID.BSC]: '0x8b57Fc5BE65118188D50d42fcD5614e447F7FAbE',
    },
    billType: 'BANANA Bill',
    token: tokens.banana,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bananaBnb,
    earnToken: tokens.banana,
  },
  {
    index: 1,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0x4925AcdE0E885170801A74DEBcC8fbA91F3aE29b',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBusd,
    earnToken: tokens.banana,
  },
  {
    index: 2,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0xca1612f66292398a5df0ecadd98bb81dc264349d',
    },
    billType: 'BANANA Bill',
    token: tokens.busd,
    quoteToken: tokens.usdc,
    lpToken: tokens.usdcBusd,
    earnToken: tokens.banana,
  },
  {
    index: 3,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0xb2d516086BFc978950e40D2739c72125415441a8',
    },
    billType: 'BANANA Bill',
    token: tokens.eth,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbEth,
    earnToken: tokens.banana,
  },
  {
    index: 4,
    contractAddress: {
      [CHAIN_ID.BSC_TESTNET]: '',
      [CHAIN_ID.BSC]: '0xBD9959320cbbC69b2eF7d07fb3f9870cceaeB44f',
    },
    billType: 'BANANA Bill',
    token: tokens.btc,
    quoteToken: tokens.wbnb,
    lpToken: tokens.bnbBtc,
    earnToken: tokens.banana,
  },
]

export default bills
