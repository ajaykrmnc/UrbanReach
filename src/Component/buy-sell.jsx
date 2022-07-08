import React, { Component } from "react";
import "./style/buy-sell.css";
import farmer from './pic/farmer.jpeg'
import farmer2 from './pic/farmer2.jpeg'
class Buysell extends Component {
  state = {};

  render() {
    return (

      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-8" style={{ marginTop: '10%'}}>
            <h2 class="h2x">Benefit from <br /> India’s fastest supply Chain <br /> for Fresh Produce</h2>
            <p style={{ textAlign: "center" }}>
              Urban Reach sources directly from farmers and moves <br /> fresh produce to
              businesses every day, <br /> in just 12 hours using analytics and
              technology.
            </p>
          </div>

          <div class="col-xl-4 rightbox">
            <div class="row">
              <div class="pic1" >
                <div class="getintouch1">
                  <p>Become a Urban Reach customer</p>
                  <h5>Get farm-fresh vegetables and fruits delivered to your doorstep.</h5>
                  <div class="centered">
                    <button class="btn btn-primary  btn-success btn-lg download-button">
                    <a style={{color:"white",textDecoration:"none"}} href="/contact">Get in touch</a></button>
                  </div>
                </div>


                <img src={farmer} alt="farmer" />





              </div>

              <div class="pic2  ">
                <div class="getintouch2">
                  <p>Become a Urban Reach customer</p>
                  <h5>Get farm-fresh vegetables and fruits delivered to your doorstep.</h5>
                  <div class="centered">
                    <button class="btn btn-primary  btn-warning btn-lg download-button">
                     <a style={{color:"white",textDecoration:"none"}} href="/contact">Get in touch</a> </button>
                  </div>
                </div>
                <img src={farmer2} alt="farmer" />


              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Buysell;
