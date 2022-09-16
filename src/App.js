import './App.css';
import React from 'react';
import Title from "./components/Title";
import TextBox from "./components/ReminderInformation";

class App extends  React.Component{
    render(){
        return(
            <div>
            <Title/>
            <TextBox/>
            </div>
        )

    }
}

export default App;
