import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sign from './components/sign';
import Home from './components/home';
import Log from './components/log';
import Results from './components/results';
import Profile from './components/profile';
import PDFViewer from './components/pdf';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
      <Route path="/" element={<Sign />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Log  />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile  />} />
        <Route path="/pdf" element={<PDFViewer />} />
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;

