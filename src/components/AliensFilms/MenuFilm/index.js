import { Link } from "react-router-dom";
import { addToCart } from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const MenuFilm = ({ item, Theme,item_id }) => {
    const dispatch = useDispatch()

    const Cast = (
        <ul className="font-bold">

            {item.cast.join(" | ")}

        </ul>

    );
    

    return (

        <div class={`rounded overflow-hidden shadow-lg p-2 bg-emerald-100"  md:bg-lime-500 xl:bg-yellow-300 `}>

            <img src={"http://localhost:1337" + item?.image?.data?.attributes?.formats?.thumbnail?.url} className="w-full" />
            <Link to={`/catalog/${item_id.id}`}>
                <div className="text-2xl font-bold text-red-500 md:text-orange-500 xl:text-fuchsia-600 p-2">
                    {item.name}
                </div >
            </Link>
            <div className="p-3 ">
                {Cast}
            </div>
            <button onClick={() => dispatch(addToCart(item))}
            
                class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Купить
            </button>

        </div>
    );

};




export default MenuFilm;

