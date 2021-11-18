import React, { Container,useEffect, useState } from 'react';
import { Switch ,Route } from 'react-router-dom';
import axios from 'axios';
import { Layout } from 'antd';

import Bg from '../components/background';
import Searching from '../components/searching';
import Content from '../components/Content';
import Cafe_Info
 from './info/cafe_info';
const { Header, Sider } = Layout;

function Main(){

  return(
    <div>
      <Header>
      sweetRoad
      </Header>

      <Switch>
        <Route exact path="/" render={()=>(
          <Layout>
          <Content /></Layout>)}
          />
      </Switch>
     
    </div>
    
  )
}
export default Main;
 