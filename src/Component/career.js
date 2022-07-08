import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { API } from "../config";

const GetAllJobs = () => {
  console.log("hii");

  return fetch(`${API}/carrier`, {
    method: "GET",
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
};
const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const init = () => {
    GetAllJobs().then((data) => {
      // console("hii");
      if (data.error) {
        console.log("errror");
      } else {
        console.log(data);
        setJobs(data);
      }
    });
  };
  useEffect(() => {
    init();
    console.log("mounting jobs");
  }, []);
  const handleclick = () => {
    setRedirect(true);
  };
  return (
    <div className="container">
      {jobs.map((obj) => (
        <div className="border border-dark rounded my-2 ">
          {/* <h1 className="text-success">Role: {obj.role}</h1> */}
          <h1 className="">
            Role: <span className="text-success">{obj.role}</span>
          </h1>
          <h4 className="">Skill Required: {obj.skill}</h4>
          <p>
            <span className="badge bg-secondary">Job description:</span>{" "}
            {obj.jd}
          </p>
          <button className="btn btn-primary mb-2" onClick={handleclick}>
            Apply Now
          </button>
        </div>
      ))}
      {redirect && <Navigate to="/apply" />}
    </div>
  );
};

export default Career;
