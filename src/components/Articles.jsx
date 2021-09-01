import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle.js";

const Articles = (props) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 4000);
  });

  return (
    <div className="article">
      <h3>Articles</h3>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles &&
        [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <SkeletonArticle key={n} theme={props.theme} />
        ))}
    </div>
  );
};

export default Articles;
