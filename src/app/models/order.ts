import { ShoppingCart } from './shopping-cart';

export class Order {
    datePlaced: number;
    items: any[];

    constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
        this.items = shoppingCart.items.map(item => {
            return {
              product: {
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl
              },
              quantity: item.quantity,
              totalPrice: item.totalPrice
            }
          })
    }
}