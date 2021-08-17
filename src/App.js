import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

import CharactersContext from './contexts/CharactersContext';
import EpisodesContext from './contexts/EpisodesContext';

export default function App() {
    const [characters, setCharacters] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    return (
        <CharactersContext.Provider value={{ characters, setCharacters }}>
            <EpisodesContext.Provider value={{ episodes, setEpisodes }}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </EpisodesContext.Provider>
        </CharactersContext.Provider>
    );
}
