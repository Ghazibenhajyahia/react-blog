import { Link } from 'react-router-dom'

type Props = {
    search: string,
    setSearch: (search: string) => void
}

const Nav = (props: Props) => {
    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search'>Search</label>
                <input
                    id="search"
                    type="text"
                    placeholder='Search Posts'
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav