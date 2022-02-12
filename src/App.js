import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import ArticlePage from './components/pages/ArticlePage';
import TopicPage from './components/pages/TopicPage';
import UserPage from './components/pages/UserPage';

import Navbar from './components/organisms/Navbar';
import Sidebar from './components/organisms/Sidebar';
import './style.css';

const Main = styled('main')`
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 0 1rem;

  @media(min-width:768px) {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 1rem;
  }
`;

const App = () => (
  <div>
    <Navbar />
    <Main>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/articles/:article_id' component={ArticlePage} />
          <Route path='/topics/:topic_id' component={TopicPage} />
          <Route path='/users/:username' component={UserPage} />
        </Switch>
      </div>
      <Sidebar />
    </Main>
  </div>
);

export default App;
