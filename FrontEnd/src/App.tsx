import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import Error from './pages/Error';
import History from './pages/History';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import UserProfile from './pages/UserProfile';
import PushNotificationCard from './components/cards/PushNotificationCard';
import { testMatch } from './types/match';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/matches" element={<History />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <PushNotificationCard match={testMatch} />
    </UserProvider>
  );
}

export default App;
