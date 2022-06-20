import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { registerUser } from "../actions/userActions"
const registerstate = useState(state => state.registerUserReducer)
// const { error, loading, success } = registerstate
// 

export default function Registerscreen() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

    const dispatch = useDispatch()


    function register(){
        if (password!=cpassword){
            alert('Паролі не співпадають!')
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
        
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <h2 style={{ fontSize: '30px', fontFamily: 'Bebas Neue' }}>Регістрація</h2>
                    <div style={{fontFamily: 'Vollkorn' }}>
                        <input required type='text' placeholder="Ім'я.." className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input required type='text' placeholder="Пошта.." className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type='text' placeholder="Пароль.." className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input required type='text' placeholder="Підтвердити пароль.." className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className='btn mt-3' style={{ fontSize: '19px', fontFamily: 'Bebas Neue' }} onClick={register}>Заереструватись</button>
                        <br></br>
                        <h2 style={{display : 'inline', fontSize:'18px'}}>Вже маєте аккаунт?</h2>
                        <a className='links' href="/login" style={{display : 'inline', fontSize:'19px', color:"crimson", margin:'10px'}}>Увійти🙂</a>

                    </div>


                </div>
            </div>
        </div>
    )
}