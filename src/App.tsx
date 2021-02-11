import React from 'react';
import './Styles/css/Amount.css';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Amount from './Components/Amount';
import AddTransaction from './Components/AddTransaction';
import Transaction from './Components/Transaction';
import {ExpenseProvider} from './Context/MyContext';
import {configureNotification} from './Services/FirebaseService'

function App() {

  configureNotification()
  return (
    <ExpenseProvider>
      <Header></Header>
      <Amount></Amount>
      <Transaction></Transaction>
      <AddTransaction></AddTransaction>
    </ExpenseProvider>
  );
}

export default App;
