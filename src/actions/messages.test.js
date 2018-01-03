import { expect } from 'chai'
import * as constants from './constants'
import * as actions from './messages'

it('should create an action to add a message', () => {

  const messages = ['blah1','blah2','blah3']
  const expectedAction = {type: constants.ADD_MESSAGE, data: messages}

  expect(actions.addMessage(messages)).to.eql(expectedAction);

});
