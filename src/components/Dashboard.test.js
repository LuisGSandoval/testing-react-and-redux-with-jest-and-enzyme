import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Dashboard from './Dashboard'

configure({ adapter: new Adapter() })

describe('Dashboard', () => {
  it('Should show the title of the total given', () => {
    const total = 150
    const wrapper = shallow(<Dashboard valor={total} />)

    const totalTextComponent = wrapper.find('[data-test="total"]').text()

    expect(totalTextComponent).toEqual(String(total))
  })
})
