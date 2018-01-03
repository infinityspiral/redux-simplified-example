import * as constants from './constants'

export const addMessage = ((newMessages, currentMessages = []) => {

  const combinedMessages = [
    ...currentMessages,
    ...newMessages
  ]

  return {
    type: constants.ADD_MESSAGE,
    data: combinedMessages
  }
})