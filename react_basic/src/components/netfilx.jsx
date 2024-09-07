import seriesdata from "../api/series.json";

export const Netflix=()=>{
    return (
      <div>
        <ul>
          {
            seriesdata.map((currEle)=>{
              return (  <li key={currEle.id}>
                <img src={currEle.img_url}
                width="40%"
                height="40%"/>
                <h2>Movie: {currEle.name} </h2>
                <h3>Rating: {currEle.rating}</h3>
                <p>Summary:{currEle.description}</p>
                <a href={currEle.watch_url} target="_blank">
                  <button>Watch Now</button>
                </a>
                </li>);
  
             })
          }
         
        </ul>
      </div>
    )
  }

//   export default Netflix;


// export const Footer =()=>{
//     return <p>Footer</p>;
// };

