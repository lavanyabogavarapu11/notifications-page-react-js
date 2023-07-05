const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, msgText } = props;
  const notificationMsgContainer = `msg-container ${className}`;
  return (
    <div className={notificationMsgContainer}>
      <img className="icon" src={imageUrl} />
      <p className="message"> {msgText} </p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-container">
    <h1 className="heading"> Notification</h1>
    <div className="notification-list-container">
      <Notification
        className="primary-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        msgText="Information Message"
      />
      <Notification
        className="success-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        msgText="Success Message"
      />
      <Notification
        className="warning-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        msgText="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        msgText="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
