import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messages'
import image from '../images/test.jpg'

export class Inbox extends Component {
  state = {
    messages: undefined
  }

  showMessages = () => {
    this.props.addMessage(['This is an item'], this.props.messages);
  }

  onLoadHandler = (e) => {
    console.log(e.target)
  }

  render(){
    return (
      <div className='Inbox'>
        <div>Messages: {this.props.messages.map((messageItem,index) => <p key={index}>{messageItem}</p>)}</div>
        <button onClick={this.showMessages}>Add Message Item</button>
        <div><img src={image} alt='Loading...' onLoad={this.onLoadHandler}/></div>
      </div>
    )
  }
}
Inbox.defaultProps = {messages: []}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, {addMessage})(Inbox)