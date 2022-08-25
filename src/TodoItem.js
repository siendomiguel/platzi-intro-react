import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const [isNotCompleted, isCompleted] = React.useState(props.completed);
  
  const onComplete = () => {
    alert(`Ya completaste la tarea: ${props.text}`);
  }

  const onDelete = () => {
    alert(`Ya borraste la tarea: ${props.text}`);
  }

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete}>
        ✔
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        ❌ 
      </span>
    </li>
  );
}

export { TodoItem };