const Article = ({ title, description, image }) => {
  // console.log(title, description, image)
  // console.log(props.title, props.description, props.image);
  return (
    <article className="news-article">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {description.length > 100 ? <b>Show Less</b> : <b>Show More</b>}
      </div>
      {image !== undefined && <img className="article-img" src={image} />}
    </article>
  );
};

export default Article;

// const sum = (n1, n2) => {

//     console.log(n1+n2)
// }

// sum(1,2)
// sum(5,6)
// sum(10,4)
