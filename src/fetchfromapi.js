import axios from "axios";
let BaseUrl="https://reuters-business-and-financial-news.p.rapidapi.com/article-date";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "2531b3f0a6mshc0620b93e6acb6fp1089bdjsn7ee9ea6c2ff6",
    'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
  }
};
export const fetchfromAPI=async(url)=>{
    const {data}=await axios.get(`${BaseUrl}/${url}`,options);
    //console.log(data);
    return data;
}