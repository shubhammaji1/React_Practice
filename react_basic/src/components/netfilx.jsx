import seriesdata from "../api/series.json";
import { Seriescard } from "./list";

export const Netflix=()=>{
    return (
      
        <ul>
          {
            seriesdata.map((currEle)=>(
              <Seriescard key={currEle.id} currEle = {currEle}/>
  
            ))
          }
         
        </ul>
    );
  };

//   export default Netflix;


// export const Footer =()=>{
//     return <p>Footer</p>;
// };

