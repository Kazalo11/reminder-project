import React from 'react';

class TextBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {value: '', isSubmitted: false};
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    onSubmit(event){
        this.setState({isSubmitted: true});
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    Create a reminder:
                    <input type={"text"} value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value ="Submit"/>
            </form>
        )
    }
}
export default TextBox;