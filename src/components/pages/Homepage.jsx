import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import FormGroupExample from './FormGroupExample.jsx';

const Homepage = () => {
    return (
        <div className={"header"}>
            <h1>Привет, с вами пепероне)</h1>
            <Link to="/registration">ДАМОООООЙ</Link>
        </div>
    )
}
export {Homepage};