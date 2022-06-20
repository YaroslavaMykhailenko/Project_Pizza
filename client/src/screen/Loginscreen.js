import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../actions/userActions"

export default function Loginscreen(){

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        if (localStorage.getItem('currentUser')){
            window.location.href='/'

        }

    }, [])


    function login(){
        const user={email, password}
        dispatch(loginUser(user))        


    }

    return(
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 ">
                    <h2 style={{ fontSize: '30px', fontFamily: 'Bebas Neue' }}>Авторизація</h2>
                    <div style={{fontFamily: 'Vollkorn' }}>
                        <input required type='text' placeholder="Пошта.." className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type='text' placeholder="Пароль.." className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <button className='btn mt-4' style={{ fontSize: '19px', fontFamily: 'Bebas Neue' }} onClick={login}>Увійти в систему</button>

                    </div>


                </div>
            </div>
        </div>
    )
}