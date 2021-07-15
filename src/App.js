import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)
  const customers = useSelector(state=>state.customers.customers)

  const [name,setName] = useState('test')

  const addCustomer = (name) =>{

      const customer = {
          id:Date.now(),
          title:name,
          available:false
      }
      dispatch({type:'ADD_CUSTOMER',payload:customer})

  }

  return (
    <div className="App">
        <div>{cash}</div>
      <button onClick={()=>dispatch({type:'GET_CASH',payload:1})}>get</button>
      <button onClick={()=>dispatch({type:'ADD_CASH',payload:1})}>put</button>

        <h2>Users</h2>

        {customers.length ? customers.map(customer=><div>{customer.title} <button onClick={()=>dispatch({type:'REMOVE_CUSTOMER',payload:customer.id})}>x</button></div>) : <div>No users</div>}

        <button onClick={()=>addCustomer(prompt())}>add customer</button>
    </div>
  );
}

export default App;
