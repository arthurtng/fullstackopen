import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Anecdote = (props) => {
  return <p>{props.text}</p>
}

const Votes = (props) => {
  return <p>has {props.votes} votes</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))  
  const [maxVotesIndex, setMaxVotesIndex] = useState(0)

  const getRandomIndex = (list) => {
    let index = selected
    while (index == selected){
      index = Math.floor(Math.random() * list.length)
    }
    console.log("Random Index: ", index)
    return index
  }

  const setRandomIndex = (list) => {
    setSelected(getRandomIndex(list))
  }  

  const addVote = (index) => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
    console.log("votes for", anecdotes[index], ":", copy[index])
    updateHighestVotes(index)
  }

  const updateHighestVotes = (index) => {
    if (votes[index] + 1 > votes[maxVotesIndex]){
      setMaxVotesIndex(index)
      console.log("new highest votes:", anecdotes[index], votes[index] + 1)
    }
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} />      
      <Votes votes={votes[selected]} />
      <Button handleClick={() => addVote(selected)} text="vote" />
      <Button handleClick={() => setRandomIndex(anecdotes)} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <Anecdote text={anecdotes[maxVotesIndex]} />
      <Votes votes={votes[maxVotesIndex]} />
    </div>
  )
}

export default App
