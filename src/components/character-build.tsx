import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBar } from '../components/navbar'
import { Bookshelf } from '../components/bookshelf'
import { fourSidedDieFunc } from '../services/dice-service'

import './../styles/character.css'

export const CharacterBuild = () => {

    console.log('gimme a number', fourSidedDieFunc());

    return (
        <div className="character">
            <NavBar />
            <Bookshelf />
        </div>
    )
}