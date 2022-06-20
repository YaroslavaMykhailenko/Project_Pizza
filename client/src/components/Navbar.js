import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function Navbar() {
    const cartstate = useSelector(state=>state.cartReducer)
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
                <img src='https://cdn-icons-png.flaticon.com/512/3132/3132693.png' style={{ height: '60px' }} />
                <a className="navbar-brand" href="/">FUNNY PIZZA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Log In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}