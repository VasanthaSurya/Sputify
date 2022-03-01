import React from "react";

const ChangeCardBg = (props) =>{
    const conMouse = {backgroundColor : '#4d4d4d'};
    const sinMouse = {backgroundColor : "#0d0d0d"};

    const bg = document.getElementById('card-background');

    if (props.MouseOver){
        bg.style = conMouse;
    }else{
        bg.style = sinMouse;
    }
}

export default ChangeCardBg;