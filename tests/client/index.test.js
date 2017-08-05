import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { Home } from '../../client/components/Home'
import './setup-dom'

import App from '../../client/components/App'

describe('HomeComponent', () => {
  it('should render Home component', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper.find('.home')).to.have.length(1);
  })
})
