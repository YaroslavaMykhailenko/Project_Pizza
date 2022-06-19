import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('маленька')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{ margin: '80px' }} className='shadow p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className='img-fluid' style={{ height: '200px' }} />

            </div>


            <div className='flex-container'>

                <div className='w-100 m-2'>
                    <p>Розмір</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>{pizza.varients.map(varient => {
                        return <option value={varient}>{varient}</option>
                    })}</select>


                </div>

                <div className='w-100 m-2'>
                    <p>Кількість</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(5).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>

                        })}
                    </select>

                </div>

            </div>

            <div className='flex-container'></div>
            <div className='m-1 w-100'>
                <h1> Ціна: {pizza.prices[0][varient] * quantity} ₴</h1>


            </div>
            <div className='ml-3 w-100'>
                <button className='btn'>В КОШИК</button>

            </div>
            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{height:"300px"}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Закрити</button>


                </Modal.Footer>
            </Modal>



        </div>
    )
}