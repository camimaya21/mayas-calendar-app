/* eslint-disable @typescript-eslint/no-extra-semi */
import { findEvent, findEvents, createEvent, updateEvent, deleteEvent } from '../eventsApi'
import {
  MOCK_ALL_EVENTS_RESPONSE,
  MOCK_EVENT_REQUEST,
  MOCK_EVENT_UPDATE,
  MOCK_EVENT_RESPONSE
} from '__mocks__/eventsData'
import { request } from '../apiHandler'

jest.mock('../apiHandler', () => ({
  request: jest.fn()
}))

describe('events API', () => {
  afterEach(() => {
    jest.resetModules()
  })

  it('.findEvents should get a list of events', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_ALL_EVENTS_RESPONSE }))
    )

    const { data } = await findEvents()

    expect(data).toHaveLength(3)
    expect(data[1].description).toBe('We are stronger together')
  })

  it('.findEvent should a specific event', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_EVENT_RESPONSE }))
    )

    const id = '11a9e522-b32e-4717-a4c8-378354d77f98'
    const { data } = await findEvent(id)

    expect(data.title).toBe('May the 4th')
    expect(data.id).toBe(id)
  })

  it('.createEvent should a specific event', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_EVENT_RESPONSE }))
    )

    const { data } = await createEvent(MOCK_EVENT_REQUEST)

    expect(data.title).toBe('May the 4th')
    expect(data.id).toBe('11a9e522-b32e-4717-a4c8-378354d77f98')
  })

  it('.createEvent should a specific event', async () => {
    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: MOCK_EVENT_UPDATE }))
    )
    const id = '11a9e522-b32e-4717-a4c8-378354d77f98'
    const { data } = await updateEvent(id, MOCK_EVENT_UPDATE)

    expect(data.title).toBe('Bolt is back')
    expect(data.id).toBe(id)
  })

  it('.createEvent should a specific event', async () => {
    const id = '11a9e522-b32e-4717-a4c8-378354d77f98'

    ;((request as unknown) as jest.Mock).mockImplementation(
      () => new Promise((resolve) => resolve({ data: { id, result: 'Event was deleted' } }))
    )
    const { data } = await deleteEvent(id)

    expect(data.id).toBe(id)
    expect(data.result).toBe('Event was deleted')
  })
})
