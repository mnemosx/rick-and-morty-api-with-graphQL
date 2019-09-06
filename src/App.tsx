import React from 'react';
import { Header } from './Header'
import { SingleCharacter } from './SingleCharacter'
import { Main as Characters } from './Characters'
import { Footer } from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>

        <Header />
        <Switch>
          <Route path="/" exact component={Characters} />
          <Route path="/characters/:id" component={SingleCharacter} />
        </Switch>
        <Footer />

      </ApolloProvider>
    </Router>
  );
}

export default App;
