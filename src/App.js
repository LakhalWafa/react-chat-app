import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import Input from './Input';
import Navbar from './Navbar';

class App extends Component {
  state = {
    currentMember: [
      {
        text: 'Hello!',
        member: {
          id: '1',
          color: 'blue',
          username: 'Mohammed Salah'
        }
      }
    ],
    member: {
      id: '1',
      color: 'blue',
      username: 'Mohammed Salah'
    },
    memberRandom: {
      id: '2',
      username: 'Wafa',
      color: 'pink'
    },
    turn: true
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Messages
          messages={this.state.currentMember}
          currentMember={this.state.memberRandom}
          turn={this.state.turn}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }

  onSendMessage = message => {
    const messages = this.state.currentMember;
    messages.push({
      text: message,
      member: this.state.turn ? this.state.memberRandom : this.state.member
    });
    this.setState({
      currentMember: messages,
      turn: !this.state.turn
    });
  };
}

export default App;
