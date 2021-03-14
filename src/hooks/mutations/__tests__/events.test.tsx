/* eslint-disable @typescript-eslint/no-extra-semi */
import { renderHook, act } from '@testing-library/react-hooks'
import { useCreateEvent, useDeleteEvent, useUpdateEvent } from '../events'
import { request } from 'api/apiHandler'
import { MOCK_EVENT_REQUEST, MOCK_EVENT_RESPONSE, MOCK_EVENT_UPDATE } from '__mocks__/eventsData'
import { QueryWrapper } from 'utils/testQueryWrapper'

jest.mock('../../../api/apiHandler', () => ({
  request: jest.fn()
}))

describe('Events mutations', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('useCreateEvent', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_EVENT_RESPONSE }))
    )

    await act(async () => {
      const { result, waitFor } = renderHook(() => useCreateEvent(), {
        wrapper: QueryWrapper
      })

      await waitFor(() => {
        return result.current.mutate(MOCK_EVENT_REQUEST, {
          onSuccess: (res) => {
            expect(res.data.id).toBe('11a9e522-b32e-4717-a4c8-378354d77f98')
            expect(res.data.title).toBe('May the 4th')
          }
        })
      })
    })
  })

  it('useUpdateEvent', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_EVENT_UPDATE }))
    )

    await act(async () => {
      const { result, waitFor } = renderHook(() => useUpdateEvent(), {
        wrapper: QueryWrapper
      })

      await waitFor(() => {
        return result.current.mutate(MOCK_EVENT_UPDATE, {
          onSuccess: (res) => {
            expect(res.data.id).toBe('11a9e522-b32e-4717-a4c8-378354d77f98')
            expect(res.data.title).toBe('Bolt is back')
          }
        })
      })
    })
  })

  it('useUpdateEvent', async () => {
    const id = '11a9e522-b32e-4717-a4c8-378354d77f98'

    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: { id, result: 'Event was deleted' } }))
    )

    await act(async () => {
      const { result, waitFor } = renderHook(() => useDeleteEvent(), {
        wrapper: QueryWrapper
      })

      await waitFor(() => {
        return result.current.mutate(id, {
          onSuccess: (res) => {
            expect(res.data.id).toBe(id)
            expect(res.data.result).toBe('Event was deleted')
          }
        })
      })
    })
  })
})
