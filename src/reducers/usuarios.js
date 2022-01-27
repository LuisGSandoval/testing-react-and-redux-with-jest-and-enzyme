// El estado inicial y el array donde todo se almacenará
// [{name:string, username:string}]
const initialState = [{ loading: false, data: [], error: null }]

export const fetchUsuariosStart = () => ({
  type: 'FETCH_USUARIOS_START',
  error: null,
})

export const fetchUsuariosSuccess = (payload) => ({
  type: 'FETCH_USUARIOS_START',
  payload,
})

export const fetchUsuariosError = (payload) => ({
  type: 'FETCH_USUARIOS_ERROR',
  payload,
  error: true,
})

// reducer function
export default function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'FETCH_USUARIOS_START': {
      return {
        ...state,
        loading: true,
        error: action.error,
      }
    }

    case 'FETCH_USUARIOS_SUCCESS': {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }

    case 'FETCH_USUARIOS_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }

    default: {
      return state
    }
  }
}

export const fetchUsuarios = () => async (dispatch, getState, { axios }) => {
  dispatch(fetchUsuariosStart())

  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    )
    dispatch(fetchUsuariosSuccess(data))
  } catch (e) {
    dispatch(fetchUsuariosError(e))
  }
}
