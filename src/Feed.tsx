import Post from './Post'

type Props = {
    posts: {
        id: number,
        title: string,
        datetime: string,
        body: string
    }[]
}

const Feed = (props: Props) => {
    return (
        <>
            {props.posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed