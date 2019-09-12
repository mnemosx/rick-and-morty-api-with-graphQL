import React from 'react';
import { SingleCharacter } from './components/SingleCharacter'
import { AllLocations } from './components/AllLocations'
import { Main as Characters } from './components/Characters'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { AllEpisodes } from './components/AllEpisodes';
import { SingleEpisode } from './components/SingleEpisode';
import { Header } from './components/Header';

const App: React.FC = () => {

  return (
    <Router>
      <ApolloProvider client={client}>

        <Header />
        <Switch>
        </Switch>
        <Route path="/" exact component={Characters} />
        <Route path="/characters/:id" component={SingleCharacter} />
        <Route path="/locations" component={AllLocations} />
        <Route path="/episodes" exact component={AllEpisodes} />
        <Route path="/episodes/:id" component={SingleEpisode} />
        <Footer />

      </ApolloProvider>
    </Router>
  );
}

export default App;
