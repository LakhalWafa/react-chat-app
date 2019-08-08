import { Component } from 'react';
import React from 'react';
import uuid from 'uuid/v1';

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }
  renderMessage(message) {
    const { currentMember } = this.props;
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? 'Messages-message currentMember'
      : 'Messages-message';
    return (
      <li className={className} key={uuid()}>
        <span className="avatar" style={{ backgroundColor: member.color }} />
        <div className="Message-content">
          <div className="username">{member.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}
export default Messages;
