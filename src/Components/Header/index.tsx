/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback, useMemo, Fragment } from "react";
import {
    Badge,
    Container, Form,
    FormControl, Navbar,
    Nav, NavDropdown
} from 'react-bootstrap';
import './style.scss';

const Header: React.FC = () => {
    
    return (
        <Fragment>
           <div className="shop-container">
          <Container>
            <b className="shop-text" id="shopText">
              Shop
            </b>
          </Container>
        </div>
        </Fragment >
    );
};

export default Header;