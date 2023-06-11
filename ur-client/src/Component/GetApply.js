import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import styles from "./style/GetApply.module.css";

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
    <div className={styles.container}>
        <h1 className={`${styles["resume-title"]} text-success`}>Getting Data</h1>
        {data.map((d) => {
          const { name, role, email } = d;

          const url = `${API}/upload/photo/${d._id}`;
          return (
            <div className={styles["resume-card"]} key={d._id}>
              <h4>Name: {name}</h4>
              <h5>email id: {email}</h5>
              <h6>Role: {role}</h6>
              <button className={styles["resume-button"]} onClick={() => window.open(url, "_blank")}>
              Resume
            </button>
            </div>
          );
        })}
      </div>
  );
};

export default GetData;
