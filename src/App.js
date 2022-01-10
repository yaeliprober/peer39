import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import EpisodeList from './components/episodeList/episodeList';
import Episode from './components/episode/episode';
import Character from './components/character/character';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path='/episode' element={<Episode />} />
        <Route path='/character' element={<Character />} />
          <Route path='/' element={<EpisodeList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;