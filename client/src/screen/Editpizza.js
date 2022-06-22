import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById } from "../actions/pizzaActions"
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
import { STATES } from "mongoose"

export default function Editpizza() {
    const [name, setname] = useState("")
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")

    const dispatch = useDispatch()

    // const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    // const { pizza, error, loading } = getpizzabyidstate

    let { pizzaid } = useParams()
    dispatch(getPizzaById(pizzaid))

    function formHandler(e) {

        e.preventDefault();

        const pizza = {
            name,
            image,
            description,
            category,
            prices: {
                'маленька': Number(smallprice),
                'середня': Number(mediumprice),
                'велика': Number(largeprice)
            }
        }
        console.log(pizza)



    }



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
                <h1>Редагування даних</h1>
                <h1>ID = {pizzaid}</h1>
                <div>
                {/* {loading && (<Loading />)}
                {error && (<Error error='Щось пішло не по плану' />)} */}
                

                <form onSubmit={formHandler}>
                    <input className="form-control" type="text" placeholder="Назва" value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Ціна за маленьку піцу" value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Ціна за середню піцу" value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Ціна за велику піцу" value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Тип піци" value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Опис" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                    <input className="form-control" type="text" placeholder="Лінк на фото" value={image} onChange={(e) => { setimage(e.target.value) }} />
                    <button className='btn mt-3' type='submit'>Зберегти зміни</button>
                </form>
                </div>

            </div>

        </div>
    )



}