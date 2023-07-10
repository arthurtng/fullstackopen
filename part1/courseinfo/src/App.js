const Header = (props) => {  
  console.log('header: ' + props.course)

  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {    
  for (let i=0; i < props.list.length; i++){
    console.log('content: ' + props.list[i]['name'] + ' ' + props.list[i]['exercises'])
  }
  
  const items = props.list.map(p => <Part name={p['name']} exercises={p['exercises']}/>)
      
  return (
    <div>
      {items}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  for (let i=0; i < props.list.length; i++){
    sum += props.list[i]['exercises']
  }

  return (
    <p>Number of exercises {sum}</p>
  )

}


const App = () => {  
  const course = {
    name: 'Half Stack application development',
    parts: [ 
      { 
        name: 'Fundamentals of React',
        exercises: 10
      },
      { 
        name: 'Using props to pass data',
        exercises: 7
      },
      { 
        name: 'State of a component',
        exercises: 14
      }
    ]    
  } 

  return (
    <div>
      <Header course={course.name}/>      
      <Content list={course.parts} /> 
      <Total list={course.parts} />
    </div>
  )
}

export default App

