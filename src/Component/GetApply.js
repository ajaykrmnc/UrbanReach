import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../config";

const GetData = () => {
  const [data, setData] = useState([]);

  const Getalldata = () => {
    return fetch(`${API}/upload`, {
      method: "GET",
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log(err);
      });
  };

  const init = () => {
    Getalldata().then((data) => {
      //   console.log(data);
      if (data.error) {
        console.log("error in front end");
      } else {
        setData(data);
        console.log(data);
      }
    });
  };
  useEffect(() => {
    init();
    console.log(data);
  }, []);
  return (
    <div>
      <h1 className="text-success">Getting Data</h1>
      {data.map((d) => {
        const { name, role, email } = d;

        const url = "//" + `localhost:5000/ur/upload/photo/${d._id}`;
        return (
          <div className="container border border-secondary rounded my-2">
            <h1>Name: {name}</h1>
            <h4>Email id: {email}</h4>
            <h6>Role: {role}</h6>
            {/* <img src={url} className="img-fluid" /> */}
            <Link
              to={url}
              target="_blank"
              className="btn btn-secondary my-2 d-block "
            >
              See Resume
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GetData;
