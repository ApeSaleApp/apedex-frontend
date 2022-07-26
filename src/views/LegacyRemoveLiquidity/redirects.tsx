import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/

//https://stackoverflow.com/questions/64517983/useparams-in-typescript-does-not-allow-destructuring
function RedirectOldRemoveLiquidityPathStructure(
//   {
//   match: {
//     params: { tokens },
//   },
// }: RouteComponentProps<{ tokens: string }>)
)
{
  const { tokens } = useParams<{tokens: string}>();


  if (!OLD_PATH_STRUCTURE.test(tokens)) {
    return <Navigate to="/pool" />
  }
  const [currency0, currency1] = tokens.split('-')

  return <Navigate to={`/remove/${currency0}/${currency1}`} />
}
export default RedirectOldRemoveLiquidityPathStructure
