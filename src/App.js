
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';
import HelloWorldComponent from './components/HelloWorldComponent';
import Person from './components/Person/Person';
import UserComponent from './components/UserComponent';
function App() {

  const expenses=[
    {
      title:"Groceries",
      amount:900,
      date:new Date(2020,7,14)
    },
    {
      title:"New TV",
      amount:3400,
      date:new Date(2021,7,16)
    }
  ]


  return (
    <div className="App">
     <h2>Welcome </h2>

    <ExpenseItem expDate={expenses[0].date} expTitle={expenses[0].title}  expAmount={expenses[0].amount} />
    <ExpenseItem expDate={expenses[1].date} expTitle={expenses[1].title}  expAmount={expenses[1].amount} />
         </div>
  );
}

export default App;
