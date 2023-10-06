type Props = {
    reqType: string,
    setReqType: (arg: string) => void,

}
const Header = ({ reqType, setReqType }: Props) => {
    return (
        <header>
            <button onClick={() => setReqType("users")}>users</button>
            <button onClick={() => setReqType("posts")}>posts</button>
            <button onClick={() => setReqType("comments")}>comments</button>
        </header>
    )
}

export default Header