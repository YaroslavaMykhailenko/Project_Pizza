import React, { useState, useEffect } from "react"

// const registerstate = useSelector(state => state.registerUserReducer)
// const { error, loading, success } = registerstate
// const dispatch = useDispatch()

export default function Registerscreen() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

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
        }
        
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 ">
                    <h2 style={{ fontSize: '30px', fontFamily: 'Bebas Neue' }}>Регістрація</h2>
                    <div style={{fontFamily: 'Vollkorn' }}>
                        <input required type='text' placeholder="Ім'я.." className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input required type='text' placeholder="Пошта.." className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type='text' placeholder="Пароль.." className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input required type='text' placeholder="Підтвердити пароль.." className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className='btn mt-4' style={{ fontSize: '19px', fontFamily: 'Bebas Neue' }} onClick={register}>Заереструватись</button>

                    </div>


                </div>
            </div>
        </div>
    )
}