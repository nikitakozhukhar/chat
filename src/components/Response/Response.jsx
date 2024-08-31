export default function Response({ from, message }) {
  console.log(from);

  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me" />
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
}
