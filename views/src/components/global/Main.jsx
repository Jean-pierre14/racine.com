import "./Main.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [datas, setDatas] = useState([]);

  const GetAllPost = () => {
    const Url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(Url)
      .then((response) => {
        const result = response;
        const { status, message, data } = result;

        if (status !== 200) {
          alert(message, status);
        } else {
          console.log(data);
          setDatas(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetAllPost();
  }, []);
  return (
    <div className="container main">
      {datas.map(({ userId, id, title, body }) => {
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
