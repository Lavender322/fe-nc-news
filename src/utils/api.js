import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://be-nc-news-a17t.onrender.com/api",
});

export function getAllArticles() {
  return ncNewsAPI.get("/articles");
}

export function getArticleById(articleId) {
  return ncNewsAPI.get(`/articles/${articleId}`);
}

export function getCommentsByArticleId(articleId) {
  return ncNewsAPI.get(`/articles/${articleId}/comments`);
}

export function patchArticleVote(articleId, newVote) {
  return ncNewsAPI.patch(`/articles/${articleId}`, {
    inc_votes: newVote,
  });
}
