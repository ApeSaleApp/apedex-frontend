import React, { lazy } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AddLiquidity from '../AddLiquidity'
import Pool from '../Pool'
import PoolFinder from '../PoolFinder'
import RemoveLiquidity from '../RemoveLiquidity'

const RedirectOldRemoveLiquidityPathStructure = lazy(() => import('../../LegacyRemoveLiquidity/redirects'))
const redirectAddLiquidity = () => import('../AddLiquidity/redirects')
const RedirectDuplicateTokenIds = lazy(async () =>
  redirectAddLiquidity().then((r) => ({
    default: r.RedirectDuplicateTokenIds,
  })),
)
const RedirectOldAddLiquidityPathStructure = lazy(async () =>
  redirectAddLiquidity().then((r) => ({
    default: r.RedirectOldAddLiquidityPathStructure,
  })),
)
const RedirectToAddLiquidity = lazy(async () =>
  redirectAddLiquidity().then((r) => ({
    default: r.RedirectToAddLiquidity,
  })),
)

const Liquidity = () => {
  const { path, url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={AddLiquidity} />
      <Route strict path={`${path}/find`} component={PoolFinder} />
      <Route strict path={`${path}/pool`} component={Pool} />
      <Route strict path={`${path}/create`} component={RedirectToAddLiquidity} />
      <Route exact path={`${path}/add`} component={AddLiquidity} />
      <Route exact path={`${path}/add/:currencyIdA`} component={RedirectOldAddLiquidityPathStructure} />
      <Route path={`${path}/add/:currencyIdA/:currencyIdB`} component={RedirectDuplicateTokenIds} />
      <Route exact strict path={`${path}/remove/:tokens`} component={RedirectOldRemoveLiquidityPathStructure} />
      <Route strict path={`${path}/remove/:currencyIdA/:currencyIdB`} component={RemoveLiquidity} />
    </Switch>
  )
}

export default Liquidity
