import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.contains(<h1>Welcome to Schools</h1>), true)
  t.end()
})
