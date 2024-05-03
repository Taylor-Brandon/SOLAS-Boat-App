import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sign from './pages/sign';
import Home from './pages/home';
import Log from './pages/log';
import Results from './pages/results'; 
import Profile from './pages/profile';
import PDFViewer from './components/pdf/pdf';
import ShipsList from './components/ships/ships';
import UserList from './components/userList/users';
import AddUser from './components/userForm/userForm';
import EditUser from './components/editUser/edit';
import ChangeUser from './pages/changeUser';


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
          <Route path="/login" element={<Log />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shipsList" element={<ShipsList />} />
          <Route path="/pdf" element={<PDFViewer />} />
          <Route path="/ship/:shipId" element={<Results />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/user/:userId" element={<ChangeUser />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
