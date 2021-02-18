import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import GoogleFontLoader from "react-google-font-loader";

import Routes from "./Routes";
import ReduxStore from "./redux/index";

import "./styles/main.css";
import "./styles/index.scss";
ReactDOM.render(
    <React.StrictMode>
        <Provider store={ReduxStore()}>
            {/* <GoogleFontLoader
                fonts={[
                    { font: "Poppins", weights: [500] },
                    { font: "Roboto", weights: [400, 500, 700] },
                    { font: "Open Sans", weights: [400, 600] },
                ]}
            /> */}
            <Routes />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
