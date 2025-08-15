// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';

import StudentDashboard from './Modules/StudentDashboard';
import SubjectSummary from './Modules/SubjectSummary';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/subject-summary/:subject" element={<SubjectSummary />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;