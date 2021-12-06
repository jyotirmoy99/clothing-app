import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

import Button from "@mui/material/Button";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button variant="contained" size="small">
        Go to Checkout
      </Button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
