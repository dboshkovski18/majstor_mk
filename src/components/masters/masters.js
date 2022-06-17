import React from "react";
import {Col, Container, FormControl, FormGroup, Row, Form, Button, ButtonGroup} from "react-bootstrap";
import MasterCard from "../masterCard/masterCard";
import ReactPaginate from "react-paginate";

class Masters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 4,
            reset: true,
            search: ''
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const search = this.state.search;

        if (search !== '') {
            this.props.onSearchMaster(search);
        }

        this.state.search = '';
    }

    handleChange = (e) => {
        this.state.search = e.target.value.trim();
    }


    render() {

        if (this.props.reset !== this.state.reset) {
            this.state.reset = this.props.reset;
            this.state.page = 0;
        }
        const pageCount = Math.ceil(this.props.masters.length / this.state.size);
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;

        const masters = this.getMastersPage(offset, nextPageOffset);

        return (
            <Col lg={9} fluid className={"text-center p-4"} id={"masters"}>
                <Row className={"m-auto"}>
                    <Col lg={12}><h3
                        className={"bg-success w-50 pb-2 display-6 m-auto shadow rounded-pill text-white "}>Резултати</h3>
                    </Col>


                </Row>

                <Row>

                    {
                        masters.length == 0 ?
                            <p className={"text-danger mt-5"}>Нема работници од оваа група!</p> : masters
                    }


                    <nav>
                        <ReactPaginate previousLabel={<svg xmlns="http://www.w3.org/2000/svg" height="16"
                                                           fill="currentColor" className="bi bi-arrow-left w-100"
                                                           viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>}
                                       previousClassName={"page-link btn w-25"}
                                       nextLabel={<svg xmlns="http://www.w3.org/2000/svg" height="16"
                                                       fill="currentColor" className="bi bi-arrow-right w-100"
                                                       viewBox="0 0 16 16">
                                           <path fill-rule="evenodd"
                                                 d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                       </svg>}
                                       nextClassName={"page-link btn w-25"}
                                       breakLabel={"..."}
                                       breakClassName={"break-me"}
                                       pageClassName={"page-item "}
                                       pageLinkClassName={"page-link"}
                                       pageCount={pageCount}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={this.handlePageClick}
                                       containerClassName={"justify-content-center mt-4 pagination page-item"}
                                       activeClassName={"active"}
                        />

                    </nav>
                </Row>


            </Col>
        )

    }

    getMastersPage = (offset, nextPageOffset) => {

        return this.props.masters.map((master) => {
                return (
                    <Col sm={12} md={6} lg={3} className={"mt-2"}>
                        <MasterCard master={master}/>
                    </Col>

                )
            }
        ).filter((master, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

    handlePageClick = (data) => {
        window.scroll(0, 466);
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }


}

export default Masters;