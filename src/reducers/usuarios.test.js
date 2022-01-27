import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { fetchUsuarios } from './usuarios'

configure({ adapter: new Adapter() })

describe('Duck usuarios', () => {
  describe('fetfchUsers', () => {
    it('Success case', async () => {
      const dispatch = jest.fn()
      const getState = jest.fn()
      const services = {
        axios: {
          get: jest.fn().mockResolvedValue({ data: 1 }),
        },
      }

      await fetchUsuarios()(dispatch, getState, services)

      expect(dispatch.mock.calls).toEqual([
        [
          {
            type: 'FETCH_USUARIOS_START',
            error: null,
          },
        ],
        [
          {
            type: 'FETCH_USUARIOS_START',
            payload: 1,
          },
        ],
      ])
    })

    it('Error case', async () => {
      const dispatch = jest.fn()
      const getState = jest.fn()
      const services = {
        axios: {
          get: jest.fn().mockRejectedValue(1),
        },
      }

      await fetchUsuarios()(dispatch, getState, services)
      expect(dispatch.mock.calls).toEqual([
        [{ type: 'FETCH_USUARIOS_START', error: null }],
        [{ type: 'FETCH_USUARIOS_ERROR', payload: 1, error: true }],
      ])
    })
  })
})
