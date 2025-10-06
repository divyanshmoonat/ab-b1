import Article from "./Article";

function Content({ articles }) {
  return (
    <div>
      <Article
        image={articles[0].image}
        title={articles[0].title}
        description={articles[0].description}
      />
      <Article
        image={articles[1].image}
        title={articles[1].title}
        description={articles[1].description}
      />
      <Article
        image={articles[2].image}
        title={articles[2].title}
        description={articles[2].description}
      />
    </div>
  );
}

export default Content;
