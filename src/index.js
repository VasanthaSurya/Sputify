import React from "react";
import ReactDOM from 'react-dom';
import LeftNavigation from "./components/LeftNavigation";
import TopFloat from "./components/TopFloat";
import MainScroll from "./components/MainScroll";
import BottomFloat from "./components/BottomFloat";

const App = ()=>{
    return (
        <div className="container-fluid bg-dark overflow-hidden">
            <div className="d-flex flex-col">
                <div className="">
                    <LeftNavigation />
                </div>
                <div className="flex-row overflow-hidden">
                    <TopFloat />
                    <MainScroll />
                </div>
            </div>
            <div><BottomFloat /></div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)