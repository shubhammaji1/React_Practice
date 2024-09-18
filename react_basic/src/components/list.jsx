export const Seriescard = (props)=>{
    const {id,img_url,name,rating,description,watch_url} = props.currEle;
    return (  <li className="card">
        <img src={img_url}
        width="40%"
        height="40%"/>
        <div className="card-content">
        <h2>Movie: {name} </h2>
        <h3>Rating: {rating}</h3>
        <p>Summary:{description}</p>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        </div>
       
        </li>);
}