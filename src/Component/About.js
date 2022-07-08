/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import img1 from "./pic/fwt.jpg";
import img4 from "./pic/sanjeet.jpg";
import img5 from "./pic/bhusan.jpeg";
import img6 from "./pic/av.jpeg";
import ContactUs from "./Contactus";
import { Problem, Solution, Paragraph } from "./Object";
import Footer from "./Footer";
import './style/About-style.css'
import Media from 'react-media';
import EmbedsPage from './embed';



const About = () => {
  return (
    // <>
    <div>
      <div style={{ paddingTop: "50px" }}>
        <div>
          <h2
            className="text-center"
            style={{ fontWeight: "bold", paddingBottom: "6%" }}
          >
            We are pioneers in the tech-driven supply chain <br />
            space for fresh produce
          </h2>
        </div>
        <div>
          <img
            class="rounded"
            src={img1}
            alt="tech"
            style={{ width: "90%", maxWidth: "700px" }}
          />
        </div>

        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgb(240 251 244)",
            marginTop: "40px",
            paddingTop: "40px",
            paddingBottom: "30px",
          }}
        >
          <div className="container">
            <h2
              className="text-success "
              style={{
                fontWeight: "bold",
                textAlign: "left",
                paddingBottom: "20px",
              }}
            >
              Supply Chain and Tech
            </h2>
          </div>
          <Paragraph />
        </div>

        <div className="container-fluid">
          <div className="row">
            <div class=" col-sm d-flex justify-content-center">
              <div
                class="card py-4 px-4"
                style={{ width: "95%",maxWidth:'550px', marginTop: "40px" }}
              >
                <Problem />
              </div>
            </div>
            <div class="col-sm d-flex justify-content-center ">
              <div
                class="card py-4 px-4"
                style={{ width: "95%",maxWidth:'550px', marginTop: "40px" }}
              >
                <Solution />
              </div>
            </div>
          </div>
        </div>

        <div
          class=""
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            backgroundColor: "rgb(240 251 244)",
            paddingBottom: "40px",
            paddingTop: "40px",
          }}
        >
          <h2 style={{ marginBottom: "30px", fontWeight: "bold" }}>
            How Urban Reach Works
          </h2>
       <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <EmbedsPage styles={{width: "90%",height: '200px' }}/>}
              {matches.medium && <EmbedsPage styles={{width: "540px",height: '400px' }}/>}
              {matches.large && <EmbedsPage styles={{width: "700px",height: '400px' }}/>}
            </Fragment>
          )}
        </Media>
      </div>
        </div>
        

        <Footer />
      </div>
    </div>
  );
};

export default About;