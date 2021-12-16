import React, { useState, useEffect, useCallback, useMemo, Fragment } from "react";
import './style.scss';
import Button from '@material-ui/core/Button';
import { Container } from 'react-bootstrap';

type Props = {
    setTabsType: (str: string) => any;
    tabsType: string;
}

const Footer = ({ setTabsType, tabsType }: Props) => {
    return (
        <Fragment>
            <div className="footer-container">
                <Container className="footer-inner-container">
                    <Button variant={tabsType === 'dashboard' ? "outlined" : "text"} onClick={() => setTabsType('dashboard')}><h5 className="buttontx">Dashboard</h5></Button>
                    <Button variant={tabsType === 'items' ? "outlined" : "text"} onClick={() => setTabsType('items')}><h5 className="buttontx">Items</h5></Button>
                    <Button variant="text" ><h5 className="buttontx">Notification</h5></Button>
                    <Button variant="text" ><h5 className="buttontx">Profile</h5></Button>
                </Container>
            </div>
        </Fragment>
    );
};

export default Footer;