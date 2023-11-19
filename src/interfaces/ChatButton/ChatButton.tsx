import React, { useState } from 'react';
import { Content, FloatingButton, Header } from './chatButton.styled';
import Chat from "minimal-chatbot"
import messages, { firstMessage } from '../../Data';
import { Bot, X } from 'lucide-react';

const ChatButton = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>

      {showChat && (
        <Content>
          <Header className="close" onClick={toggleChat}>
            <p>
              Adolphinho
            </p>
            <span>
              <X />
            </span>
          </Header>
          <Chat data={messages} firstMessage={firstMessage} />
        </Content>
      )}

      <FloatingButton onClick={toggleChat}>
        <Bot size={40} />
      </FloatingButton>
    </>
  );
}

export default ChatButton;
