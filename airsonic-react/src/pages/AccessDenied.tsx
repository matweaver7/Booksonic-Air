import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";


const AccessDenied: React.FC<{}> = () => {
    
    return (
    <Container>
        <Row>
            <Col><h1>AccessDenied</h1></Col>
        </Row>
    </Container>
    );
};

export default AccessDenied;