import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import Navbar from './navbar'; 
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import Sofa from '../assets/sofa.png';
import Tiles from '../assets/tiles.png';
import Lift from '../assets/lift.png';
import Sport from '../assets/sport.png';

function Preview() {
    const location = useLocation();
    const [PropertyDetails, setPropertyDetails] = useState(null);

    useEffect(() => {const fetchData = async () => {
        const _id = location.state.id;
        console.log(_id)
        try {
            const res = await axios.get("http://localhost:8000/preview", {params:{_id}});
            setPropertyDetails(res.data.data);
            console.log(res)
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };
    fetchData();},[]);
    return (
        <>
            <Navbar />
           {PropertyDetails && <Container style={{ marginTop: '20px' }}>
                <Row>
                    <Col>
                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>←</a>
                        <h2 style={{ fontSize: '20px', marginTop: '10px' }}> {PropertyDetails.subCategory.map((s)=> <>{s}</>)} For {PropertyDetails.propertyType} in {PropertyDetails.address} ({PropertyDetails.buildUpArea} Sq. Ft.)</h2>
                        <p style={{ fontSize: '14px' }}></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div style={{ position: 'relative', height: '350px', backgroundColor: '#e0e0e0',width:'780px'}}>
                        <Carousel>
                        {PropertyDetails && PropertyDetails.images[0].map((photo,index) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={photo}
                                    alt="First slide"
                                    style={{ height: '350px' }}
                                />
                            </Carousel.Item>
                        ))}
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={4}>
                            <Container style={{ fontSize: '16px',backgroundColor: '#F6EFE6',marginTop:'-80px',height:'80px' }}><h6 style={{justifyContent:'center',fontSize:'17px',padding:'20px 0px 0px 20px'}}>&#x20B9; {PropertyDetails.rent} / Month <br />(Rent-Negotiable)</h6>
                            </Container>
                            
                            <Container style={{marginTop:'20px',backgroundColor:'#fdfaf7',height:'500px',boxShadow:'1px 4px 8px rgba(18, 43, 73, 0.2)'}}>
                            <p style={{ fontSize: '20px', fontWeight: 'bold',paddingTop:'20px' }}>Send an Inquiry for this property?</p>
                            <p>Contact Person : {PropertyDetails.username}</p>
                            <Form>
                                <Form.Group controlId="formContactNumber">
                                    <Form.Control type="text" placeholder="+91-9999999999" disabled />
                                </Form.Group>
                                <Form.Group controlId="formName" style={{ marginTop: '10px' }}>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formEmail" style={{ marginTop: '10px' }}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group controlId="formPhone" style={{ marginTop: '10px' }}>
                                    <Row>
                                        <Col md={3}>
                                            <Form.Control type="text" placeholder="+91" />
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control type="text" placeholder="999-999-9999" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="formMessage" style={{ marginTop: '10px' }}>
                                    <Form.Control as="textarea" rows={3} placeholder="I would like more information about Sector 5, shanti nagar, anubhav society" />
                                </Form.Group>
                                <Button variant="primary" type="submit" style={{ marginTop: '10px', width: '100%' }}>
                                    SEND INQUIRY
                                </Button>
                            </Form>
                            </Container>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Container style={{margin:'-70px 0px 0px -2px', boxShadow:'1px 4px 8px rgba(18, 43, 73, 0.2)',width:'800px',height:'250px'}}>
                    <h2 style={{margin:'0px 0px 0px 20px',paddingTop:'20px'}}>Property Overview</h2>
                     <Row style={{margin:'30px 0px 0px 10px'}}>
                     <Col>
                        {PropertyDetails.furnishing.map((f,index) => {
                            let fur = ''
                            if(f === 'FF')
                            {
                                fur = 'Fully-furnished'
                            }
                            else if(f === 'SF')
                            {
                                fur = 'Semi-furnished'
                            }
                            else {
                                fur = 'Unfurnished'
                            }
                            return (
                                <>
                                <Container style={{display:'flex'}}>
                                    <img src={Sofa} alt={fur} style={{width:'24px',height:'24px'}}/>
                                    <p style={{fontWeight:'bold',fontSize:'17px',margin:'0px 0px 0px 5px',color:'#122B49'}}>{fur}</p>
                                </Container>
                                <p style={{marginLeft:'43px'}}>Furnishing</p>
                                </>
                            );
                        })}
                        <p></p>
                        </Col>
                        <Col>
                        {PropertyDetails.tiles.map((f,index) => {
                            let fur = ''
                            if(f === 'Normal')
                            {
                                fur = 'Normal white tiles'
                            }
                            else if(f === 'Marble')
                            {
                                fur = 'Marble'
                            }
                            else {
                                fur = 'Vitrified'
                            }
                            return (
                                <>
                                <Container style={{display:'flex'}}>
                                    <img src={Tiles} alt={fur} style={{width:'24px',height:'24px'}} />
                                    <p style={{fontWeight:'bold',fontSize:'17px',margin:'0px 0px 0px 5px',color:'#122B49'}}>{fur}</p>
                                </Container>
                                <p style={{marginLeft:'43px'}}>Flooring</p>
                                </>
                            );
                        })}
                        <p></p>
                        </Col>
                     </Row>
                    </Container>
                    </Col>
                </Row>
                <Row style={{marginTop:'80px'}}>
                    <Col>
                    <Container style={{margin:'-70px 0px 0px -2px', boxShadow:'1px 4px 8px rgba(18, 43, 73, 0.2)',width:'800px',height:'250px'}}>
                    <h2 style={{margin:'0px 0px 0px 20px',paddingTop:'20px'}}>Amenities</h2>
                     <Row style={{margin:'30px 0px 0px 10px'}}>
                        {PropertyDetails.societyAmenities.map((f,index) => {
                            if(f === 'Lift'){
                            return (
                                <>
                                <Col>
                                <Container>
                                    <img src={Lift} style={{width:'24px',height:'24px',margin:'0px 0px 5px 0px'}}/>
                                    <p>Lift</p>
                                </Container>
                                </Col>
                                </>
                            );}
                            if(f === 'Sport'){
                                return (
                                <>
                                <Col>
                                <Container>
                                    <img src={Sport} style={{width:'24px',height:'24px',margin:'0px 0px 5px 0px'}}/>
                                    <p>Sport</p>
                                </Container>
                                <p style={{marginLeft:'57px'}}></p>
                                </Col>
                                </>
                        );}
                        })}
                        <p></p>
                        
                     </Row>
                    </Container>
                    </Col>
                </Row>
                </Container>
            }
            <Row style={{width:'1500px',backgroundColor:'#122B49'}}>
                <Container>

                </Container>
            </Row>
        </>
    );
}

export default Preview;
