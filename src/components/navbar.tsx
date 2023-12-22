import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/navbar.css'

export const NavBar = () => {

    return (
        <ul className="navigation">
        <li>
          <a href="/" className="fade">Home</a>
        </li>
        <li>
          <a href="/newCss/" className="fade">CSS Testing</a>
        </li>
        <li>
          <a href="/blog/" className="fade">Blog</a>
        </li>
        <li>
          <a href="/about/" className="fade">About</a>
        </li>
      </ul>
    )
}