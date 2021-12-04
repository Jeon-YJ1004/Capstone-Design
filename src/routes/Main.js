import React, {useEffect, useState } from 'react';
import { Switch ,Route } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'antd';
// import { Typography } from '@mui/material';

// import GlobalStyle, { Container } from '../globalStyles';
import Bg from '../components/background';
import Searching from '../components/searching';
import Content from '../components/content'
import Cafe_Info
 from './info/Cafe_info';

const { Header} = Layout;
// const { Title } = Typography;
function Main(props){

  return(
    <div>
      <Header>
        SweetRoad
      </Header>
      
      <Switch>
        <Route exact path="/info/:id" />
        <Route path="/" render={()=>(
          <Layout>
            <Searching/>
            <Content />
          </Layout>
          )}
          />
{/* 
          <Route path='/search/:place'component={Searching} exact /> */}
          
      </Switch>
      
    </div>
    
  )
}
export default Main;
 