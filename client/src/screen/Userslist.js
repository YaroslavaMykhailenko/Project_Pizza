import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
export default function Userslist() {


    return (
        <div className="row justify-content-center">

            <div className="col-md-10">
                <h2 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Сторінка адміністратора</h2>
                <ul className="adminpanel">
                    <li><Link to={'/admin/userslist'}>Список користувачів</Link></li>
                    <li><Link to={'/admin/pizzaslist'} >Піци</Link></li>
                    <li><Link to={'/admin/addnewpizza'}>Додати Піцу</Link></li>
                    <li><Link to={'/admin/orderslist'}>Список замовлень</Link></li>


                </ul>


            </div>
            <h1>Список користувачів</h1>

        </div>
    )
}