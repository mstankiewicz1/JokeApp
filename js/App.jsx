import React from 'react';
import ReactDOM from 'react-dom';


class Index extends React.Component {

    state = {
        options: ["1", "2", "3", "4"],
        option: null,
        value: "",
    };

    handleShowOption = () => {
        const index = Math.floor(Math.random() * this.state.options.length);
        this.setState({
            option: this.state.options[index],
        })
    };


    handleWriteJoke = (e) => {
        this.setState({
            value: e.target.value,
        })
    };


    handleAddJoke = () => {
        if(this.state.value === "") {
            return alert("Wpisz coś");
        }
        const options = [...this.state.options];
        options.push(this.state.value);
        this.setState({
            options: options,
            value: "",
        })
    };


    render() {
        return (
            <div>
                <button onClick={this.handleShowOption}>Losuj żart</button>
                {this.state.option ? <h1>{this.state.option}</h1> : null }
                <br/>
                <input type="text" value={this.state.value} onChange={this.handleWriteJoke}/>
                <button onClick={this.handleAddJoke}>Dodaj żart</button>
                <br/>

            </div>
        )
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Index/>,
        document.getElementById('app')
    );
});