import React from 'react';
import './TodoItem.css';
import {IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onCompleted}>
        <IoCheckmarkCircleOutline />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <IoCloseCircleOutline />
      </span>
    </li>
  );
}

export { TodoItem };