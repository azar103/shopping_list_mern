import React from 'react';
import './App.css';
import { Button, Alert, Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';

function App() {
  return (
    <Provider store={store}>
     <NavBar />
      <Container>
       <ItemModal />
       <ShoppingList />
       </Container>  
    </Provider>
  );
}

export default App;
