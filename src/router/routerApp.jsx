import App from "../App";
import Home from "../pages/homePage/Home";
import Nosotros from "../pages/nosotrosPage/Nosotros";
import Colaboradores from "../pages/colaboradoresPage/Colaboradores"
import Carreras from "../pages/carrerasPage/Carreras";
import Comparador from "../pages/comparadorPage/Comparador";
import Test from "../pages/testPage/Test";
import Error from "../pages/errorPage/Error";

export const routerApp = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "nosotros",
                element: <Nosotros />
            },
            {
                path: "colaboradores",
                element: <Colaboradores />
            },
            {
                path: "carreras",
                element: <Carreras />
            },
            {
                path: "comparador",
                element: <Comparador />
            },
            {
                path: "test",
                element: <Test />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
]