import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducerSlice';
// import { useId } from 'react'

const Home = () => {


    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: "https://www.pngarts.com/files/4/Apple-Macbook-Pro-Transparent-Image.png",
            id: 1
        },
        {
            name: "Dell G-15 Laptop",
            price: 564651,
            imgSrc: "https://techblog.gr/wp-content/uploads/2021/07/Dell_G15_open_left_color-1-1024x680.png",
            id: 2
        },
        {
            name: "Lenovo legion Laptop",
            price: 3654365,
            imgSrc: "https://p4-ofp.static.pub/fes/cms/2023/02/14/41ct8ul46rpdc4jojxogxghztxo9cz564496.png",
            id: 3
        }
    ];



    const dispatch = useDispatch();


    const addToCartHandler = (options) => {
        // console.log(options);
        dispatch(addToCart(options));
        
        // console.log(dispatch(addToCart({type:"addToCart", payload:options})));
        toast.success("Added to Cart");
    }



    return (
        <div className='home'>
            {
                productList.map((elem) => {
                    return <ProductCard key={elem.id}
                        name={elem.name}
                        id={elem.id}
                        price={elem.price}
                        imgSrc={elem.imgSrc}
                        handler={addToCartHandler}
                    />
                })
            }
        </div>
    )
}

const ProductCard = ({ id, name, price, handler, imgSrc }) => {
    return (
        <div className='productCart'>
            <img src={imgSrc}  alt="loading.. " />
            <p>{name}</p>
            <h4>{price}</h4>
            <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
        </div>
    )
}



export default Home