import React, { useState } from 'react'

const Button = ({text, handle}) => {
    return (
        <button onClick={handle}> {text}</button>
    )
}

const Title = ({title}) => <h1> {title} </h1>

const BestAnecdote = ({anecdotes, best}) => {
    if (best === -1){
        return (
            <p> No votes for now </p>
        )
    }
    return (
        anecdotes[best]
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const copy = []
    for(var i = 0; i < anecdotes.length; i++) {
        copy.push(0);
    }

    const [selected, setSelected] = useState(0)
    const [best, setBest] = useState(-1)
    const [points, setPoints] = useState(copy)

    const handleClick = () => {
        let random = Math.floor(Math.random() * Math.floor(anecdotes.length))
        setSelected(random)
    }

    const handleVote = () => {
        const copy = [...points]
        copy[selected] += 1
        let index = copy.indexOf(Math.max(...copy))
        setBest(index)
        setPoints(copy)
    }

    return (
        <div>
            <Title title = "Anecdote of the day" />
            {anecdotes[selected]}
            <div>
                <Button text="vote" handle={handleVote} />
                <Button text="next anecdote" handle={handleClick} />
            </div>
            <Title title = "Anecdote with most votes" />
            <BestAnecdote anecdotes={anecdotes} best={best} />
        </div>
    )
}

export default App