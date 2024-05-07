import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://be-nc-news-a17t.onrender.com/api",
});

export function getAllArticles() {
  return ncNewsAPI.get("/articles", {});
}
