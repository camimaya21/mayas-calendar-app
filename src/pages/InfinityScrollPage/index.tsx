import React from 'react'
import { useInfinitySubcategories } from 'hooks/queries/subcategories'
import { LoadingDots } from 'components/Loading'
const InfinityScrollPage: React.FC = () => {
  const { isLoading, data, isFetchingNextPage } = useInfinitySubcategories()

  if (isLoading) return <LoadingDots />

  return (
    <div>
      <h1>Explore Eventbrite`s Subcategories</h1>
      {data &&
        data.pages.map((page) => (
          <React.Fragment key={page.pagination.continuation}>
            {page.subcategories.map((subcategory) => (
              <p key={subcategory.id}>{subcategory.name}</p>
            ))}
          </React.Fragment>
        ))}
      {isFetchingNextPage && <p>Fetching more data...</p>}
    </div>
  )
}

export default InfinityScrollPage
