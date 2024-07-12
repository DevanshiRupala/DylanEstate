import { Container, Form, FormGroup, Row, Col,Button } from "react-bootstrap";

function PriceDetails({next_4,next_5,formData,setFormData}) {

    const handlenext = () => {
        next_4({next:false,color_b:'#FCF8F4',color_l:'#122B49'});
        next_5({next:true,color_b:'#EDF2F8',color_l:'#d6d6d6'})
    }

    return (
        <>
         <Container style={{padding:'40px 0px 0px 40px', height:'368px'}}>
            <Form>
                    <FormGroup>
                    <Row>
                        <Col style={{marginRight:'10px'}}>
                          <Form.Label>Rent <span style={{color:'red'}}>*</span></Form.Label>
                          <Form.Control type="text" required onChange={(e) => setFormData({...formData,rent:e.target.value})} style={{width:'320px'}} placeholder="₹                                                  /Month"></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Security <span style={{color:'red'}}>*</span></Form.Label>
                          <Form.Control type="text" required onChange={(e) => setFormData({...formData,security:e.target.value})} style={{width:'320px'}} placeholder="₹                                                  /Month"></Form.Control>
                        </Col>
                        </Row>
                    </FormGroup>
            </Form>
         </Container>
         <Container style={{backgroundColor:'#122B49',display:'flex',height:'51px',width:'900px',marginLeft:'-10px',borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px'}}>
              <p style={{color:'white',fontSize:'12px',margin:'15px 575px 0px 30px'}}>Need help ? call 999999999</p>
              <Button style={{backgroundColor:'#092541',border:'none'}} onClick={handlenext}>NEXT</Button>
        </Container>
        </>
    )
}

export default PriceDetails;