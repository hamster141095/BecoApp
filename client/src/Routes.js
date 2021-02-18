import React, { useState, useRef, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import classNames from "classnames";

import Header from "./Components/Header/Header";
import MainContent from "./Components/Main/MainContent";
import Sidebar from "./Components/Sidebar/Sidebar";

const Routes = () => {
    const [showTitle, setShowTitle] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                setShowTitle(false);
            } else {
                setShowTitle(true);
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <div className="wrapper">
                <aside className="aside">
                    <Sidebar></Sidebar>
                </aside>
                <main className="main">
                    <div
                        className={classNames("main__top", {
                            main__top_transition: !showTitle,
                        })}
                    >
                        <Header showTitle={showTitle} />
                    </div>
                    <div className="main__content">
                        <Switch>
                            <Route path="/" component={MainContent} />
                        </Switch>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
