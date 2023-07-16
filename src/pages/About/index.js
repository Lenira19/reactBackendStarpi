import { Link, Outlet } from "react-router-dom";

const About = () => {

    return (<div>

        <h1>О фильме Чужой
            <p>
                Самый лучший серия фильмов
            </p>

        </h1>
        
        <Link to="/contacts">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Контакты
            </button>
        </Link>
        

    </div>)

};

export default About;