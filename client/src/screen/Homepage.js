import React, {useState, useEffect} from 'react'
import Pizza from '../components/Pizza'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
// import { getAllPizzasReducer } from '../reducers/pizzaReducers'

export default function Homepage() {

    const dispatch = useDispatch();

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

    const { pizzas, error, loading} = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, []);

    return (

        <div>
            <div className="row justify-content-center">

                {loading ? (<h1>Завантаження</h1>) : error ? (<h1>Щось пішло не по плану</h1>) : (
                    pizzas.map((pizza) => {

                        return (
                        <div className='col-md-3 m-3' key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
    
                        </div>
                        );
    
                    })

                )} 

            </div>

        </div>
    )
}