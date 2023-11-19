import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Blog from "./pages/Blog/Blog";
import PostPage from "./pages/PostPage/PostPage";
import CronoPage from "./pages/CronoPage/CronoPage";
import Provas from "./pages/Provas";
import Cursos from "./pages/Cursos";
import CursoPage from "./interfaces/CursoPage";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/blog",
        Component: Blog
      },
      {
        path: "/cursos",
        Component: Cursos
      },
      {
        path: "/cursopage",
        Component: CursoPage
      },
      {
        path: "/blog/:id",
        Component: PostPage
      },
      {
        path: "/cronograma",
        Component: CronoPage
      },
      {
        path: "/provas",
        Component: Provas
      },
      {
        path: "/galeria",
        Component: Gallery
      }
    ]
  }
])

export default router;
