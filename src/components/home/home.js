import React, {useState} from "react";
import {Col, Container, FormLabel, Row, FormSelect, Button, Form, Accordion} from "react-bootstrap";
import TopMasters from "../topMasters/topMasters";
import Masters from "../masters/masters";
import "./home.css";
import FilterMasters from "../filterMasters/filterMasters";

const Home = function (props) {

    const [formData, updateFormData] = React.useState({
        reset: true
    })

    const resetPage = () => {
        updateFormData({
            reset: !formData.reset
        })
    }
    const showAll = () => {
        props.onShowAll();
    }


    return (
        <div>

            <Container fluid className="bg-light p-5">

                <FilterMasters master_types={props.master_types}
                               cities={props.cities}
                               onFilteredMasters={props.onFilteredMasters}
                               onShowAll={props.onShowAll}
                               onFetchByType={props.onFetchByType}
                               onFetchByCity={props.onFetchByCity}
                               onResetPage={resetPage}/>

                <Row className={"text-center mt-2"}>
                    <Col>
                        <a className={"text-muted text-decoration-none showAll"} onClick={showAll} href={"#masters"}>Погледни
                            ги сите</a>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={"shadow"}>
                <Row>
                    <Masters masters={props.masters}
                             reset={formData.reset}/>
                    <TopMasters topMasters={props.topMasters}/>
                </Row>
            </Container>
        </div>
    )
}

export default Home;