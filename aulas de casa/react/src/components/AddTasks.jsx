import { useState } from "react"
import Input from "./Inputs"
function AddTasks({onAddTaskSubmit}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input type="text" placeholder="Digite o título da Tarefa"  value={title} onChange={(event)=> setTitle(event.target.value)}/>
            <Input type="text" placeholder="Digite a descrição da Tarefa" value={description} onChange={(event)=> setDescription(event.target.value)} />
            <button  onClick={()=> {
                if(!title.trim() || !description.trim()){
                    return alert("Preencha o titulo e descrição da tarefa!")
                }
                onAddTaskSubmit(title,description)
                setTitle ("")
                setDescription("")
            }} className="bg-slate-500 text-white px-4 py-2 rounded-md">Adicionar</button>

        </div>
    )
}

export default AddTasks