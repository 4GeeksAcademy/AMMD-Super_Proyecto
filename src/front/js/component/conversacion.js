import React, { useState } from "react";
import "../../styles/conversacion.css";

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [sender, setSender] = useState('profesional');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim() === '') return;

    setMessages([...messages, { text: currentMessage, sender }]);
    setCurrentMessage('');
  };

  return (
    <div className="message-board">
      <h2>Mensaje Board</h2>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span className="sender">{message.sender}:</span> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <select value={sender} onChange={(e) => setSender(e.target.value)}>
          <option value="profesional">Profesional</option>
          <option value="cliente">Cliente</option>
        </select>
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Conversacion;