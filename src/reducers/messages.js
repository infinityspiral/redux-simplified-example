import * as constants from '../actions/constants'

const messages = (state = [], action) => {
  switch (action.type){
    case constants.ADD_MESSAGE:
      return action.data
    default:
      return state
  }
}
export default messages