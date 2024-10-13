import styles from './Task.module.css'
import PropTypes from 'prop-types';

const Task = ({index, item, tareas}) => {
   
    
  return (
    <>
        <li className={styles.li}>{item}
            <div>
                <button onClick={()=>tareas.remove(index)}>X</button>
                <button onClick={()=>tareas.moveUp(index)} className='buttonUpp'>⬆</button>
                <button onClick={()=>tareas.moveDown(index)} className='buttonDown'>⬇</button>
                </div>
        </li>
      
    </>
  )
}

// Validación de las props
Task.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    tareas: PropTypes.shape({
      remove: PropTypes.func.isRequired,
      moveUp: PropTypes.func.isRequired, 
      moveDown: PropTypes.func.isRequired,
    }).isRequired,
  };

export default Task
