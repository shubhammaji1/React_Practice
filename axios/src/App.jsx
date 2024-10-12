import { useEffect } from "react";
import { getPost } from "./API/PostApi";

const App=()=>{
console.log(getPost());

const getPostData = async()=>{
  const res = await getPost();
  console.log(res);
  
}
useEffect(()=>{
  getPostData();
},[])

  return <h1>Hello</h1>
}

export default App;