import React from 'react'
import { Link } from "react-router-dom"


function Header() {
    return (
        <header className='title1'>
            <h1>Todo List</h1>

            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header >
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
}

export default Header;