import { useEffect, useState } from "react";
import axios from "axios";

import Article from "./Article";

function Content() {
  // console.log(getData);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticlesWithFetch = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
        // Customer error handling
      }
    };
    // getArticlesWithFetch();
    const getArticlesWithAxios = () => {
      axios
        .get("https://dummyjson.com/posts")
        .then((response) => {
          console.log(response.data);
          // axios.get("API 2")
          // .then((res) => {
          //   console.log(res)
          //   axios.get("API 3")
          //   .then((res) => {
          //     console.log(res)
          //     // Callback hell
          //   })
          //   .catch()
          // })
          // .catch()
        })
        .catch((err) => {
          console.log("Error occured", err);
          // Error handling logic
        });
    };

    // getArticlesWithAxios();

    const getArticlesWithAxiosAsyncAwait = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        console.log(response.data);
        setArticles(response.data.posts);
        // setArticles({});
        // const response2 = await axios.get("API 2");
        // const response3 = await axios.get("API 3");
      } catch (err) {
        console.log("Error occured while calling api", err);
      }
    };

    getArticlesWithAxiosAsyncAwait();
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <Article
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.body}
          />
        );
      })}
    </div>
  );
}

export default Content;
