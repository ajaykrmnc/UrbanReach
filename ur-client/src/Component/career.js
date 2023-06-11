import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { API } from "../config";
import './style/career-style.css'

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
    <div className="career-container">
      {jobs.map((obj) => (
        <div className="job-card" key={obj.id}>
          <h1 className="job-role">
            Role: <span className="text-success">{obj.role}</span>
          </h1>
          <h4 className="job-skill">Skill Required: {obj.skill}</h4>
          <p className="job-description">{obj.jd}</p>
          <button className="apply-button" onClick={handleclick}>
            Apply Now
          </button>
        </div>
      ))}
      {redirect && <Navigate to="/apply" />}
    </div>
  );
};

export default Career;
