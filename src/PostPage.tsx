import { useParams, Link } from "react-router-dom"

type Props = {
    posts: {
        id: number,
        title: string,
        datetime: string,
        body: string
    }[],
    handleDelete: (id: number) => void
}

const PostPage = (props: Props) => {
    const { id } = useParams()
    const post = props.posts.find(post => post.id.toString() === id)
    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => props.handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post not found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to="/">Visit our homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage