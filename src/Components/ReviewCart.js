import React from 'react';

const ReviewCart = (props) => {
  console.log(props.cart)
  return (
    <div>
      <h1>Your Cart</h1>
      <div className='Your Cart'>
        <div>
          <h2>Your Cart</h2>
          <h4>QUANTITY</h4>
          <div>
            {props.cart.map((item, index) => {
              return (
                <div key={index}>
                  {/** Placeholder product image goes here */}
                  <div className='product-image-placeholder' />
                  <div>
                    <h4>{item.name}</h4>
                    <h5>{item.sku}</h5>
                  </div>
                  <div>
                    <p>{item.quantity}</p>
                  </div>
                  <div>
                    <h4>SUBTOTAL</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCart;
