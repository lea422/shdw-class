import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Notice from './pages/Notice';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/notice/*" element={<Notice />} />
          </Routes>
        </MainContent>
        <Footer />
        <SideDrawer />
      </AppContainer>
    </Router>
  );
}

export default App; 