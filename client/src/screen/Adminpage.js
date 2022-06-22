

import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter,  Routes,  Route} from "react-router-dom"
import Addnewpizza from "./Addnewpizza"
import Orderslist from "./Orderslist"
import Pizzaslist from "./Pizzaslist"
import Userslist from "./Userslist"


export default function Adminpage() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = "/";
        }
    }, [])

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px', fontFamily: 'Bebas Neue' }}>Сторінка адміністратора</h2>
                    <ul className="adminpanel">
                        <li><a href="/admin/userslist">Список користувачів</a></li>
                        <li><a href="/admin/pizzaslist" >Піци</a></li>
                        <li><a href="/admin/addnewpizza">Додати Піцу</a></li>
                        <li><a href="/admin/orderslist">Список замовлень</a></li>

                        
                    </ul>
                    {/* <BrowserRouter>
                        <Routes>
                            <Route path='/admin/userslist' exact element={<Userslist/>} />
                            <Route path='/admin/orderslist' exact element={<Orderslist/>} />
                            <Route path='/admin/pizzaslist' exact element={<Pizzaslist/>} />
                            <Route path='/admin/addnewpizza' exact element={<Addnewpizza/>} />
                        </Routes>
                    </BrowserRouter> */}

                </div>

            </div>

        </div>
    )
}