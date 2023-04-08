import "./Main.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);

  const GetAllPost = () => {
    // setDatas(["Loading"]);
    const Url = "https://jsonplaceholder.typicode.com/posts?limit=10";
    axios
      .get(Url)
      .then((response) => {
        const result = response;
        const { status, message, data } = result;

        if (status !== 200) {
          alert(message, status);
        } else {
          console.log(data);
          setData(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetAllPost();
  }, []);
  return (
    <div className="container main">
      {data.map(({ userId, id, title, body }) => {
        return (
          <div className="card card-body" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
