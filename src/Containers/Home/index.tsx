import React, { useState, useEffect, useCallback, useMemo, Fragment } from "react";
import Footer from '../../Components/Footer';
import Header from "../../Components/Header";
import Items from "../Items";
import { Dashboard } from "../Dashboard";
import './style.scss'

const Home: React.FC = () => {
    const [getScreenWidth, setGetScreenWidth] = useState<number>(
        window.innerHeight
      );
    const [tabsType, setTabsType] = useState<string>('dashboard');

      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return window.removeEventListener("resize", handleResize);
      }, [getScreenWidth]);
    
      const handleResize = () => {
        setGetScreenWidth(window.innerHeight);
      };

    return (
        <Fragment>
            <div className="body-container" style={{ height: getScreenWidth }}>
            <Header />
            {tabsType === 'items' ? (
            <Items />
            ) : null}
            {tabsType === 'dashboard' ? (
            <Dashboard />
            ) : null}
            <div className="blank-space" />
            </div>
            <Footer tabsType={tabsType} setTabsType={(str)=> setTabsType(str)} />
        </Fragment>
    );
};

export default Home;