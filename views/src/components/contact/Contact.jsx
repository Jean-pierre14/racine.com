const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5 justify-content-center">
          <div className="col-md-7 col-sm-12 col-lg-4">
            <div className="card card-body">
              <h2 className="text-center">Contact Us</h2>
              <form action="" method="post">
                <div className="form-group my-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message..."
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group my-3">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
