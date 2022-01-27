import reducer, { agregar, eliminar } from './finanzas'

describe('Duck finanzas', () => {
  describe('Action creators', () => {
    it('Agregar', () => {
      const resultado = agregar(1)

      expect(resultado).toEqual({
        type: 'AGREGAR',
        payload: 1,
      })
    })
    it('Eliminar', () => {
      const resultado = eliminar(0)
      expect(resultado).toEqual({ type: 'ELIMINAR', index: 0 })
    })
  })

  describe('Reducer', () => {
    it('AGREGAR', () => {
      const resultado = reducer([1], {
        type: 'AGREGAR',
        payload: 2,
      })

      expect(resultado).toEqual([1, 2])
    })
    it('ELIMINAR', () => {
      const resultado = reducer([1, 2, 3, 4], {
        type: 'ELIMINAR',
        index: 2,
      })

      expect(resultado).toEqual([1, 2, 4])
    })

    it('Default', () => {
      const state = [{ desc: 'hola', cant: 1 }, 2]
      const resultado = reducer(state, {
        type: 'no definido',
      })

      expect(resultado).toEqual(state)
    })
  })
})
