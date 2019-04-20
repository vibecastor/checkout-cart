import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class CheckoutForm extends Component {

  handleChange = (e) => {
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>Check Out</h1>
        <div>
          <form
            className="payment-information"
            onSubmit={this.handleSubmit}
          >
            <input
              type='text'
              name='name'
              placeholder='Name on Card'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='cardNumber'
              placeholder='XXXX XXXX XXXX XXXX'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='expirationMonth'
              placeholder='MM'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='expirationYear'
              placeholder='YYYY'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='cvv'
              placeholder='CVV'
              //value={}
              onChange={this.handleChange}
            />
          </form>
          <form
            className="shipping-address"
            onSubmit={this.handleSubmit}
          >
            <input
              type='text'
              name='name'
              placeholder='Full Name'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='address'
              placeholder='Address'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='Apt/suite/etc'
              placeholder='Apt/suite/etc'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='city'
              placeholder='City'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='country'
              placeholder='United States'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='state'
              placeholder='State'
              //value={}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='zipCode'
              placeholder='Zip Code'
              //value={}
              onChange={this.handleChange}
            />
          </form>
          <Button variant='contained' color='primary'>
            Check Out
          </Button>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
