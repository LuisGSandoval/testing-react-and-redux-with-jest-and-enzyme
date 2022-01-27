// El estado inicial y el array donde todo se almacenará
// [{desc:string, cant:number}]
const initialState = []

export const agregar = (payload) => ({
  type: 'AGREGAR',
  payload,
})

// action creator
export const eliminar = (index) => ({
  type: 'ELIMINAR',
  index,
})

// reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'AGREGAR': {
      return [...state, action.payload]
    }

    case 'ELIMINAR': {
      const newState = [...state]
      newState.splice(action.index, 1)
      return newState
    }

    default: {
      return state
    }
  }
}
