import React from 'react'
import Footer from './Footer'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import './style/Home.css';
import map3 from "./pic/Map3.png";
import retailer from "./pic/retailer.png";
import farmer from "./pic/farmer.png";
import customer from "./pic/customer.png";
import front from "./pic/front.png";


const Home = () => {


  return (
    <div clasName="divcon" >
      <Container style={{marginTop: "2%"}}>
        <Row>
          <Col className='top' style={{textAlign: 'left'}}><h2 >Revolutionizing the Fresh <br /> Produce Supply Chain<br></br></h2>

            <h6>Driven by cutting edge technology, <br></br>we source fresh produce from farmers and sell to businesses, across India <br></br></h6>
            <button type="button" class=" ajay btn btn-success btn-lg my-4 p-2">Learn More</button>
          </Col>
          <Col sm className='front'><img src={front} alt="logo" /></Col>

        </Row>
      </Container>


      <div className='container mt-5'>
      <div className='row About'>
        <div className='col-xl-6 pb-4' style={{textAlign: "left"}}>
          <h1 style={{fontWeight: 'bold'}}>About Us</h1>
        <h6 style={{color: 'gray' }}>Urban Reach is India's largest Fresh Produce Supply Chain Company. We are pioneers in solving one of the toughest supply chain problems of the world by leveraging innovative technology. We source fresh produce from farmers and deliver them to businesses within 12 hours.
        </h6>
              <br></br><button type="button" class="btn btn-success">Know More</button>

          </div>
          <div className='col-xl-6' style={{marginTop: '40px'}}>
          <img src={map3} alt="logo" width="100%" />
          
          </div>

      </div>
      </div>



      <div class="revolution">
        <div ></div>
        <h3>Join Us to bring revolution <span>in </span>Agriculture with Urban Reach</h3>
        <br></br>
        <button type='button' class="btn btn-success" href="/careers">
        Join the revolution</button>
      </div>






      <div class="farmersay container">
        <h1 >Creating New Opportunities For Everyone</h1>
        <p style={{ marginBottom: '20px' }}>We are the first platform enabling increased benefits for farmers, retailers, and consumers.</p>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className='card' style={{ width: "18rem" ,textAlign: "left",marginTop: "30px"}}>
              <card-body style={{padding: '10px'}} >
                <img src={retailer} alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>Farmer</h5>
                <ul>
                  <li>20% more revenue</li>
                  <li>One-stop-sale</li>
                  <li>Payment in 24 hours</li>
                  <li>Transparent weighing</li>
                 </ul>

              </card-body>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className='card' style={{ width: "18rem",marginTop: "30px"}}>
              <card-body style={{padding: '10px',textAlign: "left"}} >
                <img src={farmer} alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>Retailer</h5>
                <ul>
                  <li>Competitive pricing</li>
                  <li>Doorstep delivery</li>
                  <li>quality graded produce</li>
                  <li>Convenient time saving</li>
                </ul>
              </card-body>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className='card' style={{ width: "18rem",marginTop: "30px" }}>
              <card-body style={{padding: '10px', textAlign: "left"}} >
                <img src={customer} alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>customer</h5>
                <ul style={{paddingLeft: "20px"}}>
                  <li>20% more revenue</li>
                  <li>One-stop-sale</li>
                  <li>Payment in 24 hours</li>
                  <li>Transparent weighing</li>
                </ul>
                
              </card-body>
            </div>
          </div>
        </div>

      </div>




      {/* <div className='life'>
        <Container fluid >
          <h2 style={{fontWeight: 'bold'}} >
            Life at Urban Reach
          </h2>
          <p>Be a part of an organisation of brilliant thinkers who work towards something new, every day.</p>
          <Row >
            <Col class="pic1 col-xl-6">
              <img src="img3.jpg" alt="img3" width="80%" />
              <div>
                <h1> Meet Our People</h1>
              </div>
            </Col>
            <Col class="pic2 col-xl-6">
              <img src="img4.jpg" alt="img4" width="80%" />
              <div>
                <h1> Meet Our People</h1>
              </div></Col>
          </Row>

        </Container>
      </div> */}




     <Container>
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h2 style={{ fontWeight: 'bold' ,paddingBottom: '10px'}}>What are People <br /> Saying about Urban Reach</h2>
      </div>
      </Container>


      {/* <!-- Testimonials --> */}
      <div className='testimonials'>
        <Carousel interval={4000}  indicators={false} controls={false}>
          <Carousel.Item>
            <h5>— बहुत अच्छी सेवा। इससे पहले हमें अपने घर से बहुत दूर बीज उर्वरक उपकरण खरीदने के लिए अलग-अलग जगहों की यात्रा करनी पड़ती थी। लेकिन अब हमें ये सब हमारे पास के अर्बन रीच सेंटर में मिलता है। बहुत अच्छा लग रहा है।</h5>
            <em>मनोज / कसाप गांव के किसान</em>
          </Carousel.Item>
          <Carousel.Item>
            <h5>— Really great service, a start up with lots of enthusiasm. I will recommend to everyone</h5>
            <em>Manvendra Singh / Customer</em>
          </Carousel.Item>
          <Carousel.Item>
            <h5>— Feel so proud of these creative minds. Thank you for making our chores more easy. Loved the quality of groceries</h5>
            <em>Isha Awasthi / Customer</em>
          </Carousel.Item>
        </Carousel>
      </div>

  
      <Container style={{ marginBottom: '100px', marginTop: '60px', textAlign: 'center' }}>
        <Row style={{paddingTop: '30px'}}>
          <Col sm className=' d-flex justify-content-center' >
            <div  className='bottom' style={{width: '90%'}}>
            <div class=" mx-4">
            <h3>Trust Us With Your Harvest</h3>
            <p >Get fair prices for your produce from Urban Reach</p>
            </div>
            </div>
        
          </Col>
          <Col sm className=' d-flex justify-content-center'>
            <div className='bottom' style={{width: '95%'}}>
              <div class=" mx-2">
            <h3>Direct From Farms to Your Business</h3>
            <p >Get fair prices for your produce from Urban Reach</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}
export default Home