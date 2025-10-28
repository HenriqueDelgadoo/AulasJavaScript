import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
import { v4 } from 'uuid'


function App() {
  const [tasks, setTasks] = useState([{
    id:1,
    title:"Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },{
    id:2,
    title:"Estudar inglês",
    description: "Estudar inglẽs para se tornar um desenvolvedor qualificado.",
    isCompleted: false
  },{
    id:3,
    title:"Estudar para vestibular", 
    description: "Estudar para vestibular a fim de passar em uma boa faculdade.",
    isCompleted: false
  }])
  
  function onAddTaskSubmit(title, description){
    const newTask ={
      id: v4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  function onTaskClick(taskId){
    const newTasks = tasks.map((task)=>{
      if(task.id === taskId){
        return{...task, isCompleted: !task.isCompleted}
      }else{
        return task;
      }
    })
    setTasks(newTasks)
  }
  function deleteTasks(taskId){
    const newTasks = tasks.filter(task => task.id !==taskId)
    setTasks(newTasks)
    }

  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className='w-[500px] space-y-4'>
      <h1 className="text-3xl text-slate-100 font-bold text-center ">Gerenciador de Tarefas</h1>

      <AddTasks onAddTaskSubmit = {onAddTaskSubmit} />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTasks = {deleteTasks}/>
      </div>
    </div>
  )
}

export default App
 