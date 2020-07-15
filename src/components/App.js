import React from 'react';

import nasaApod from '../apis/nasaApod';
import styles from './App.module.css';
import RandomImageButton from './RandomImageButton'

class App extends React.Component {

    state={}

    getTodaysPicture = async() => {
        let response = await nasaApod.get('apod?api_key=DEMO_KEY&date=2020-07-14')
        this.setState(response.data)
        console.log(this.state)
    }

    componentDidMount(){
        this.getTodaysPicture()
    }

    createRandomDate = () => {
        let m = Math.ceil(Math.random()*12).toString()
        let d = Math.ceil(Math.random()*28).toString()
        let y = this.createYear()
        if (m.length < 2) {
            m = "0" + m;
        }
        if (d.length < 2) {
            d = "0" + d;
        }
        let date = `${y}-${m}-${d}` 
        return date       
    }

    createYear = () => {
        let y = Math.ceil(Math.random() * 2020);
        if (y >= 1996) {
            return y.toString()
        } else {
            return this.createYear()
        }
    }

    getRandomDaysPicture = async() => {
        let response = await nasaApod.get(`apod?api_key=DEMO_KEY&date=${this.createRandomDate()}`)
        this.setState(response.data)
    }


    render(){
        return(
            <div className={styles.siteBackground}>
                <figure>
                    <div style={titleStyle}>{this.state.title} | {this.state.date}</div>
                    <section className={styles.container}>
                        <img alt={this.state.title} 
                            src={this.state.url} 
                            width="500px" 
                            height="625px"
                        />
                        <section className={styles.caption}>
                            <figcaption className={styles.caption}>
                                {this.state.explanation}
                            </figcaption>
                            <RandomImageButton getRandomDaysPicture={this.getRandomDaysPicture}/>
                        </section>
                    </section>
                </figure>
            </div>

        )
    }
}


const titleStyle = {
    fontSize: '40px'
}

export default App;