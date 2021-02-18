import { SettingsObject, SettingsType } from './types'

const BASE_URL = 'https://easybake.finance'

//'https://pancake-config-api-chefkai.pancakeswap.vercel.app'

const settings: SettingsObject[] = [
  {
    name: 'ifos',
    url: `${BASE_URL}/ifos`,
    type: SettingsType.IFO,
  },
  {
    name: 'pools',
    url: `${BASE_URL}/pools`,
    type: SettingsType.POOL,
  },
  {
    name: 'farms',
    url: `${BASE_URL}/`,
    type: SettingsType.FARM,
  },
]
export default settings
