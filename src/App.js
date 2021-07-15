import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";
import {incrementCreator, decrementCreator, AsyncIncrementCreator, AsyncDecrementCreator} from "./store/countReducer";

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state=>state.cash.count)
  const customers = useSelector(state=>state.customers.customers)

  const [name,setName] = useState('test')

  const addCustomer = (name) =>{

      const customer = {
          id:Date.now(),
          title:name,
          available:false
      }
      dispatch(addCustomerAction(customer))

  }

  return (
    <div className="App">
        <div>{count}</div>
      <button onClick={()=>dispatch(AsyncDecrementCreator())}>get</button>
      <button onClick={()=>dispatch((AsyncIncrementCreator()))}>put</button>

        <h2>Users</h2>

        {customers.length ? customers.map(customer=><div>{customer.name} <button onClick={()=>dispatch(removeCustomerAction(customer.id))}>x</button></div>) : <div>No users</div>}

        <button onClick={()=>addCustomer(prompt())}>add customer</button>
        <button onClick={()=>dispatch(fetchCustomers())}>add many customers</button>
    </div>
  );
}

export default App;
