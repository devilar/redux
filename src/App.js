import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)

  return (
    <div className="App">
        <div>{cash}</div>
      <button onClick={()=>dispatch({type:'GET_CASH',payload:1})}>Снять со счета</button>
      <button onClick={()=>dispatch({type:'ADD_CASH',payload:1})}>Пополнить счет</button>

    </div>
  );
}

export default App;
