import React from 'react';

class App extends React.Component {
    render(){
        return(
            <div style={backgroundStyle}>I am a nasa app!</div>
        )
    }
}

const backgroundStyle = {
    backgroundColor: "black",
    textAlign: 'center',
    color: 'white'
}

export default App;