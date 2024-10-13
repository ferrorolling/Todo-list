import { useState, useEffect } from "react";

export const useTask = () => {

    const [tarea, setTarea] = useState('');
    const [lista, setLista] = useState([]);


useEffect(() => {
        let array = localStorage.getItem('lista');
        
        if (array) {
            array = JSON.parse(array);
            array.length > 0 && setLista(array);
        }       
    }, []); 


useEffect(() => {
  localStorage.setItem('lista',JSON.stringify(lista) )
}, [lista])


  const handleChange = (e) =>{
    setTarea(e.target.value)
  }

 
  const handleClick = () =>{
    if(tarea.trim().length == 0) return;
    setLista([...lista, tarea])
    
    setTarea('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  }
   

  const remove = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  }

  const moveUp = (index) => {
    if ( index > 0) {
        const updatedTasks = [...lista];
        [updatedTasks[index],updatedTasks[index -1]] = [updatedTasks[index -1],updatedTasks[index]];
        setLista(updatedTasks);
    }
  }

  const moveDown = (index) => {
    if ( index < lista.length -1) {
        const updatedTasks = [...lista];
        [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
        setLista(updatedTasks);
    }  
  }

  return {
    handleChange,
    handleClick,
    remove,
    tarea,
    moveUp,
    moveDown,
    lista,
    handleKeyDown

  }
}