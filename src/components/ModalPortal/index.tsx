import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { IModalPortal } from './modalPortal.types'

let modalRoot: HTMLElement = document.getElementById('modal-root') as HTMLElement
if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')
  document.body.appendChild(modalRoot)
}

export const ModalPortal: React.FC<IModalPortal> = ({ children }) => {
  const element = useRef(document.createElement('div'))

  useEffect(() => {
    modalRoot && modalRoot.appendChild(element.current)
  }, [])

  return createPortal(children, element.current)
}
