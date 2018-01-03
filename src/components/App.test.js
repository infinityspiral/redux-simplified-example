import React, { Component } from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App';

describe('<App/>', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should find a connected Inbox', () => {
    expect(wrapper.find('Connect(Inbox)').exists()).to.be.true
  });
})