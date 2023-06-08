import React from "react";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5 justify-content-center">
          <div className="col-md-7 col-sm-12 col-lg-4">
            <div className="card card-body">
              <h2 className="text-center">Registration</h2>
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email@gmail.com"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="password">Email</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password ****"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="password2">Confirm password</label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Confirm password"
                    className="form-control"
                  />
                </div>
                <div className="form-group my-3">
                  <button type="submit" className="btn btn-block btn-primary">
                    Register
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

export default Register;
