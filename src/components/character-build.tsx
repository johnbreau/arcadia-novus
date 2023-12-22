import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBar } from '../components/navbar'

import './../styles/character.css'

export const CharacterBuild = () => {

    return (
        <div className="character">
            <NavBar />
            <div>I'm a character</div>
        </div>
    )
}