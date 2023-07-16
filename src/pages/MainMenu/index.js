import { Link } from "react-router-dom";

 const MainMenu = ()=>{
let menuItems=[{title:"Главная",link:"/"},{title:"О Нас",link:"/about"}];

return(

    <div className="flex gap-5">
   { menuItems.map((item) =>
    {
       return <Link to={item.link}>{item.title}</Link>


 })}
    </div>
);

 };

 export default MainMenu;

