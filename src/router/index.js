import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import AliensFilms from "../components/AliensFilms";
import MenuItemPage from "../pages/MenuItemPage";

import CartProvider from "../components/providers/CartProvider";
import CartPageSelf from "../pages/CartPageSelf";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{ path: "/", element: <AliensFilms /> }, 
        {path: "catalog/:id", element: <MenuItemPage />}, 
        { path: "/cart", element: (<CartProvider><CartPageSelf /></CartProvider>)},

        {

            children: [{
                path: "about",
                element: <About />
            }, {
                path: "contacts",
                element: (<div>79774038297</div>)
            }

            ]
        },

        ],

    }, {},

]);



export default router;

