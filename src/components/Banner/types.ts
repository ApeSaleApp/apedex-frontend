export enum banners {
  BANANA_FARMS = 'banana-farms',
  POLYGON_FARMS = 'polygon-farms',
  JUNGLE_FARMS = 'jungle-farms',
  POOLS = 'pools',
  IAO = 'iao',
  AUCTION = 'auction',
  BANANA_MAXIMIZERS = 'banana-maximizers',
  NFB_COLLECTION = 'nfb-collection',
  NFA_COLLECTION = 'nfa-collection',
  NFA_STAKING = 'nfa-staking',
  BURNING = 'burning',
  TREASURY_BILL = 'treasury-bills',
  SSIAO = 'ssiao',
  GNANA = 'gnana',
}

export type BannerTypes = `${banners}`

enum colorValues {
  transparent = 'transparent',
  white = 'white',
  black = 'black',
  yellow = 'yellow',
  lightYellow = 'lightYellow',
  mint = 'mint',
  red = 'red',
  secondary = 'secondary',
  bgPrimary = 'bgPrimary',
  bgSecondary = 'bgSecondary',
  lightGray = 'lightGray',
  mediumGray = 'mediumGray',
  textPrimary = 'textPrimary',
  textSecondary = 'textSecondary',
  textNote = 'textNote',
}

export type ColorProps = `${colorValues}`
