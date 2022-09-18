import React from 'react';
import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import PasswordReset from './components/PasswordReset/PasswordReset';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Claim from './components/Claim/Claim';
import Terms from './components/Terms/Terms';



const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));


  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={() => <redirect to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route path={['/creators/:name', '/tags/:name']} exact element={CreatorOrTag} />
         <Route path="/auth" exact element={() => (!user ? <Auth /> : <redirect to="/posts" />)} />
          <Route path="/claim" exact element={<Claim />} />
          <Route path="/termsandconditions" exact element={<Terms />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
          <Route path="/forgot-reset/:id/:token" exact element={<PasswordReset /> } />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;