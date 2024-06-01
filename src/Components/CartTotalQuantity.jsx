import {useContext} from 'react'
import { JerseyContext } from '../Context/JerseyContext'

const CartTotalQuantity = () => {

    const {cartProducts} = useContext(JerseyContext);

    // Calculate the total quantity of all products on cart icon
    const totalProducts = Object.values(cartProducts).reduce((sum, quantity) =>
    sum + quantity, 0); 

  return (
    <div>
        <span>{totalProducts}</span>
    </div>
  )
}

export default CartTotalQuantity