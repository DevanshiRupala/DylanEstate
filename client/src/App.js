import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/index';
import Property from './pages/property';
import ThankYouPage from './pages/thank';
import Preview from './pages/preview';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/property" element={<Property />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
