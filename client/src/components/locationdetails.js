import React, { useState } from 'react';
import { Container, Form, FormGroup, Button, Row } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationDetails({ next_2, next_3, formData, setFormData }) {
    
    const handlenext = () => {
        next_2({ next: false, color_b: '#FCF8F4', color_l: '#122B49' });
        next_3({ next: true, color_b: '#EDF2F8', color_l: '#d6d6d6' });
    };

    const LocationMarker = () => {
        const [position, setPosition] = useState(null);

        const map = useMapEvents({
            click(e) {
                setPosition(e.latlng);
                setFormData({ ...formData, latitude: e.latlng.lat, longitude: e.latlng.lng });
            }
        });

        return position === null ? null : (
            <Marker position={position}>
            </Marker>
        );
    };

    return (
        <>
            <Container style={{ margin: '40px 0px 0px 40px', width: '750px', height: '340px' }}>
                <Row>
                    <Form>
                        <FormGroup>
                            <Form.Label>
                                <span style={{ color: 'red' }}>*</span> Property Address :
                            </Form.Label>
                            <Form.Control type="text" onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder='address' />
                        </FormGroup>
                    </Form>
                </Row>
            <br/>
                <Row>
                    <MapContainer style={{ height: "200px", width: "100%" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <LocationMarker />
                    </MapContainer>
                </Row>
            </Container>
            <Container style={{ backgroundColor: '#122B49', display: 'flex', height: '51px', width: '900px', marginLeft: '-10px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
                <p style={{ color: 'white', fontSize: '12px', margin: '15px 575px 0px 30px' }}>Need help ? call 999999999</p>
                <Button style={{ backgroundColor: '#122B49', border: 'none' }} onClick={handlenext}>NEXT</Button>
            </Container>
        </>
    );
}

export default LocationDetails;