import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import { Movie } from "./pages/movie";
import {Home} from "./pages/Home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import AppLayout from "./components/layout/AppLayout";

const App = ()=>{

  const router = createBrowserRouter([
    {
      path: "/",
      element:<AppLayout/>,
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
          element:<Movie/>
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