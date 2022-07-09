import Header from "components/header";
import React, {useState} from "react";
import ROUTES from "constants/routes";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

// TODO 
// ADD i18n
// Add CSRF

const Login: React.FC<{}> = () => {
    let modelInsecure = false;
    const csrf="I'm going to need this too";

    const LoginWarningMessage = () => {
        return (
            <div className="loginmessagebottom">\
            {/* TODO: Need to make this real and to add i18n */}
                <p className="warning">Booksonic is not secured. Please log in with username and passphrase "admin". Then change the passphrase immediately.</p>
            </div>
        )
    }

    const generateForm = () => {
        return (
            <Form method="POST" action={ROUTES.login}>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupEmail">
                    <Form.Control required id="j_username" name="j_username" type="email" placeholder="Username" />
                </Form.Group>
                </Row>
                <Row  className="mb-3">
                    <Form.Group as={Col} controlId="formGroupPassword">
                        <Form.Control type="password" id="j_password" name="j_password" required placeholder="Password" />
                    </Form.Group>
                </Row>
                <Row  className="mb-3">
                    <Form.Group className="mb-3 col-sm" >
                        <Form.Check type="checkbox" id="remember" name="remember-me" label="Remember Me" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm" id="link">
                        <Link to={ROUTES.recover}>Forgotten Your passphrase?</Link>
                    </Form.Group>
                </Row>
                <Row  className="mb-3">
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>
                <input type="hidden" name="_csrf" value=""/>
            </Form>
        );
    }


    return (
        <>
        <section id="water" className="mb-3">
            <Header />
            <div className="overlay pt-5">
                <Container>
                    <Row>
                        <Col className="col-5">
                            <div id="loginBox" className="p-3 ml-3">
                                <h1 className="text-center">Sign in to start your session</h1>
                                {modelInsecure ? <LoginWarningMessage /> : ''}
                                {generateForm()}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        <section id="boxes">
            <Container>
                <Row>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>
                            Fully Open-Source.<br/>You can find the code on <a href="https://github.com/popeen?tab=repositories&q=booksonic" target="_blank">GitHub</a>
                        </p>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faCloud} />
                        <p>
                            Stream your audiobooks to any pc or android phone. Most of the functionality is also available on other platforms that have apps for subsonic.
                        </p>
                    </Col>
                    <Col className="text-center">
                        <a href="https://play.google.com/store/apps/details?id=github.popeen.dsub"><FontAwesomeIcon icon={faAndroid} /></a>
                        <p>
                            Get the Android app on <a href="https://play.google.com/store/apps/details?id=github.popeen.dsub">Google Play</a><br/>or build it from <a href="https://github.com/popeen/Popeens-DSub">source</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Login;