import { CHAIN_ID } from 'config/constants/chains'
import SwiperProvider from 'contexts/SwiperProvider'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AddLiquidity from 'views/Dex/AddLiquidity'
import Orders from 'views/Dex/Orders'
import Swap from 'views/Dex/Swap'
import { Information } from './components/Information/Information'
import LaunchCalendar from './components/LaunchCalendar/LaunchCalendar'
import News from './components/News/News'
import Services from './components/Services/Services'
import StatCards from './components/StatCards/StatCards'
import TrendingTokens from './components/TrendingTokens/TrendingTokens'
import Values from './components/Values/Values'
import WelcomeContent from './components/WelcomeContent/WelcomeContent'
import { Banner, ChartWrapper } from './styles'

const renderComponent = {
  '/': () => <Swap />,
  '/orders': () => <Orders />,
  '/add': () => <Route exact path="/add" component={AddLiquidity} />,
}
const Home: React.FC = () => {
  //   const { chainId } = useActiveWeb3React()
  const { path, url } = useRouteMatch()
  console.log(url)
  return (
    <>
      <ChartWrapper className="wrapper-chart">
        <Information />
      </ChartWrapper>
      {renderComponent[path]()}

      {/* <Banner /> */}
      {/* <WelcomeContent /> */}
      {/* <StatCards />
      <TrendingTokens />
      <SwiperProvider>
        <News />
      </SwiperProvider> */}
      {/* {chainId === CHAIN_ID.BSC && (
        <SwiperProvider>
          <Services />
        </SwiperProvider>
      )} */}
      {/* <SwiperProvider>
        <Values />
      </SwiperProvider>
      <SwiperProvider>
        <LaunchCalendar />
      </SwiperProvider> */}
    </>
  )
}

export default React.memo(Home)
