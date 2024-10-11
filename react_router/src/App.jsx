import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import { Movie } from "./pages/movie";
import {Home} from "./pages/Home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";

const App = ()=>{
  

  const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
      errorElement : <ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader: getMoviesData,
        },
        {
          path:"/movie/:movieID",
          element:<MovieDetails/>,
          loader: getMoviesDetails
        },
        {
          path:"/contact",
          element:<Contact/>
        },

      ]
    },
   
  ]);


  //OLD method

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/movie" element={<Movie/>}/>
  //       <Route path="/contact" element={<Contact/>}/>
  //     </Route>
  //   )

  // );

  return <RouterProvider router={router}/>

}

export default App;