import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import ReviewCart from './Components/ReviewCart';
import CheckoutForm from './Components/CheckoutForm';

// ---------------------------------------
// Ordering style sheets in the <head>
// ---------------------------------------
const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // Defining a custom insertion point that JSS will ues to inject styles into the DOM and allow styled-components to work with Mui...
  insertionPoint: document.getElementById('jss-insertion-point'),
});

const StyledAppBar = styled(AppBar)`
  height: 4em;

  h2 {
    padding-left: 2rem;
  }
`;

class App extends Component {
  state = {
    cart: [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }],
    products: [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt" }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt" }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks" }],
    user: {
      paymentInformation: {
        name: '',
        cardNumber: 0,
        expirationDate: {
          month: 0,
          year: 0
        },
        cvv: 0
      },
      shippingAddress: {
        name: '',
        address: '',
        apt: '',
        city: '',
        country: '',
        state: '',
        zipCode: 0
      }
    }
  };

  render() {
    //console.log(this.state.cart)
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div className="App">
          <StyledAppBar>
            <h2>Assemble Store</h2>
          </StyledAppBar>
          <ReviewCart cart={this.state.cart} />
          <CheckoutForm />
        </div>
      </JssProvider>
    );
  }
}

export default App;
