import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MasterCard from "../masterCard/masterCard";
import ReactPaginate from "react-paginate";
import "./topMasters.css";

class TopMasters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 1
        }
    }


    render() {

        const pageCount = Math.ceil(this.props.topMasters.length / this.state.size);
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;


        const masters = this.getTopMasters(offset, nextPageOffset);


        return (
            <Col lg={3} fluid className={"top-bg p-4"}>
                <Row className={"text-center"}>
                    <Col lg={12}><h3 className={"display-6"}>Топ мајстори</h3></Col>
                    <Col lg={12}>
                        <hr className={"w-75 m-auto"}/>
                    </Col>
                    <Row className={"m-auto"}>{

                        masters

                    }
                        <nav hidden={this.state.show}>
                            <ReactPaginate previousLabel={<svg xmlns="http://www.w3.org/2000/svg"  height="16"
                                                               fill="currentColor" className="bi bi-arrow-left w-100"
                                                               viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>}
                                           previousClassName={"page-link btn"}
                                           nextLabel={<svg xmlns="http://www.w3.org/2000/svg"  height="16"
                                                           fill="currentColor" className="bi bi-arrow-right w-100"
                                                           viewBox="0 0 16 16">
                                               <path fill-rule="evenodd"
                                                     d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                           </svg>}
                                           nextClassName={"page-link btn"}
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
                </Row>
            </Col>
        )
    }

    getTopMasters = (offset, nextPageOffset) => {
        return this.props.topMasters.map((master) => {
            return (
                <Col sm={12} md={5} lg={10} className={"mt-2 m-auto"}>
                    <MasterCard master={master}/>
                </Col>

            )
        })
            .filter((master, index) => {
                return index >= offset && index < nextPageOffset;
            });
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }


}

export default TopMasters;