import Sample from "./Sample";

// export const metadata = {
//     title: "Article List",
//     description: "My articles list",
//     openGraph: {
//         title: "My page"
//     }
// };

export async function generateMetadata() {
    // api call
    return {
        title: "NEW Title"
    }
}

const Articles = async () => {
    const res = await fetch("https://dummyjson.com/posts", {
        // cache: "no-store"
        next: {
            revalidate: 6 * 60 * 60 // 6 hrs
        }
    }); // 30, 50
    const data = await res.json();
    // console.log(data.posts);
    return (
        <>
            <h1> Articles List Page</h1>
            <Sample />
            {
                data.posts.map((post) => {
                    return <h3 key={post.id}>{post.title}</h3>
                })
            }
        </>
    )
};

export default Articles;