import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { API } from "../config";

const Apply = () => {
  const GetAllJobs = () => {
    return fetch(`${API}/carrier`, {
      method: "GET",
    })
      .then((data) => data.json())
      .catch((err) => {
        console.log(err);
      });
  };
  const [values, setValues] = useState({
    role: "",
    jobs: [],
    name: "",
    error: false,
    success: false,
    email: "",
    formData: "",
    photo: "",
  });
  const { role, name, error, email, success, formData, photo, jobs } = values;
  const init = () => {
    GetAllJobs().then((data) => {
      // console("hii");
      if (data.error) {
        console.log("errror");
      } else {
        console.log(data);
        console.log("creating new formdata");
        setValues({ ...values, jobs: data, formData: new FormData() });
      }
    });
  };
  useEffect(() => {
    init();
    console.log("mounting jobs");
  }, []);
  const clickClear = (event) => {
    event.preventDefault();
    setValues({
      name: "",
      error: false,
      success: false,
      email: "",
      photo: "",
    });
  };
  const createcarrier = (data) => {
    console.log(data);
    console.log("start fetching");
    return fetch(`${API}/upload`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    // console.log(formData);
    setValues({
      ...values,
      error: false,
      success: false,
      [name]: value,
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    createcarrier(formData).then((data) => {
      // console.log(data);
      if (data.error) {
        setValues({ ...values, error: true, success: false });
        console.log("error from back");
      } else {
        setValues({ ...values, success: true, error: false });
        console.log("success");
      }
    });
  };
  const signUpForm = () => (
    <form className="mt-4">
      <div className="form-group">
        <label className="">Name</label>
        <input
          placeholder="Please write your name"
          onChange={handleChange("name")}
          type="name"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="mt-2">Email</label>
        <input
          placeholder="please write your email"
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group mt-2">
        <label className="">Job Role</label>
        <select onChange={handleChange("role")} className="form-control">
          <option>Please select</option>
          {jobs && jobs.map((c, i) => <option key={i}>{c.role}</option>)}
        </select>
      </div>

      <div className="form-group mt-2">
        <h4>Upload Resume</h4>
        <label className="btn btn-secondary">
          <input onChange={handleChange("photo")} type="file" name="photo" />
        </label>
      </div>
      <button onClick={clickSubmit} className="btn btn-primary mt-2">
        Apply Now
      </button>
      <button onClick={clickClear} className="btn btn-primary mt-2 mx-2">
        Clear
      </button>
    </form>
  );
  const showError = () => {
    if (error) {
      return <h3 className="bg-danger rounded">There is some ERROR!</h3>;
    }
  };
  const showSuccess = () => {
    if (success) {
      return (
        <h5 className="bg-success rounded">
          Your data has been sent,we will contact you soon.
          <br />
          Thank you!
        </h5>
      );
    }
  };
  useEffect(() => {
    init();
    console.log("mounting jobs");
  }, []);
  return (
    <div className="container">
      <h1 className="text-success">Apply Now</h1>
      {showError()}
      {showSuccess()}
      {signUpForm()}
    </div>
  );
};

export default Apply;
