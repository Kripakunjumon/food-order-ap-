import CartItem from './CartItem';

class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}

export default Cart;
