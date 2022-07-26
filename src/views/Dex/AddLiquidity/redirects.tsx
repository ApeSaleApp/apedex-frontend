import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import AddLiquidity from './index'

export function RedirectToAddLiquidity() {
  return <Navigate to="/add/" />
}

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40}|BNB)-(0x[a-fA-F0-9]{40}|BNB)$/
export function RedirectOldAddLiquidityPathStructure(props: any) {
  // const {
  //   match: {
  //     params: { currencyIdA },
  //   },
  // } = props

  const {currencyIdA} = useParams<{currencyIdA: string}>();

  const match = currencyIdA.match(OLD_PATH_STRUCTURE)
  if (match?.length) {
    return <Navigate to={`/add/${match[1]}/${match[2]}`} />
  }

  return <AddLiquidity {...props} />
}

export function RedirectDuplicateTokenIds(props: any) {
  const {currencyIdA, currencyIdB} = useParams<{currencyIdA: string, currencyIdB: string}>();

  // const {
  //   match: {
  //     params: { currencyIdA, currencyIdB },
  //   },
  // } = props
  if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return <Navigate to={`/add/${currencyIdA}`} />
  }
  return <AddLiquidity {...props} />
}
