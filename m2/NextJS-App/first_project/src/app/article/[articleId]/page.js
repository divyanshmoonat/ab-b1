const ArticleDetails = async (props) => {
    const params = await props.params;
    console.log(params.articleId);
    return (
        <>
            <h1>Article Details Page for article no {params.articleId}</h1>
        </>
    )
};

export default ArticleDetails;