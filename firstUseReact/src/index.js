import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {  
  return (    
    <div>      
      <p>Hello {props.name}, your age is {props.age} </p>    
    </div>  
  )
}

const App = () => {
  const name = "Lucien"
  const age = 22
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Chloe" age={23}/>    
      <Hello name={name} age={age + 10} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
