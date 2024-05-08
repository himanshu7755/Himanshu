import React from 'react';

import { NavLink } from 'react-router-dom';

import HotelLobby from './HotelLobby';

function Gallery() {
    return (

        <>
            <nav>
                <NavLink className={'z-50 py-6 px-5 border-b-4 hover:border-sky-500 active:border-sky-500 active:text-sky-500 hover:text-sky-500 border-slate-50 cursor-pointer'} to='/HotelLobby'>
                    HOTEL LOBBY
                </NavLink>
            </nav>
        </>
    )
}

export default Gallery;