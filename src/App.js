import './App.css';
import Header from './components/header/header';
import Expense from './components/expense/Expense'


function App() {
  return (
    <div>
      <Header title="Watch my wallet" />
      <Expense/>
    </div>
  );
}

export default App;
