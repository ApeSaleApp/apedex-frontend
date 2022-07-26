import React from 'react'
import { Navigate, useParams, useLocation, useNavigate} from 'react-router-dom'


// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly({ location }: any) {
  return <Navigate to="/swap" replace={true} />
}

// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
export function RedirectToSwap(props: any) {

  const { search, pathname, state } = useLocation()
  const { outputCurrency } = useParams<{outputCurrency: string}>()

  // const {
  //   location,
  //   location: { search },
  //   match: {
  //     params: { outputCurrency },
  //   },
  // } = props

  return (
    <Navigate
      replace={true}
      state={state}
      to={{
        pathname: '/swap',
        search:
          search && search.length > 1
            ? `${search}&outputCurrency=${outputCurrency}`
            : `?outputCurrency=${outputCurrency}`,
      }}
    />
  )
}
