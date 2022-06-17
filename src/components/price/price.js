import React from "react";
import {Button, Col, Container, FormControl, Form, FormSelect, InputGroup, Row} from "react-bootstrap";
import "./price.css";
import {useHistory} from "react-router-dom";

const Price = (props) => {

    const [validated, setValidated] = React.useState(false);


    const history = useHistory();

    const [formData, updateFormData] = React.useState({
        name: '',
        surname: '',
        number: '',
        embg: '',
        type: '',
        cityId: 0,
        gender: '',
        packet: ''
    })

    const handleChange = (e) => {

        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })


    }

    const onFormSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

        const name = formData.name
        const surname = formData.surname
        const number = '0'+formData.number
        const embg = formData.embg
        const type = formData.type
        const cityId = formData.cityId
        const gender = formData.gender
        const packet = formData.packet

        props.onAddMaster(name, surname, number, cityId, type, gender, embg);

        history.push("/home")
    }

    return (
        <Container fluid>
            <Row className={"justify-content-center"}>
                <Col lg={5} md={12} sm={12} className={"text-center"}>
                    <div className={"standard-packet-card"}>
                        <h1 className={"display-6"}>STANDARD пакет</h1>
                        <h2>1 месец</h2>
                        <span> 299 денари</span>
                    </div>

                    <div className={"silver-packet-card"}>
                        <h1 className={"display-6"}>SILVER пакет</h1>
                        <h2>6 месеци</h2>
                        <span> 999 денари</span>
                    </div>

                    <div className={"gold-packet-card"}>
                        <h1 className={"display-6"}>GOLD пакет</h1>
                        <h2>1 година</h2>
                        <span> 1999 денари</span>
                    </div>
                </Col>
                <Col lg={5} md={12} sm={12} className={"text-center p-3"}>
                    <h3 className={"display-5"}>Сакаш да започнеш со работа?</h3>
                    <h5 className={"badge bg-secondary"}>Внеси ги потребните информации и добивај повици од клиенти</h5>
                    <Form noValidate validated={validated} onSubmit={onFormSubmit}>
                        <Row>
                            <Col lg={6}>
                                <InputGroup className={"mt-3"}>
                                    <FormControl placeholder={"Име"} name={"name"} type={"text"} required
                                                 onChange={handleChange}></FormControl>
                                    <FormControl.Feedback type={"invalid"}>Ве молиме внесете Име!</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                            <Col lg={6}>
                                <InputGroup className={"mt-3"}>
                                    <FormControl placeholder={"Презиме"} name={"surname"} required type={"text"}
                                                 onChange={handleChange}></FormControl>
                                    <FormControl.Feedback type={"invalid"}>Ве молиме внесете презиме!</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <InputGroup className={"mt-3"}>
                                    <InputGroup.Text id={"prefix"}>+389</InputGroup.Text>
                                    <FormControl placeholder={"Телефонски број"} name={"number"} type={"number"}
                                                 required
                                                 aria-describedby={"prefix"} onChange={handleChange}/>
                                    <FormControl.Feedback type={"invalid"}>Ве молиме внесете телефонски број!</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                            <Col lg={6}>
                                <InputGroup className={"mt-3"}>
                                    <FormControl placeholder={"Матичен број"} name={"embg"} type={"number"} required
                                                 onChange={handleChange}></FormControl>
                                    <FormControl.Feedback type={"invalid"}>Ве молиме внесете матичен број!</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                        </Row>


                        <FormSelect className="text-center mt-3" aria-label="Choose profession" name={"type"} required
                                    onChange={handleChange}>
                            <option value={''}>Одбери професија</option>
                            {
                                props.master_types.map((type) => {
                                    return (<option value={type}>{type}</option>)
                                })
                            }

                        </FormSelect>
                        <FormSelect className="text-center mt-3" aria-label="Choose city" name={"cityId"} required
                                    onChange={handleChange}>
                            <option value={''}>Одбери град</option>
                            {
                                props.cities.map((city) => {
                                    return (<option value={city.id}>{city.name}</option>)
                                })
                            }
                        </FormSelect>
                        <FormSelect className="text-center mt-3" aria-label="Choose packet" name={"packet"} required
                                    onChange={handleChange}>
                            <option value={''}>Одбери пакет</option>
                            <option value="standard">STANDARD</option>
                            <option value="silver">SILVER</option>
                            <option value="gold">GOLD</option>
                        </FormSelect>
                        <FormSelect className="text-center mt-3" aria-label="Choose gender" name={"gender"} required
                                    onChange={handleChange}>
                            <option value={''}>Одбери пол</option>
                            <option value="male">Машки</option>
                            <option value="female">Женски</option>
                        </FormSelect>
                        <Button type={"submit"} className={"btn-warning mt-3"}>Започни</Button>


                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Price;