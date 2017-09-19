import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: ''
        };
    }

    changeText(val) {
        this.setState({textValue: val});
    }

    render() {
        return (
            <div>
                <input onChange={ (event) => this.changeText(event.target.value) } />
                <button onClick={ () => this.props.onAddClick(this.state.textValue) }>Dodaj</button>
            </div>
        );
    }
}

export default TodoForm;