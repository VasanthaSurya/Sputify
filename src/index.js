import React from "react";
import ReactDOM from 'react-dom';
import LeftNavigation from "./components/LeftNavigation";
import TopFloat from "./components/TopFloat";
import MainScroll from "./components/MainScroll";
import BottomFloat from "./components/BottomFloat";
import "./components/ExternalStyle.css";

const App = ()=>{
    return (
        <div className="container-fluid dark p-0 overflow-hidden">
            <div className="d-flex flex-col myBody">
                <div className="leftnav dark-bg">
                    <LeftNavigation />
                </div>
                <div className="flex-row overflow-hidden w-100">
                    <TopFloat />
                    <MainScroll />
                </div>
            </div>
            <div className="foot"><BottomFloat /></div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)