import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Movie } from "./pages/movie";
import {Home} from "./pages/Home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";

const App = ()=>{

  const router = createBrowserRouter([
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
  ]);

  return <RouterProvider router={router}/>

}

export default App;