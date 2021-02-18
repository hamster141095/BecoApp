import React from "react";
import classNames from "classnames";

const HamburgerIcon = ({ showMenu }) => {
    return (
        <>
            <div className="hamburger__inner">
                <span
                    className={classNames("hamburger__item", {
                        hamburger__item_open: showMenu,
                    })}
                ></span>
            </div>
        </>
    );
};

export default HamburgerIcon;
