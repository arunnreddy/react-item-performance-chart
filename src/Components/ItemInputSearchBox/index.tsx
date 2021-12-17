import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import './style.scss';
import { Close } from '@mui/icons-material';

type Props = {
    CategoryItems: any[];
    handleInputValue: (str: string) => any;
    handleClose: (str: string) => any;
}

export const ItemInputSearchBox = ({ CategoryItems, handleInputValue, handleClose }: Props) => {
    const [inputValue, setinputValue] = useState<string>('');

    const handleInput = (e: any) => {
        let searchValue = e.target.value;
        // console.log(searchValue);
        setinputValue(searchValue);
        handleInputValue(searchValue);
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', marginBottom: '30px' }}
            className='item-input-container'
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                value={inputValue}
                placeholder="Search Category Items"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e) => handleInput(e)}
            />
            {inputValue ? (
                <IconButton sx={{ p: '10px' }} aria-label="search" onClick={() => { handleClose('item'); setinputValue('') }} >
                    <Close />
                </IconButton>
            ) : null}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    );
}
