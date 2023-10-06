import Feed from './Feed'

type Props = {
    posts: {
        id: number,
        title: string,
        datetime: string,
        body: string
    }[]
}

const Home = (props: Props) => {
    return (
        <main className='Home'>
            {props.posts.length ? (
                <Feed posts={props.posts} />
            ) : (
                <p style={{ marginTop: "2rem", color: 'black' }}>No posts to display.</p>
            )
            }
        </main>
    )
}

export default Home