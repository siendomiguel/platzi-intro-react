import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onCLickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
    return(
        <button className="CreateTodoButton"
        onClick={onCLickButton}
        >
            +
            </button>
    );
}

export { CreateTodoButton };