/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-extra-semi */
import { renderHook } from '@testing-library/react-hooks'
import { useEvent, useEvents } from '../events'
import { request } from 'api/apiHandler'
import { MOCK_ALL_EVENTS_RESPONSE, MOCK_EVENT_RESPONSE } from '__mocks__/eventsData'
import { QueryWrapper } from 'utils/testQueryWrapper'

jest.mock('../../../api/apiHandler', () => ({
  request: jest.fn()
}))

describe('Events queries', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('should implement useEvents query and get a list of events', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_ALL_EVENTS_RESPONSE }))
    )

    const { result, waitFor } = renderHook(() => useEvents(), { wrapper: QueryWrapper })
    await waitFor(() => result.current.isSuccess)

    // @ts-ignore
    expect(result.current.data[0].description).toBe('All you need is love')
    expect(result.current.data).toHaveLength(3)
    expect(result.current.isSuccess).toBeTruthy()
    expect(result.current.isLoading).toBeFalsy()
  })

  it('should implement useEvent query and get a specific evente', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_EVENT_RESPONSE }))
    )

    const { result, waitFor } = renderHook(() => useEvent('11a9e522-b32e-4717-a4c8-378354d77f98'), {
      wrapper: QueryWrapper
    })
    await waitFor(() => result.current.isSuccess)

    // @ts-ignore
    expect(result.current.data.title).toBe('May the 4th')
    expect(result.current.isSuccess).toBeTruthy()
    expect(result.current.isLoading).toBeFalsy()
  })
})
