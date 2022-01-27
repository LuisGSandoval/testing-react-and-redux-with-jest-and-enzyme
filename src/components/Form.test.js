import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Form from './Form'

configure({ adapter: new Adapter() })

describe('Form', () => {
  it('agregar', () => {
    const agregarFinanzas = jest.fn()
    const prvtDflt = jest.fn()

    const wrapper = shallow(<Form agregarFinanza={agregarFinanzas} />)

    wrapper
      .find('[data-test="desc-input"]')
      .simulate('change', { target: { value: 'descripción' } })

    wrapper
      .find('[data-test="cant-input"]')
      .simulate('change', { target: { value: '150' } })

    wrapper
      .find('[data-test="finanzas-form"]')
      .simulate('submit', { preventDefault: prvtDflt })

    expect(agregarFinanzas).toHaveBeenCalledWith({
      desc: 'descripción',
      cant: 150,
    })
    expect(prvtDflt).toHaveBeenCalledTimes(1)
  })
})
