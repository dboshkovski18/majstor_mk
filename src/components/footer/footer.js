import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import "./footer.css";

const footer = () => {
    return(
        <footer>
            <Container fluid className={"text-center"}>
                <Row>
                    <Col lg={12}>
                        <h6 className={"text-muted m-2"}>Мајстор.mk</h6>
                        <a href={"/price"} className={"text-muted join fst-italic text-decoration-none p-3"}>Пријави се тука.</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer;