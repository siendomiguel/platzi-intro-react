import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onCLickButton = () => console.log('Clic');
    return(
        <button className="CreateTodoButton"
        onClick={onCLickButton}
        >
            +
            </button>
    );
}

export { CreateTodoButton };