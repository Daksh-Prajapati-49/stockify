import React from "react";
import { fetchfromAPI } from "../fetchfromapi";
const About = () => {
    const [articles,setArticles]=React.useState([]);
    React.useEffect(()=>{
        fetchfromAPI("11-08-2023").then((data)=>setArticles(data));
      },[articles]);
      console.log(articles);
  return (
    <div style={{padding:"2rem"}}>
      {articles?.map((ele)=>{return(
        <p>{ele.articlesShortDescription}</p>
      )
      })}
    </div>
  );
};

export default About;
