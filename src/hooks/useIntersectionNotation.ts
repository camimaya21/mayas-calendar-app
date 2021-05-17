import { ISubcategories } from 'api/types/eventbriteApi.types'
import { AxiosError } from 'axios'
import React, { MutableRefObject, RefObject } from 'react'
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'

interface IIntesectionObserverProps {
  root?: RefObject<Element>
  target: MutableRefObject<HTMLButtonElement | null>
  onIntersect: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<ISubcategories, AxiosError>>
  threshold?: number
  rootMargin?: string
  enabled?: boolean
}

interface IIntersectionObserver {
  observer?: IntersectionObserver
}

export const useIntersectionObserver: React.FC<IIntesectionObserverProps> = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true
}): IIntersectionObserver | any => {
  React.useEffect(() => {
    if (!enabled) return

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold
      }
    )

    const el = target && target.current
    if (!el) return

    observer.observe(el)

    return () => observer.unobserve(el)
  }, [target.current, enabled])
}
