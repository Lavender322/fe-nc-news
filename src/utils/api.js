import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://be-nc-news-a17t.onrender.com/api",
});

export function getArticles(topic, sortBy, order) {
  return ncNewsAPI.get("/articles", {
    params: {
      topic,
      sort_by: sortBy,
      order,
    },
  });
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

export function postComment(articleId, username, body) {
  return ncNewsAPI.post(`/articles/${articleId}/comments`, {
    username,
    body,
  });
}

export function deleteComment(commentId) {
  return ncNewsAPI.delete(`/comments/${commentId}`);
}

export function getAllTopics() {
  return ncNewsAPI.get("/topics");
}
