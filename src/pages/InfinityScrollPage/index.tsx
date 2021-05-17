import React from 'react'
import { useInfinitySubcategories } from 'hooks/queries/subcategories'
import { LoadingDots } from 'components/Loading'
import { useIntersectionObserver } from 'hooks/useIntersectionNotation'
const InfinityScrollPage: React.FC = () => {
  const { isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfinitySubcategories()
  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null)

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  })

  if (isLoading) return <LoadingDots />

  return (
    <div>
      <h1>Explore Eventbrite`s Subcategories</h1>
      {data &&
        data.pages.map((page) => (
          <React.Fragment key={page.pagination.page_number}>
            {page.subcategories.map((subcategory) => (
              <p key={subcategory.id}>{subcategory.name}</p>
            ))}
          </React.Fragment>
        ))}
      {hasNextPage ? (
        <button ref={loadMoreButtonRef} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? <LoadingDots /> : 'Explore more categories'}
        </button>
      ) : (
        <p>Nothing more to load</p>
      )}
    </div>
  )
}

export default InfinityScrollPage
