import Axios from "axios";

const KEY = "AIzaSyAtyP6xZGZgAY3hmFm0RrvHlh_M-7IilNA";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { maxResults: 5, part: "snippet", key: KEY }
});
