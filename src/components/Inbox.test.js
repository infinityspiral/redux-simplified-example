import React, { Component } from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Inbox } from './Inbox';

describe('<Inbox/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Inbox/>)
  })

  it('should render', () => {
    expect(wrapper.exists()).to.be.true;
  });
})
