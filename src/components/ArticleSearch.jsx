import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useSearchParams } from "react-router-dom";

function ArticleSearch({ setArticles, setIsError, setIsLoading, topic }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getArticles(topic)
      .then((res) => {
        setIsLoading(false);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [topic]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchParams({ sortBy, order });
    getArticles(topic, sortBy, order)
      .then((res) => {
        setIsLoading(false);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  return (
    <form className="searchForm" method="get" onSubmit={(e) => handleSearch(e)}>
      <div className="search-form-input-group-container">
        <div className="search-form-input-container search-form-group-input">
          <label htmlFor="sort-by">Sort by</label>
          <select
            name="sort-by"
            id="sort-by"
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
            value={sortBy}
          >
            <option value="created_at">date</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
          </select>
        </div>

        <div className="search-form-input-container search-form-group-input">
          <label htmlFor="order">Order</label>
          <select
            name="order"
            id="order"
            onChange={(e) => {
              setOrder(e.target.value);
            }}
            value={order}
          >
            <option value="desc">descending</option>
            <option value="asc">ascending</option>
          </select>
        </div>
      </div>
      <button className="searchBtn">Search</button>
    </form>
  );
}

export default ArticleSearch;
