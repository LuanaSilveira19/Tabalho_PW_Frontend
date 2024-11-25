import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
//import Menu from './componentes/Menu'
import Home from './componentes/telas/Home'
import Sobre from "./componentes/telas/Sobre";
import Artista from "./componentes/telas/artista/Artista";
import Albuns from "./componentes/telas/albuns/Albuns";
import Musicas from "./componentes/telas/musicas/Musicas";
import Login from "./componentes/telas/login/Login";
import MenuPrivado from "./componentes/MenuPrivado";
import MenuPublico from "./componentes/MenuPublico";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      }, {
        path : "/login",
        element :  <Login/>
      }
    ]
  },
  {
    path:"/privado",
    element:<MenuPrivado/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
      path: "artistas",
      element: <Artista />,
    },{
      path: "albuns",
      element: <Albuns />,
    },{
      path: "musicas",
      element: <Musicas />,
    }
  ]
  }

]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;