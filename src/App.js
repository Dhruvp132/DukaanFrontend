import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Sidebar from './components/Sidebar.js'
import MainContent from './components/MainContent.js';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} closeNav={closeNav} />
        <MainContent openNav={openNav} />
      </div>
    </>
  );
}

export default App;