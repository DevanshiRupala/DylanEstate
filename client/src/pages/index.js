import Navbar from './navbar'
import Container from "react-bootstrap/Container";
import Check from '../assets/check-mark.png';
import { Form, FormGroup, FormCheck, Button } from 'react-bootstrap'; 
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Index() {
    const [next1,setNext1] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [otp,setOtp] = useState('');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      what: '',
      country:'india',
      contact:'',
      propertyType:'',
      category:'',
      subCategory: [],
      buildUpArea:'',
      carpetArea:'',
      address:'',
      furnishing:[],
      tiles:[],
      societyAmenities:[],
      rent:'',
      security:'',
      images:[]
    });

    const handlePhoneChange = (e) => {
      const { value } = e.target;
      setPhoneNumber(value);
      if (value) setEmail(''); 
    };
  
    const handleEmailChange = (e) => {
      const { value } = e.target;
      setEmail(value);
      if (value) setPhoneNumber(''); 
    };

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value
      });
    };

    const handleclick = (e) => {
      e.preventDefault(); 
      if(phoneNumber){
        formData.contact = phoneNumber
      }
      else{
        formData.contact = email
      }
      const formDataObject = new FormData();
        Object.keys(formData).forEach(key => {
            formDataObject.append(key, formData[key]);
        });
      console.log(formData);

      try {
        const contact = formData.contact;
        setNext1(false); 
        const response = axios.get("http://localhost:8000/send-otp", { params: { contact }  });
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    }

    const handleOtp = async() => {
      const contact = formData.contact;
      const response = await axios.get("http://localhost:8000/verify-otp", { params: { contact , otp}  });
      console.log(response);
      navigate('/property',{state:{formData}});
    }
    
    return(
        <>
        <Navbar/>
        <div style={{ backgroundColor: '#112a46', minHeight: '100vh', paddingTop: '70px' }}>
        <Container style={{marginTop:'20px'}}>
            <Container>
                <h2 style={{color:'white'}}>Sell or Rent your Property For Free</h2> 
                <p style={{color:'white'}}>Whether you're ready to sell or looking for answers, we'll guide you with data and expertise specific to your <br/>needs.</p>
            </Container>
            <Container style={{display:'flex'}}>
            <Container style={{marginLeft:'70px',marginTop:'45px', color:'white',height:'250px',width:'550px'}}>
                <ul style={{fontSize:'20px'}}>Upload your property in 4 simple <br></br>steps</ul>
                <p style={{marginLeft:'30px'}}><img src={Check}></img>Add your properties <b>Basic Details</b></p>
                <p style={{marginTop:'-15px',marginLeft:'30px'}}><img src={Check}></img>Add Property <b>Location</b></p>
                <p style={{marginTop:'-15px',marginLeft:'30px'}}><img src={Check}></img>Add property <b>Features and amenities</b></p>
                <p style={{marginTop:'-15px',marginLeft:'30px'}}><img src={Check}></img>Add <b>Price Details</b></p>
                <p style={{marginTop:'-15px',marginLeft:'30px'}}><img src={Check}></img>Add your best <b>Property shots</b></p>
            </Container>
            <Container style={{marginLeft:'-220px',marginTop:'20px',backgroundColor:'white',borderRadius:'7px',width:'500px',height:'300px'}}>
              <Container style={{height:'40px', backgroundColor:'f5f5ee',marginLeft:'-12px',borderRadius:'7px',width:'500px'}}>
                <h6 style={{paddingTop:'15px',paddingLeft:'30px'}}>LETS GET YOU STARTED !</h6>
              </Container>
              { next1 && <>
              <Container style={{overflowY:'auto',width:'400px',height:'200px'}}>
              <Form style={{ marginTop: '20px'}} >
                <FormGroup controlId='formWhat'>
                  <Form.Label><span style={{ color: 'red' }}>*&nbsp;</span>I am :</Form.Label><br />
                  <Form.Check
                    style={{ marginTop: '4px' }}
                    inline
                    label="Owner"
                    type="radio"
                    id="owner"
                    name="what"
                    value="Owner"
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Check
                    style={{ marginTop: '4px' , marginLeft:'100px'}}
                    inline
                    label="Builder"
                    type="radio"
                    id="owner"
                    value="Builder"
                    name="what"
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup controlId="formName" style={{marginTop:'20px'}}>
                  <Form.Label>Your Name <span style={{ color: 'red' }}>*&nbsp;</span></Form.Label>
                  <Form.Control type="text" placeholder="Name" name='username' onChange={handleInputChange} required/>
                </FormGroup>
                <FormGroup controlId="formCountry" style={{ marginTop: '20px' }}>
                    <Form.Label>Country <span style={{ color: 'red' }}>*&nbsp;</span></Form.Label>
                    <Form.Select onChange={(e) => setFormData({...formData, country:e.target.value})} required name='country'>
                      <option  value="india">India</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup controlId="formCon" style={{marginTop:'20px'}}>
                  <Form.Label>Phone No <span style={{ color: 'red'}}>*&nbsp;</span></Form.Label>
                   <div style={{display:'flex'}}>
                   <Form.Select style={{width:'75px',marginRight:'10px'}} type="text" name='code' required>
                    <option value="India">+91</option>
                    </Form.Select>
                   <Form.Control name="contact" style={{width:'270px'}} type="number" value={phoneNumber} onChange={handlePhoneChange} placeholder="000-000-0000" max={9999999999} />
                  </div><br/>
                Or<br/><br/>
                  <Form.Label>Email<span style={{ color: 'red' }}>*&nbsp;</span></Form.Label>
                  <Form.Control type="email" name='contact' placeholder="Email" value={email} required onChange={handleEmailChange}/>
                </FormGroup><br/>
              </Form>
              </Container>
              <Container style={{display:'flex'}}>
              <ul style={{marginTop:'25px', fontSize:'12px',display:'flex',marginLeft:'-10px'}}><p style={{color:'gray'}}>Need help? </p><p>&nbsp;Call 9999999999</p></ul>
              <Button style={{width:'100px',height:'35px',marginLeft:'140px',marginTop:'15px',backgroundColor:'#112a46',border:'none'}} onClick={handleclick}>NEXT</Button>
            </Container> </> }
              {!next1 && <>
               <Container style={{height:'170px'}}>
                <FormGroup style={{marginTop:'20px',marginLeft:'19px'}}>
                  <Form.Label style={{marginBottom:'20px'}}>Enter OTP sent on {} <span style={{ color: 'red' }}>*&nbsp;</span><span style={{marginLeft:'220px'}}><Link>Change</Link></span></Form.Label>
                  <Form.Control type="email" onChange={(e) => setOtp(e.target.value)} placeholder="0  0  0  0"/>
                </FormGroup>
                <p style={{fontSize:'12px',marginTop:'2px',marginLeft:'380px'}}>Resend OTP</p>
               </Container>
               <Container style={{display:'flex'}}>
               <ul style={{marginTop:'25px', fontSize:'12px',display:'flex',marginLeft:'-10px'}}><p style={{color:'gray'}}>Need help? </p><p>&nbsp;Call 9999999999</p></ul>
               <Button style={{width:'100px',height:'35px',marginLeft:'140px',marginTop:'15px',backgroundColor:'#112a46',border:'none'}} onClick={handleOtp}>NEXT</Button>
             </Container></>
              }
            </Container>
            </Container>
        </Container>
        </div>
        </>
    )
}

export default Index;