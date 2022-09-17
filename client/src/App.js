import React from 'react';
import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Claim from './components/Claim/Claim';
import Terms from './components/Terms/Terms';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import PasswordReset from './components/PasswordRest/PasswordReset';



const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));


  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route path={['/creators/:name', '/tags/:name']} exact element={CreatorOrTag} />
          <Route path="/auth" exact element={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
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