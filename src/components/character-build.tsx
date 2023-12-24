import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBar } from '../components/navbar'
import { Bookshelf } from '../components/bookshelf'
import { fourSidedDieFunc } from '../services/dice-service'

import './../styles/character.css'

export const CharacterBuild = () => {
    const  [inputValue, setInputValue] =  useState('');
    const [selectedOption, setSelectedOption] = useState("option1");
    const [charStrength] = useState<number>(fourSidedDieFunc());

    const  handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setInputValue(event.target.value);
    };

    const  handleDropdownChange = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedOption(event.target.value);
	};

    return  (
        <form>
            <label>Input Value:
                <input  type="text"  value={inputValue} onChange={handleChange} />
            </label>
            <label>Character Strength:
                <input  type="number"  value={charStrength} readOnly />
            </label>
            <label>
			Select an option:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Option 1</option>
				<option  value="option2">Option 2</option>
				<option  value="option3">Option 3</option>
			</select>
		</label>
        </form>
    )
};
