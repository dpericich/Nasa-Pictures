import React from 'react';
import nasaApod from '../apis/nasaApod'
import styles from './App.module.css'

class App extends React.Component {

    state={}
    getNasaInformation = async() => {
        let response = await nasaApod.get('');
        this.setState(response.data)
        console.log(this.state)
    }

    componentDidMount(){
        this.getNasaInformation()
    }


    render(){
        return(
            <div className={styles.siteBackground}>
                <div>{this.state.title} | {this.state.date}</div>
                <img alt={this.state.title} 
                    src={this.state.url} 
                    width="425px" 
                    height="550px"
                />
                <figcaption>{this.state.explanation}</figcaption>
            </div>

        )
    }
}


export default App;