import styled from "styled-components";

export const Seriescard = (props)=>{
    const {id,img_url,name,rating,description,watch_url} = props.currEle;
    // const btn_style={}
      const SButton = styled.button({
        padding : "1rem 2rem",
        border : "none",
        fontSize : "1.6rem",
        color : "var(--btn-color)",
        cursor: "pointer",
        fontWeignt :"bold",
        backgroundColor: "#7dcea0"
      })
    return (  <li className="card">
        <img src={img_url}
        width="40%"
        height="40%"/>
        <div className="card-content">
        <h2>Movie: {name} </h2>
        <h3>Rating: {rating}</h3>
        <p>Summary:{description}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <SButton>Watch Now</SButton>

        </a>
        </div>
       
        </li>);
}