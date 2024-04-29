import React, { useEffect, useState } from 'react'
import cart from './Cart.module.css'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
const {pincode}=useSelector((state)=>state.PinCode)


  useEffect(() => {
    const storedCart = localStorage.getItem('storecart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);


  useEffect(() => {
    let itemsCount = 0;
    let itemsPrice = 0;
    cartItems.forEach(item => {
      itemsCount += 1;
      itemsPrice += item.price;
    });
    setTotalItems(itemsCount);
    setTotalPrice(itemsPrice - discount);
  }, [cartItems, discount]);

  const applyCoupon = () => {
    if (couponCode === 'YOUR_COUPON_CODE') {
      setDiscount(100);
    } else {
      alert('Invalid coupon code');
    }
  };


function HandleRemove(id){
if(window.confirm('do you want to remove')){
  let ProductItem =JSON.parse(localStorage.getItem('storecart'))||[]
  ProductItem=ProductItem.filter((element)=>element.id!==id)
  localStorage.setItem('storecart',JSON.stringify(ProductItem))
  setCartItems(ProductItem)
  toast.success('Item removed from cart successfully');
}
}



  return (
<div className={cart.cart_page}>
<section className={cart.leftSection}>
<div className={cart.item_pincode}>
<h2>Shopping Cart ({cartItems.length} items)</h2>
<p>Shipping to :{pincode && pincode[0].address.postcode} </p>
</div>
      <div className={cart.renderlistingdata}>
      {cartItems.map(item => (
        <div key={item.id} className={cart.cart_item}>
        <div className={cart.eactitem}>
        <img src={item.pic} alt={item.model} />
          <div>
            <h3>{item.company}</h3>
            <p>{item.description}</p>
            <p>Model: {item.model}</p>
            <p>Price: ${item.price}</p>
            <p>Standard DeliveryStandard Delivery: 30 Apr (Tue)-01 May (Wed)</p>
            <p>*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</p>
          </div>
        </div>
          <div className={cart.buttonscart}>
            <button onClick={()=>HandleRemove(item.id)}>remove item</button>
            <button>move to wishlist</button>
          </div>
        </div>
      ))}
      </div>
</section>
      <section className={cart.rightSection}>
  <div className={cart.forfixed}>
  <p className={cart.fixedPrices}>Total : ${totalPrice}</p>
      <button className={cart.checkoutbtn}>CHECKOUT</button>
  </div>
     <div className={cart.purchagecontent}>
     <div className={cart.coupon}>
        <input
          type="text"
          value={couponCode}
          onChange={e => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
        />
        <button onClick={applyCoupon}>Apply</button>
      </div>
      <div className={cart.totals}>
        <h3>price detail</h3>
     <section className={cart.lowerpricesection}>
<div>
<p><span>price</span> ({totalItems})item</p>
<p>${totalPrice}</p>
</div>
<div>
<p><span>delivery charges</span></p>
<p style={{color:'green'}}>free</p>
</div>
<hr />
<div>
  <p>AMOUNT PAYABLE</p>
  <p>${totalPrice}</p>
</div>
     </section>
<hr />
<p>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
   
      </div>
     </div>
      </section>
    </div>
  )
}
