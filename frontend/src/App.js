// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import LogPage from './pages/LogPage';

// If your schema requires SHORT data input, then use the TABLE design.
import EditDrugPageTable from './pages/EditDrugPageTable';
import AddDrugPageTable from './pages/AddDrugPageTable';

// Define the function that renders the content in Routes, using State.
function App() {
  const [drugToEdit, setDrugToEdit] = useState(null);

  return (
    <BrowserRouter>
      <header>
        <h1>Aden Badua</h1>
        <p>Efficiently manage your drug inventory with our intuitive system. Track stock levels, update drug details, and stay informed on expiration dates—all in one place.</p>
      </header>

      <Navigation />

      <main>
        <section>
          <Routes>
            {/* Add Routes for Home, Topics, and Drugs Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/drugs" element={<LogPage setDrugToEdit={setDrugToEdit} />} />
            <Route path="/create" element={<AddDrugPageTable />} />
            <Route path="/update" element={<EditDrugPageTable drugToEdit={drugToEdit} />} />
          </Routes>
        </section>
      </main>

      <footer>
        &copy; 2024 Aden Badua
      </footer>
    </BrowserRouter>
  );
}

export default App;
