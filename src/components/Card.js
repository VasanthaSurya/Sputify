import React from "react";
import logoimg from "./kolly.png";
import play from "./play.png";

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bgcolor : 'dark-secondary',
            display : 'd-none',
            transform :'tbefore'
        }
        this.before = this.before.bind(this);
        this.after = this.after.bind(this);
    }
    before() {
        this.setState({
            bgcolor : 'dark-secondary',
            display : 'd-none',
            transform :'tbefore'
        })
    }
    after() {
        this.setState({
            bgcolor : 'bg-dark',
            display : '',
            transform :'tafter'
        })
    }
    render() {
        return (
            <div 
            className={"card d-flex col " + this.state.bgcolor +" "+ this.state.transform}
            onMouseEnter={this.after}
            onMouseLeave={this.before}
            style={{width:"12rem",height:"16rem"}}>
                <img className="card-img-top p-2 w-100 h-60 position-relative" src={logoimg} alt="Card" />
                <a className="position-absolute top-50 end-0" href="">
                    <img src={play} 
                        alt="play_button" 
                        width="45px" 
                        height="45px"
                        id="hiddenplaybutton"
                        className={"rounded-circle " + this.state.display}
                        />
                </a>
                <div className="card-body overflow-hidden">
                    <h6 className="font-weight-bold card-title text-white user-select-none">{this.props.cardTitle}</h6>
                    <p className="card-text text-white user-select-none small-text">Some quick example text to build on the card.</p>
                </div>
            </div>
        )
    }
}

export default Card;