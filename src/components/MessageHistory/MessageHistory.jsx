import Message from "../Message/Message";
import Response from "../Response/Response";
import Typing from "../Typing/Typing";

export default function MessageHistory({ list = [] }) {
  if (list.length === 0) return null;

  const renderMessage = (message) => {
    const messageType = {
      response: <Response 
              key={message.id} 
              from={message.from} 
              message={message} />,

      message: <Message 
              key={message.id} 
              from={message.from} 
              message={message} />,
              
      typing: <Typing 
              key={message.id} 
              from={message.from} 
              message={message} />,
    };

    return messageType[message.type];
  };

  return (
    <ul>
      {list.map((message) => renderMessage(message))}
    </ul>)
}
