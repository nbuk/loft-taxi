import React, { useContext } from "react";
import pagesData from "../../../AppData/pages";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { AuthContext } from '../../../Contexts/AuthContext';
import { Link } from 'react-router-dom';

const NavMenu = (props) => {

    const auth = useContext(AuthContext);

    const navItems = [
        {
            ...pagesData.map,
            title: "Карта",
        },
        {
            ...pagesData.profile,
            title: "Профиль",
        },
        {
            ...pagesData.login,
            title: "Выйти",
        },
    ];

    const onLinkClickedHandler = (e) => {
        const pageId = e.target.closest(".nav-link").id;

        if (pageId) {
            if (pageId === 'login') {
                auth.logout();
            }
        }
    };

    return (
        <nav>
            {navItems.map((page) => {
                return (
                    <Button
                        className="nav-link"
                        style={{ fontWeight: 400 }}
                        id={page.id}
                        key={page.id}
                        component={Link}
                        to={page.href}
                        onClick={onLinkClickedHandler}
                    >
                        {page.title}
                    </Button>
                );
            })}
        </nav>
    );
};

export default NavMenu;
