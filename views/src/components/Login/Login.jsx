import React from "react";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5 justify-content-center">
          <div className="col-md-7 col-sm-12 col-lg-4">
            <div className="card card-body">
              <h2 className="text-center">Login</h2>
              <form action="" method="post">
                <div className="form-group my-3">
                  <label htmlFor="username">Username Or Email</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
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
                  <button type="submit" className="btn btn-block btn-primary">
                    Login
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

export default Login;
