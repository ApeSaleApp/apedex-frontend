import React from 'react'
import { useSelector } from 'react-redux'
// import { ToastContainer, Toast } from '@ape.swap/uikit'
import { useToast } from 'state/hooks'
import { State } from 'state/types'

const ToastListener = () => {
  // const toasts: Toast[] = useSelector((state: State) => state.toasts.data)
  const { remove } = useToast()

  const handleRemove = (id: string) => remove(id)
  return <><p>abc</p></>
  // return <ToastContainer toasts={toasts} onRemove={handleRemove} />
}

export default ToastListener
