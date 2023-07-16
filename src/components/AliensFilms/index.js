import { useDispatch, useSelector } from "react-redux";
import MenuFilm from "./MenuFilm";
import { useEffect } from "react";
import { loadFilm } from "../../store/slices/filmSlice";
import Loading from "../Loading";


const AliensFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector(state => state.film);


    useEffect(() => {
        dispatch(loadFilm())

    },
        []);

    

    return (
        <>
            <div className={`grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 container Space evenly `}>

                {films.loading == "fulfilled" && films.items.map(item =>
                    
                    <MenuFilm item={item.attributes} item_id ={item} />)}




            </div >

            <div className="flex justify-center items-center h-[70vh]">

                {films.loading == 'pending' && <Loading />}
            </div>
        </>







    )

};

export default AliensFilms;


