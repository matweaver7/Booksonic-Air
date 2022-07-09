import { Container, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import './header.scss';

const Header: React.FC<{}> = () => {

    return (
        <header>
            <Container>
                <Row>
                    <h1>Booksonic</h1>
                </Row>
            </Container>
        </header>
    );
}

export default Header;