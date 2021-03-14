import axios from 'utils/axios'
import { request } from '../apiHandler'

jest.mock('../../utils/axios')

describe('.apiHandler', () => {
  it('should properly request to events service ', async () => {
    await request('events', {})
    expect(axios).toHaveBeenCalledWith({ url: 'http://localhost:5000/api/events' })
  })
})
