import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

import ClearBtn from "../Common/Icons/ClearBtn";
import SearchIcon from "../Common/Icons/SearchIcon";

import { getSearchItems } from "../../redux/actions/itemsActions";
import { changeTitle } from "../utils/changeTitle";

const Header = (props) => {
    const dispatch = useDispatch();

    const apiPath = props.location.pathname.split("/");
    const [inputText, setInputText] = useState("");

    const clearInputValue = () => {
        setInputText("");
        dispatch(getSearchItems("", apiPath[1]));
    };

    useEffect(() => {
        document.title = changeTitle(apiPath[1]);
    }, [apiPath[1]]);

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__inner">
                    <h1
                        className={classNames("header__title", {
                            header__title_hide: !props.showTitle,
                        })}
                    >
                        {changeTitle(apiPath[1])}
                    </h1>

                    <form
                        className={classNames("search", {
                            search_transition: !props.showTitle,
                        })}
                    >
                        <div
                            className={classNames("search__inner", {
                                search__inner_transition: !props.showTitle,
                            })}
                        >
                            <input
                                className={classNames("search__input", {
                                    search__input_transition: !props.showTitle,
                                })}
                                placeholder="Какой магазин вам нужен?"
                                name="shop"
                                value={inputText}
                                onChange={(e) => (
                                    setInputText(e.target.value),
                                    dispatch(
                                        getSearchItems(
                                            e.target.value,
                                            apiPath[1] === ""
                                                ? "catalog"
                                                : apiPath[1]
                                        )
                                    )
                                )}
                            />

                            <SearchIcon showTitle={props.showTitle} />

                            {inputText && (
                                <span className="search__clear-btn">
                                    <ClearBtn onClick={clearInputValue} />
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default withRouter(Header);
