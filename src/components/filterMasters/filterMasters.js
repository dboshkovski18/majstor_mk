import React from "react";
import {Button, Col, Form, FormLabel, FormSelect, Row} from "react-bootstrap";

const FilterMasters= (props) => {
    const [formData, updateFormData] = React.useState({
        type: '',
        cityId: '',
        errorMessage : true
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const type = formData.type === 0 ? '' : formData.type;
        const cityId = formData.cityId === 0 ? '' : formData.cityId;

        console.log(type);
        console.log(cityId);

        if (type === '' && cityId === '') {
            formData.errorMessage = true;
            return;
        }

        if (type === '' && cityId !== '') {
            props.onFetchByCity(cityId);
            return;
        }

        if (cityId === '' && type !== '') {
            props.onFetchByType(type);
            return;
        }
        if (type !== '' && cityId !== '') {
            props.onFilteredMasters(type, cityId);
            return;
        }
    }

    const scrollToMasters = () => {
        window.scroll(0,466);
        props.onResetPage();
    }

    return(
        <Form onSubmit={onFormSubmit}>
            <Row className="text-center">
                <Col lg={6} md={12} className={"m-auto"}>
                    <FormLabel className="mt-3"><h5>Професија на работник</h5></FormLabel>
                    <FormSelect className="text-center shadow" aria-label="Choose profession" name={"type"}
                                onChange={handleChange}>
                        <option value={''} >Одбери </option>
                        {
                            props.master_types.map((type) => {
                                return (
                                    <option value={type}>{type}</option>
                                )
                            })
                        }

                    </FormSelect>


                </Col>
                <Col lg={12}><span className={"text-danger p-3"} hidden={formData.type !== '' ? true : false}>Задолжително одбери професија!</span> </Col>
            </Row>
            <Row className="text-center">
                <Col lg={6} md={12} className={"m-auto"}>
                    <FormLabel className="mt-5"><h5>Град</h5></FormLabel>
                    <FormSelect className="text-center shadow" aria-label="Choose city" name={"cityId"}
                                onChange={handleChange}>
                        <option value={''}>Сите</option>
                        {
                            props.cities.map((city) => {
                                return (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                )
                            })
                        }
                    </FormSelect>
                </Col>
            </Row>
            <Row className="text-center">
                <Col lg={6} md={12} className={"m-auto"}>
                    <Button type={"submit"}
                            className={"btn-warning mt-4 shadow"}
                            id={"search"}
                            onClick={scrollToMasters}
                            disabled={formData.type !== '' ? false : true}
                    >Пребарај</Button><br/>

                </Col>

            </Row>
        </Form>
    )
}

export default FilterMasters;