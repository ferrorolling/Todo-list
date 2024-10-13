
import styles from './InputTask.module.css'
import PropTypes from 'prop-types';

const InputTask = ({tareas}) => {
  return (
    <div>
      <input 
        type='text' 
        placeholder='introduce una tarea' 
        value={tareas.tarea} 
        onChange={tareas.handleChange}
        onKeyDown={tareas.handleKeyDown}
        >
      </input>
        <button className={styles.enter} onClick={tareas.handleClick} >Enter</button>
    </div>
  )
}

InputTask.propTypes = {
    tareas: PropTypes.shape({
      tarea: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired,
      handleClick: PropTypes.func.isRequired,
      handleKeyDown: PropTypes.func.isRequired,
    }).isRequired,
  };

export default InputTask
