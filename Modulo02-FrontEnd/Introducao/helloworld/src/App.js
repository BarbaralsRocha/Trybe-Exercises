import React from 'react';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const schedules = ['Montar um portifólio', 'Arrumar o GitHub', 'Estudar React']
const makeListOfSchedule = schedules.map((schedule) => Task(schedule))

class App extends React.Component{
  render(){
    return(
      <div>{makeListOfSchedule}</div>
    )
  }
}
export default App;