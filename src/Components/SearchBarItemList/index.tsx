/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback, useMemo, Fragment } from "react";
import { Container, } from 'react-bootstrap';
import './style.scss';

type Props = {
    IsSearchValue: boolean;
    searchCetagoryList: any[];
    handleSelectItem: (item: any[]) => any
}
const SearchBarItemList = ({ IsSearchValue, searchCetagoryList, handleSelectItem }: Props) => {

    return (
        <>
            {
                IsSearchValue ? (
                    <div className="search-listbox-container">
                        {searchCetagoryList && searchCetagoryList.map((cetagoryItem, cetagoryIndex) => (
                            <div key={cetagoryIndex} className="search-list" onClick={() => handleSelectItem(cetagoryItem)}>
                                <div className="search-list-text">{cetagoryItem.title}</div>
                            </div>
                        ))}
                    </div>
                ) : null
            }
        </>
    );
};

export default SearchBarItemList;