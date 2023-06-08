import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center align-items-center">
          <div className="col-md-7 col-sm-12 col-lg-8">
            <h1 className="text-left text-bold text-lg display-1">
              Bisimwa Grace
            </h1>
            <h2 className="text-left text-lg display-2">Front End Developer</h2>
            <h4>ReactJs</h4>
            <a href="" target="_blank" className="btn btn-lg btn-primary">
              Github Account
            </a>
          </div>
          <div className="col-md-5 col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img src="/public/Portfolio.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
