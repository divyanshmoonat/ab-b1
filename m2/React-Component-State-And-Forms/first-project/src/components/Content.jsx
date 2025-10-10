import Article from "./Article";

function Content({ articles, getData }) {
  // console.log(getData);
  getData(12345);
  return (
    <div>
      {articles.map((article) => {
        return (
          <Article
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        );
      })}
    </div>
  );
}

export default Content;
