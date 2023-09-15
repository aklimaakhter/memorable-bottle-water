import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart }) => {
    // console.log(bottle)
    const {image, name,price, capacity}= bottle;
    return (
        <div className='bottle'>
            
            <h3>Name : {name}</h3>
            <img className='bottle-img' src={image} alt="" />
            <h6>Capacity : {capacity}</h6>
            <p>Price : {price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Add to Cart</button>
        </div>
    );
};
Bottle.propTypes ={
    bottle:PropTypes.object.isRequired,
    handleAddToCart : PropTypes.func.isRequired
}
export default Bottle;