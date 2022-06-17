import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect, BrowserRouter} from "react-router-dom";
import Header from "../header/header";
import Home from "../home/home";
import Price from "../price/price";
import Footer from "../footer/footer";
import Service from "../../repository/MajstorRepository";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masters: [],
            cities: [],
            master_types: [],
            topMasters: []
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Router>
                    <Route path={"/"} exact render={() => <Home masters={this.state.masters}
                                                                master_types={this.state.master_types}
                                                                cities={this.state.cities}
                                                                topMasters={this.state.topMasters}
                                                                onFilteredMasters={this.loadFilteredMasters}
                                                                onShowAll={this.loadAllMasters}
                                                                onFetchByType={this.loadMastersByType}
                                                                onFetchByCity={this.loadMastersByCity}
                    />}/>
                    <Route path={"/home"} exact render={() => <Home masters={this.state.masters}
                                                                    master_types={this.state.master_types}
                                                                    cities={this.state.cities}
                                                                    topMasters={this.state.topMasters}
                                                                    onFilteredMasters={this.loadFilteredMasters}
                                                                    onShowAll={this.loadAllMasters}
                                                                    onFetchByType={this.loadMastersByType}
                                                                    onFetchByCity={this.loadMastersByCity}
                    />}/>
                    <Route path={"/price"} exact render={() => <Price master_types={this.state.master_types}
                                                                      cities={this.state.cities}
                                                                      onAddMaster={this.addMaster}/>}
                    />

                </Router>
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        this.loadAllTypes();
        this.loadAllCities();
        this.loadTopMasters();
        this.loadAllMasters();
    }


    loadAllMasters = () => {
        return Service.fetchAllMasters()
            .then((data) => {
                this.setState({
                    masters: data.data
                })

            })
    }

    loadFilteredMasters = (type, cityId) => {
        return Service.fetchFilteredMasters(type, cityId)
            .then((data) => {
                this.setState({
                    masters: data.data
                })
            })
    }

    loadMastersByType = (type) => {
        return Service.fetchMastersByType(type)
            .then((data) => {
                this.setState({
                    masters: data.data
                })
            })
    }

    loadMastersByCity = (cityId) => {
        return Service.fetchMastersByCity(cityId)
            .then((data) => {
                this.setState({
                    masters: data.data
                })
            })
    }

    loadAllTypes = () => {
        return Service.fetchMasterTypes()
            .then((data) => {
                this.setState({
                    master_types: data.data
                })
            })
    }

    loadAllCities = () => {
        return Service.fetchAllCities()
            .then((data) => {
                this.setState({
                    cities: data.data
                })
            })
    }


    loadTopMasters = () => {
        return Service.fetchTopMasters()
            .then((data) => {
                this.setState({
                    topMasters: data.data
                })
            })
    }

    addMaster = (name, surname, number, cityId, type, gender, embg) => {
        return Service.addMaster(name,surname,number,cityId,type,gender,embg)
            .then(() => {
                this.loadAllMasters();
            })
    }

    // searchMaster = (search) => {
    //     return Service.searchMaster(search)
    //         .then((data)=>{
    //             this.setState({
    //                 masters : data.data
    //             })
    //         })
    // }

}

export default App;
