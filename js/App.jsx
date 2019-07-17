import React from 'react';
import ReactDOM from 'react-dom';


class Show extends React.Component {


    render() {
        return (
            <div>
                Hello Word
            </div>
        )
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Show/>,
        document.getElementById('app')
    );
});