import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './style/footer-style.css'
import Footercontact from './footercontacts';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class footer extends Component {

    render() {
        return (
            <div className='foot'>
                <Container style={{paddingLeft: '8%'}}>
                    <Row>
                        <Col>
                            <h5 >Company</h5>
                            <ul>
                                <li><a style={{ color: "gray", textDecoration: "none" }} href="/about">About Us</a></li>
                                <li><a style={{ color: "gray", textDecoration: "none" }} href="/buysell">Buy/Sell</a></li>
                                <li><a style={{ color: "gray", textDecoration: "none" }} href="/contact">Contact Us</a></li>

                            </ul>

                        </Col>
                        <Col>
                            <h5>Resources</h5>
                            <ul>
                                <li><a style={{ color: "gray", textDecoration: "none" }} href="/blog">Blog</a></li>

                            </ul>

                        </Col>

                        <div className='col-md-6 col-xs-6'>
                            <Footercontact />

                        </div>
                    </Row>


                </Container>
                    <div class="footer_copyright">
                        <ul style={{textDecoration: "none" }}>
                            <li><a href="/home" style={{textDecoration: "none", color: 'gray'}}>Privacy Policy |</a></li>
                            <li><a href="/home" style={{textDecoration: "none", color: 'gray'}}>Terms of Use |</a></li>
                            <li><a href="/home" style={{textDecoration: "none", color: 'gray'}}>Refund Policy |</a></li>
                            <li>© Urban Reach Technology Private Limited   </li>
                        </ul>
                    </div>


            </div>






        );
    }
}

export default footer;