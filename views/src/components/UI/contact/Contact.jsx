import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="form">
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email@isokolasource.com"
            className="input"
          />
        </div>
        <div className="group">
          <label htmlFor="msg">Message</label>
          <textarea
            name="message"
            className="input"
            id="msg"
            placeholder="Message..."
          ></textarea>
        </div>
        <div className="group">
          <button type="button" className="button">
            Envoyer
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
