import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import classNames from "classnames";

import CatalogIcon from "../Common/Icons/CatalogIcon";
import HealthIcon from "../Common/Icons/HealthIcon";
import BeautyIcon from "../Common/Icons/BeautyIcon";
import EntertaimentIcon from "../Common/Icons/EntertaimentIcon";
import CarIcon from "../Common/Icons/CarIcon";
import HamburgerIcon from "../Common/Icons/HamburgerIcon";
import { getAllItems } from "../../redux/actions/itemsActions";

const Sidebar = (props) => {
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();
    const apiPath = props.location.pathname.split("/");

    const handleOutsideClick = (event) => {
        let path = event.path || (event.composedPath && event.composedPath());
        if (path) {
            if (!path.includes(menuRef.current)) {
                setShowMenu(false);
            }
        }
    };

    const handleLink = (link) => {
        setShowMenu(false);
    };

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    useEffect(() => {
        if (apiPath[1]) {
            dispatch(getAllItems(apiPath[1]));
        } else {
            dispatch(getAllItems("catalog"));
        }
    }, [apiPath[1]]);

    return (
        <>
            <section
                ref={menuRef}
                className={classNames("sidebar", {
                    sidebar_show: showMenu,
                })}
            >
                <div
                    className={classNames("container sidebar__container", {
                        sidebar__container_show: showMenu,
                    })}
                >
                    <div
                        className={classNames("sidebar__inner", {
                            sidebar__inner_show: showMenu,
                        })}
                    >
                        <div
                            style={{
                                backgroundImage: "url(./images/hamburger.png)",
                            }}
                            className={classNames("hamburger", {
                                hamburger_show: showMenu,
                            })}
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <HamburgerIcon showMenu={showMenu} />
                        </div>
                        <NavLink to="/catalog">
                            <div
                                className={classNames("logo", {
                                    logo_show: showMenu,
                                })}
                                onClick={() => handleLink(null)}
                            >
                                <img
                                    className="logo__img"
                                    src="./images/logo.svg"
                                    alt="Logo BECO"
                                />
                                <span
                                    className={classNames("logo__title", {
                                        logo__title_show: showMenu,
                                    })}
                                >
                                    BECO
                                </span>
                            </div>
                        </NavLink>

                        <nav className="menu">
                            <ul className='"menu__list'>
                                <li className="menu__item">
                                    <NavLink
                                        onClick={() => handleLink(null)}
                                        className={classNames("menu__link", {
                                            menu__link_show: showMenu,
                                            menu__link_active:
                                                apiPath[1] === "",
                                        })}
                                        activeClassName="menu__link_active"
                                        to="/catalog"
                                    >
                                        <CatalogIcon />
                                        <span>Каталог</span>
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink
                                        onClick={() => handleLink("health")}
                                        className={classNames("menu__link", {
                                            menu__link_show: showMenu,
                                        })}
                                        activeClassName="menu__link_active"
                                        to="/health"
                                    >
                                        <HealthIcon />
                                        <span>Здоровье</span>
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink
                                        onClick={() => handleLink("beauty")}
                                        className={classNames("menu__link", {
                                            menu__link_show: showMenu,
                                        })}
                                        activeClassName="menu__link_active"
                                        to="/beauty"
                                    >
                                        <BeautyIcon />
                                        <span>Красота</span>
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink
                                        onClick={() =>
                                            handleLink("entertaiment")
                                        }
                                        className={classNames("menu__link", {
                                            menu__link_show: showMenu,
                                        })}
                                        activeClassName="menu__link_active"
                                        to="/entertaiment"
                                    >
                                        <EntertaimentIcon />
                                        <span> Развлечения</span>
                                    </NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink
                                        onClick={() => handleLink("car")}
                                        className={classNames("menu__link", {
                                            menu__link_show: showMenu,
                                        })}
                                        activeClassName="menu__link_active"
                                        to="/car"
                                    >
                                        <CarIcon />
                                        <span> Авто</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <div
                className={classNames("block", {
                    block_show: showMenu,
                })}
            ></div>
        </>
    );
};

export default withRouter(Sidebar);
