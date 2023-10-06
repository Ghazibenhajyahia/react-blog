import React from 'react'

type Props = {
    title: string
}

const Header = (props: Props) => {
    return (
        <header className='Header'>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header