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
import { Link } from "react-router-dom";

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
            <img src="/Portfolio.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
