import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrement, deleteFromCart } from '../redux/reducerSlice'

const Cart = () => {


    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const handledecrement = (id) => {
        dispatch(decrement(id))
    }
    const handleincrement = (id) => {
        dispatch(addToCart({id}))
    }
    const handledelete = (id) => {
        dispatch(deleteFromCart(id));
    }

    return (
        <div className='cart'>
            <main>


                {
                    cartItems.length > 0 ? (
                        cartItems.map((elem) => {
                            return <CartItem name={elem.name} 
                            key={elem.id}
                            imgSrc={elem.imgSrc} 
                            id={elem.id} 
                            qty={elem.quantity} 
                            price={elem.price} 
                            decrement={handledecrement} 
                            increament={handleincrement} 
                            deletehandler={handledelete} />
                        })
                    ) : (
                        <h1>No Items Yet</h1>
                    )

                }

            </main>

            {/* <aside>
                <h2>Subtotal: ${6362}</h2>
                <h2>Shipping: ${6362313}</h2>
                <h2>Tax: ${6362552436}</h2>
                <h2>Total: ${6545362552436}</h2>
            </aside> */}
        </div>
    )
}

export default Cart



const CartItem = ({ imgSrc, name, id, price, qty, decrement, increament, deletehandler }) => {
    return (
        <div className="cartItem">
            <img src={imgSrc} width={"200px"} alt="" />
            <article>
                <h3>{name}</h3>
                <p>${price}</p>
            </article>

            <div>
                <button onClick={() => decrement(id)}><b>-</b></button>
                <p>{qty}</p>
                <button onClick={() => increament(id)}> <b>+</b> </button>
            </div>
            {/* <div className='svg'> */}
            <AiFillDelete onClick={() => deletehandler(id)} />
            {/* </div> */}

        </div>
    )
}