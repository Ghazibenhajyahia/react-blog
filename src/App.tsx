import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      datetime: '2021-01-01T00:00:00.000Z',
      body: 'This is my first post.',
    },
    {
      id: 2,
      title: 'Second Post',
      datetime: '2021-01-02T00:00:00.000Z',
      body: 'This is my second post.',
    },
    {
      id: 3,
      title: 'Third Post',
      datetime: '2021-01-03T00:00:00.000Z',
      body: 'This is my thid post.',
    },
    {
      id: 4,
      title: 'Third Post',
      datetime: '2021-01-03T00:00:00.000Z',
      body: 'This is a post i dont know exactly what im saying but i need to know if the slice works.',
    },
  ])
  const [searchResults, setSearchResults] = useState<typeof posts>([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredPosts = posts.filter(post => ((post.body.toLowerCase().includes(search.toLowerCase())))
      || (post.title.toLowerCase().includes(search.toLowerCase())))

    setSearchResults(filteredPosts.reverse())
  }, [posts, search])

  const handleSubmit = () => {
    const newPost = {
      id: posts.length + 1,
      title: postTitle,
      datetime: new Date().toISOString(),
      body: postBody,
    }
    setPosts([...posts, newPost])
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleDelete = (id: number) => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
    navigate('/')

  }

  return (
    <div className='App'>
      <Header title={"React JS Blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
