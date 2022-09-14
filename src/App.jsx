import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IssueDetail, IssueList } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/issueList/:id" element={<IssueDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
