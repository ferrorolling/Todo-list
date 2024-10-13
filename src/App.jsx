import { useTask } from './customHooks/useTask';
import styles from './App.module.css'
import Task from './components/Task';
import Search from './components/InputTask';

const App = () => {

  const tareas = useTask();

  return (
    <div className={styles.caja}>
      <h1 className={styles.titulo}>Todo List</h1>
  
      <Search tareas = {tareas} />
        <ul className={styles.ul}>
          {tareas.lista.map((item, index) => (
            <Task key={index} index={index} item={item} tareas = {tareas} />
          ))}
        </ul>
    </div>
  )
}

export default App
