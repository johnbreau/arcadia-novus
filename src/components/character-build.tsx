import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBar } from '../components/navbar'
import { Bookshelf } from '../components/bookshelf'

import './../styles/character.css'

export const CharacterBuild = () => {

    return (
        <div className="character">
            <NavBar />
            <Bookshelf />
        </div>
    )
}