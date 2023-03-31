import React from "react";
import FormGroupExample from "./components/pages/FormGroupExample";
import {Homepage} from "./components/pages/Homepage";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/registration" element={<FormGroupExample/>}/>
        </Routes>
    )
}

export default App;
