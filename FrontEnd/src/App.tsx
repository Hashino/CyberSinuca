import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import Error from './pages/Error';
import HistoryMatches from './pages/HistoryMatches';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import UserProfile from './pages/UserProfile';

//const AuthenticatedUser = createContext<UserContextProps | undefined>(undefined);

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/matches" element={<HistoryMatches />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
