import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'
const Header = () => {

    const {cartItems} = useSelector((state)=> state.cart);


    return (
        <nav>
            <h2>Logo here</h2>

            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"} style={{ display: 'flex', gap: '0.3rem' }}>
                    <div>Cart</div>
                    <div>
                        <FiShoppingBag />
                        <p>{cartItems.length}</p>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header