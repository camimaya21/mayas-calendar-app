import React from 'react'

import { useInfinitySubcategories } from 'hooks/queries/subcategories'
import { useIntersectionObserver } from 'hooks/useIntersectionNotation'

import { LoadingDots } from 'components/Loading'
import { SSubcategoryItem } from './infinityScrollPage.styles'
import { SBasicContainer } from 'styles/common'

const InfinityScrollPage: React.FC = () => {
  const { isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfinitySubcategories()
  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  })

  if (isLoading)
    return (
      <SBasicContainer>
        <LoadingDots />
      </SBasicContainer>
    )

  return (
    <SBasicContainer ref={scrollAreaRef}>
      {data &&
        data.pages.map((page) => (
          <React.Fragment key={page.pagination.page_number}>
            {page.subcategories.map((subcategory) => (
              <SSubcategoryItem key={subcategory.id}>
                <p>{subcategory.name}</p>
              </SSubcategoryItem>
            ))}
          </React.Fragment>
        ))}
      {hasNextPage ? (
        <button ref={loadMoreButtonRef} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? <LoadingDots /> : 'Load more'}
        </button>
      ) : (
        <p>No more subcategories to show</p>
      )}
    </SBasicContainer>
  )
}

export default InfinityScrollPage
