import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCartIcon />
      <span>1</span>
    </div>
  );
};

export default CartWidget;
