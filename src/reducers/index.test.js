import rootReducer from './index'
import { expect } from 'chai'

describe('rootReducer', () => {

  it('initializes the default state', () => {
    expect(rootReducer({}, {})).to.eql({messages: []})
  });
})
