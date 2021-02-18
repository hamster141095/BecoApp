import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Card from "../Common/Card";
import Loader from "../Common/Loader";

const MainContent = () => {
    const isLoading = useSelector((state) => state.itemsReducer.isLoading);
    const items = useSelector((state) => state.itemsReducer.items);

    return (
        <>
            {isLoading ? (
                items &&
                items.map((item) => (
                    <CSSTransition
                        key={item._id}
                        in={isLoading}
                        appear={true}
                        timeout={500}
                        classNames="fade"
                    >
                        <Card key={item._id} item={item} />
                    </CSSTransition>
                ))
            ) : (
                <Loader />
            )}

            {isLoading && items.length === 0 ? (
                <CSSTransition
                    in={isLoading}
                    appear={true}
                    timeout={500}
                    classNames="fade"
                >
                    <div className="not-found">
                        <p>
                            Упс... <br />
                            <span> ничего не найдено</span> <br />
                        </p>
                    </div>
                </CSSTransition>
            ) : null}
        </>
    );
};

export default withRouter(MainContent);
