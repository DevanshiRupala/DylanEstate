import { Container, Tabs, Tab, TabContainer, Row, Col,Form, Button } from 'react-bootstrap';
import Bell from '../assets/bell.png';
import { Navbar, Nav } from "react-bootstrap";
import Navbar1 from '../pages/navbar';
import React,{ useState } from 'react';
import './property.css';
import PropertyDetails from '../components/propertydetails';
import LocationDetails from '../components/locationdetails';
import Features from '../components/features';
import PriceDetails from '../components/pricedetails';
import Images from '../components/images';
import { useLocation } from 'react-router-dom';

function Property () {
  const [next1,setNext1] = useState({next:true,color_l :'#d6d6d6',color_b:'#EDF2F8'});
  const [next2,setNext2] = useState({next:false,color_l :'#d6d6d6',color_b:'#FCF8F4'});
  const [next3,setNext3] = useState({next:false,color_l :'#d6d6d6',color_b:'#FCF8F4'});
  const [next4,setNext4] = useState({next:false,color_l :'#d6d6d6',color_b:'#FCF8F4'});
  const [next5,setNext5] = useState({next:false,color_l :'#d6d6d6',color_b:'#FCF8F4'});
  const location = useLocation();
  const [formData,setFormData] = useState(location.state.formData)
  console.log(formData);

    return(
       <>
        <Navbar1/>
        <Container>
            <Container>
                <img src={Bell} style={{marginLeft:'1350px', marginTop:'13px'}}/>
            </Container>
             <Container style={{width:'900px',boxShadow: '1px 4px 8px rgba(18, 43, 73, 0.2)',height:'500px',borderRadius:'16px',marginTop:'15px',overFlowY:'auto'}}>
               <Row style={{height:'80px'}}>
                <Col style={{backgroundColor:next1.color_b,borderTopLeftRadius:'16px'}}>
                <Row>
                  <Col>
                 <Button style={{backgroundColor:next1.color_b,color:'black',border:'none',width:'140px',height:'60px',paddingTop:'15px'}}>PROPERTY <br/> DETAILS</Button>
                 </Col>
                 <div style={{height:'8px',backgroundColor:next1.color_l,marginTop:'20px'}}></div>
                 </Row>
                </Col>

                <Col style={{backgroundColor:next2.color_b}}>
                <Row>
                  <Col>
                 <Button style={{backgroundColor:next2.color_b,color:'black',border:'none',width:'140px',height:'60px',paddingTop:'15px'}}>LOCATION <br/> DETAILS</Button>
                 </Col>
                 <div style={{height:'8px',backgroundColor:next2.color_l,marginTop:'20px'}}></div>
                 </Row>
                </Col>

                <Col style={{backgroundColor:next3.color_b}}>
                <Row>
                  <Col>
                 <Button style={{backgroundColor:next3.color_b,color:'black',border:'none',width:'140px',height:'60px',paddingTop:'15px'}}>FEATURES & <br/> DETAILS</Button>
                 </Col>
                 <div style={{height:'8px',backgroundColor:next3.color_l,marginTop:'20px'}}></div>
                 </Row>
                </Col>

                <Col style={{backgroundColor:next4.color_b}}>
                <Row>
                  <Col>
                 <Button style={{backgroundColor:next4.color_b,color:'black',border:'none',width:'140px',height:'60px',paddingTop:'15px'}}>PRICE DETAILS</Button>
                 </Col>
                 <div style={{height:'8px',backgroundColor:next4.color_l,marginTop:'20px'}}></div>
                 </Row>
                </Col>

                <Col style={{borderTopRightRadius:'16px',backgroundColor:next5.color_b}}>
                <Row>
                  <Col>
                 <Button style={{backgroundColor:next5.color_b,color:'black',border:'none',width:'140px',height:'60px',paddingTop:'15px'}}>PROPERTY <br/> IMAGES</Button>
                 </Col>
                 <div style={{height:'8px',backgroundColor:next5.color_l,marginTop:'20px'}}></div>
                 </Row>
                </Col>
               </Row>
               <Row >
               </Row>
                {next1.next && formData && <PropertyDetails next_1={setNext1} next_2={setNext2} formData={formData} setFormData={setFormData}/>}
                {next2.next && formData && <LocationDetails next_2={setNext2} next_3={setNext3} formData={formData} setFormData={setFormData}/>}
                {next3.next && formData && <Features next_3={setNext3} next_4={setNext4} formData={formData} setFormData={setFormData}/>}
                {next4.next && formData && <PriceDetails next_4={setNext4} next_5={setNext5} formData={formData} setFormData={setFormData}/>}
                {next5.next && formData && <Images next_5={setNext5} formData={formData} setFormData={setFormData}/>}
             </Container>
            </Container>
       </>
    )
}

export default Property;