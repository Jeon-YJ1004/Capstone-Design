import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import {Layout} from 'antd';
// import { Typography } from '@mui/material';

// import GlobalStyle, { Container } from '../globalStyles';
import Bg from '../components/background';
import Searching from '../components/searching';
import Result from '../components/result';
import MapContainer from '../components/cafe/Map'
import Cafe_Info
    from './info/Cafe_info';

const {Header} = Layout;

// const { Title } = Typography;
function Main(props) {

    return (
        <div>

            <Switch>
                <Route exact path="/info/:id"/>
                <Route exact path='/search/:gu/:place' component ={Result} render={() => <MapContainer />}/>

                <Route path="/" render={() =><Searching/>}/>
                <Route render={() => <div className='error'>에러 페이지</div>} />

            </Switch>
            <Bg/>

        </div>

    )
}

export default Main;
 