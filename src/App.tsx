import React from 'react';
import { Header } from './Header'
import { SingleCharacter } from './SingleCharacter'
import { AllLocations } from './AllLocations'
import { Main as Characters } from './Characters'
import { Footer } from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { AllEpisodes } from './AllEpisodes';
import { SingleEpisode } from './SingleEpisode';

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
