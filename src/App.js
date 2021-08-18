import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import CharacterById from './components/characters/CharacterById';
import EpisodeById from './components/episodes/EpisodeById';

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
                        <Route path="/character/:id">
                            <CharacterById characters={characters} />
                        </Route>
                        <Route path="/episode/:id">
                            <EpisodeById episodes={episodes} />
                        </Route>
                    </Switch>
                </Router>
            </EpisodesContext.Provider>
        </CharactersContext.Provider>
    );
}
