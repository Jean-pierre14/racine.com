const language = [
  { id: 1, name: "HTML", path: "", icon: "" },
  { id: 2, name: "CSS", path: "" },
  { id: 3, name: "Bootstrap", path: "" },
  { id: 4, name: "TailwindCss", path: "" },
  { id: 5, name: "PHP", path: "" },
  { id: 6, name: "NodeJs", path: "" },
  { id: 7, name: "SQL", path: "" },
  { id: 8, name: "JavaScript", path: "" },
  { id: 9, name: "Jquery", path: "" },
  { id: 10, name: "Axios", path: "" },
];
import styles from "./Home.module.css";

import { Link } from "react-router-dom";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "../Skills/Skills";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center align-items-center">
          <div className="col-md-7 col-sm-12 col-lg-8">
            <h1
              className="text-left text-bold text-lg display-1"
              data-aos="zoom-in"
            >
              Bisimwa Grace
            </h1>
            <h2 className="text-left display-2" data-aos="fade-up">
              Front End Developer
            </h2>
            <ul
              className="my-2 d-flex flex-wrap text-decoration-none"
              style={{ listStyle: "none", margin: 0, padding: 0 }}
            >
              {language.map((item) => (
                <li
                  style={{
                    marginRight: "10px",
                    borderRadius: ".4rem",
                    padding: "10px",
                    cursor: "pointer",
                    background: "#000",
                    color: "#fff",
                  }}
                  key={item.id}
                  className="my-1"
                  data-aos="flip-left"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <Link
              to="https://github.com/jean-pierre14"
              target="_blank"
              className="btn btn-lg btn-primary"
            >
              Github Account
            </Link>
          </div>
          <div className="col-md-5 col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img
              src="/Portfolio.png"
              alt=""
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark py-5">
        <div className="container py-5">
          <div className="row py-5 d-flex justify-content-center align-items-center">
            <div className="cl-md-12 py-5">
              <h2 className="text-center text-white">Skills</h2>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <img
                src="/assets/img/brain-xray102221.jpg"
                alt="Brain"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <ul className={styles.list}>
                <Skills />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
