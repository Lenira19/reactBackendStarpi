import { Link } from "react-router-dom";

const CartWidget = ({ cart, sum }) => {


  return (<div>
    <Link to="/cart">
    <div className="text-xl">Корзина</div>
    <div>Количество товаров: {cart.items.length}</div>
    <div>Сумма:{sum}

      руб</div>
      </Link>
  </div>);
};


export default CartWidget;