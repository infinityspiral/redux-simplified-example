import { expect } from 'chai'
import * as constants from '../actions/constants'
import messagesReducer from './messages'

describe('messagesReducer', () => {

  it('should set intial message', () => {
    const messages = ['blah1','blah2','blah3']
    expect(messagesReducer(undefined, {type: constants.ADD_MESSAGE, data: messages}))
    .to.equal(messages)
  });
})