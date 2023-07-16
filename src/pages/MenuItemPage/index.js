import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadFilm } from "../../store/slices/filmSlice";
//import film from "../../components/Films";
const MenuItemPage = () => {

  const dispatch = useDispatch();
  const films = useSelector(state => state.film);


  useEffect(() => {
    dispatch(loadFilm())

  },
    []);

    
  const { id } = useParams();

  console.log(films.items);
  let menuItem = films.items.find((item) => item.id == id);
 


  return (
    <>
      <h1>{menuItem.attributes.name}</h1>
      <img src={"http://localhost:1337" + menuItem?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url} className="w-full"></img >
        <p>{menuItem.attributes.cast.join(", ")}</p>
    </>
  );

};

export default MenuItemPage;

// 