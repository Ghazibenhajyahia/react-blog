import React from 'react'

type Props = {
    handleSubmit: () => void,
    postTitle: string,
    setPostTitle: (postTitle: string) => void,
    postBody: string,
    setPostBody: (postBody: string) => void
}

const NewPost = (props: Props) => {
    return (
        <main className='NewPost'>
            <h2>NewPost</h2>
            <form className='newPostForm' onSubmit={props.handleSubmit}>
                <label htmlFor='postTitle'>Title:</label>
                <input
                    id='postTitle'
                    type='text'
                    required
                    value={props.postTitle}
                    onChange={(e) => props.setPostTitle(e.target.value)} />
                <label htmlFor='postBody'>Body:</label>
                <textarea
                    id='postBody'
                    required
                    value={props.postBody}
                    onChange={(e) => props.setPostBody(e.target.value)} />
                <button type='submit' value='Create Post' >Submit</button>
            </form>
        </main>
    )
}

export default NewPost