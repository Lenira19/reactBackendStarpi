import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeOrder } from "../../store/slices/cartSlice";



const CartPageSelf = ({ cart, sum }) => {

    const [orderData, setOrderData] = useState({
        name: "",
        phoneNumber: ""
    });
    const dispatch = useDispatch();

    const onChangeInput = (e) => {

        setOrderData({ ...orderData, [e.target.name]: e.target.value })

    };

    const sendOrder = () => {
        const data = orderData
        data.films = cart.items.map(item => item.food.id_name)
        data.items_qty = cart.items.map((item)=>item.qty);
        dispatch(makeOrder(data))

    };


    return (
        <>


            <div>
                <ul>

                    {cart.items.map((item) =>
                        <li>{item.food.name} - {item.food.cost} руб X {item.qty} Шт </li>
                    )}
                    4
                </ul>
                <strong>Итого: {sum} руб</strong>
            </div>


            <form className="flex flex-col max-w-[300px]">
                <label>Имя</label>
                <input name="name" onChange={onChangeInput} className='border'></input>
                <label>Телефон</label>
                <input name="phoneNumber" onChange={onChangeInput} className='border'></input>

                
            </form>
            {!!cart.items.length && <button disabled={cart.loading == "pending"} onClick={sendOrder} className='border'>Отправить заказ</button>}

        </>)
};


export default CartPageSelf;
