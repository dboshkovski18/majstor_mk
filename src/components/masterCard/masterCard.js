import React from "react";
import {Card} from "react-bootstrap";
import "./masterCard.css";

const masterCard = (props) => {

    return(
        <Card className={"mt-2 shadow"} key={props.master.id}>
            <Card.Text><span className={"badge bg-success rating rounded-pill"}>{props.master.rating !== null ? props.master.rating+'.0' : '0.0'}</span></Card.Text>
            <Card.Img variant={"top"} src={props.master.gender === 'male' ? "https://www.shareicon.net/data/2016/05/24/770139_man_512x512.png" : "https://img.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14049.jpg"}/>
            <Card.Body>
                <Card.Title>{props.master.name + ' ' + props.master.surname}</Card.Title>
                <Card.Text><h6>{props.master.type}</h6></Card.Text>
                <Card.Text><span className={"badge bg-dark"}> {props.master.city.name}</span></Card.Text>
                <Card.Text><b>Телефонски број</b> <br/>{props.master.number}</Card.Text>
                <a href={"tel:" + props.master.number} className={"btn btn-warning call-mobile"}>Повикај!</a>
            </Card.Body>
        </Card>
    )
}

export default masterCard;