import { mount, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

configure({ adapter: new Adapter() })

describe('App', () => {
  it('interactua con nuestro store', () => {
    const finanzasState = [
      { desc: 'lala', cant: 150 },
      { desc: 'lele', cant: 200 },
    ]
    const prevent = jest.fn()
    const reducer = jest.fn().mockReturnValue({
      finanzas: finanzasState,
    })
    const store = createStore(reducer)
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    const tableDescCell = wrapper.find('[data-test="td-desc"]').at(0).text()
    const tableCantCell = wrapper.find('[data-test="td-cant"]').at(0).text()
    wrapper
      .find('[data-test="desc-input"]')
      .simulate('change', { target: { value: 'lolo' } })

    wrapper
      .find('[data-test="cant-input"]')
      .simulate('change', { target: { value: '150' } })

    wrapper.find('form').simulate('submit', {
      preventDefault: prevent,
    })

    wrapper.find('[data-test="removeButton-lala"]').simulate('click')

    const [_, ...rest] = reducer.mock.calls
    expect(rest).toEqual([
      [
        {
          finanzas: finanzasState,
        },
        {
          type: 'AGREGAR',
          payload: { desc: 'lolo', cant: 150 },
        },
      ],
      [
        {
          finanzas: finanzasState,
        },
        {
          type: 'ELIMINAR',
          index: 0,
        },
      ],
    ])

    expect(tableDescCell).toEqual(finanzasState[0].desc)
    expect(tableCantCell).toEqual(finanzasState[0].cant.toString())
  })
})
