const Header = (props) => {  
  console.log('header: ' + props.course)

  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.number}</p>
  )
}

const Content = (props) => {    
  for (let i=0; i < props.list.length; i++){
    console.log('content: ' + props.list[i]['part'] + ' ' + props.list[i]['number'])
  }
  
  const items = props.list.map(p => <Part part={p['part']} number={p['number']}/>)
      
  return (
    <div>
      {items}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  for (let i=0; i < props.list.length; i++){
    sum += props.list[i]['number']
  }

  return (
    <p>Number of exercises {sum}</p>
  )

}


const App = () => {
  
  const course = 'Half Stack application development'

  const content = [
    { 
      part: 'Fundamentals of React',
      number: 10
    },
    { 
      part: 'Using props to pass data',
      number: 7
    },
    { 
      part: 'State of a component',
      number: 14
    }
  ]    

  return (
    <div>
      <Header course={course}/>      
      <Content list={content} /> 
      <Total list={content} />
    </div>
  )
}

export default App

