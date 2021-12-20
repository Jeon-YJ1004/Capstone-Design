import {React,Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import {Layout} from 'antd';
import "../styles/main.css"
import Searching from '../components/searching';
import Result from '../components/result';
import MapContainer from '../components/cafe/Map'
import Content from '../components/content';
import Cafe_Info
    from './info/Cafe_info';
import styled from "styled-components";
import zero from "../assets/img/0.jpg";
import one from "../assets/img/1.jpg";
import two from '../assets/img/2.jpg';
import three from "../assets/img/3.jpg";
import four from "../assets/img/4.jpg";
import five from  "../assets/img/5.jpg";
import six from "../assets/img/6.png";


const {Header} = Layout;

// const { Title } = Typography;

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bgStyle : {
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }
        }
    }


    componentWillMount() {

        const pictureArray = [zero,one ,two ,three ,four ,five, six]

        const randomIndex = Math.floor(Math.random() * pictureArray.length);
        const selectedPicture = pictureArray[randomIndex];

        this.setState({
            bgStyle: {
                backgroundImage: `url(${selectedPicture})`,
                // backgroundImage: `url(${})`,

                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }
        })

    }


    render() {
        return (
            < div style={this.state.bgStyle} className="bg">
                <Switch>
                    <Route exact path="/info/:id"><Cafe_Info/></Route>

                    <Route exact path='/search/:gu/:place' render={() => <Result/>}/>

                    <Route path="/" render={() => <Searching/>}/>
                    {/* <Route render={() => <div className='error'>에러 페이지</div>} /> */}
                    <Content/>
                </Switch>


            </div>

        )
    }
}

export default Main;
 