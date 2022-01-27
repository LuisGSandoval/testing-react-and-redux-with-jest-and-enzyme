import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Finanzas from './Finanzas'
configure({ adapter: new Adapter() })

describe('Finanzas', () => {
  it('should render a table and also removeFinanze should delete an option from the list', () => {
    const eliminarFinanza = jest.fn()
    const finanzas = [
      { desc: '1', cant: 1 },
      { desc: '2', cant: 2 },
      { desc: '3', cant: 3 },
    ]
    const props = { eliminarFinanza, finanzas }

    const wrapper = shallow(<Finanzas {...props} />)

    let trFound = wrapper.find('[data-test="tr-2"]')
    expect(trFound.length).toEqual(1)

    wrapper.find('[data-test="removeButton-2"]').simulate('click')
    trFound = wrapper.find('[data-test="tr-2"]')
    expect(eliminarFinanza).toHaveBeenCalledTimes(1)
    expect(eliminarFinanza).toHaveBeenCalledWith(1)
  })
})
