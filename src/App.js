import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
const studentNames = ['emma','lima','sima','salma','kulsum']
const products = [
  {name : 'PhotoShop',price:'$56.00'},
  {name : 'Illustrator',price:'$34.80'},
  {name : 'PDF Reader',price :'$54.00'},
  {name : 'PhotoShop2',price:'$56.00'}
 

]

  return (
    <div className="App">
      <header className="App-header">
       <Counter></Counter>
       <Users></Users>
       
       <ul>
             {
               studentNames.map(studentNames=><li>{studentNames}</li>)
             }
    
        </ul> 
        
             {
                products.map(product => <Product product={product}></Product>)
             }

      </header>
    </div>
  );
}
function Counter() {
  const [count,setCount] = useState(0);
  //const HandleIncrease = () => setCount(count+1);
  

  return(
<div>
  <h1>COUNT  : {count} </h1>
  <button onClick={()=> setCount(count-1)}>Decrease</button>
  <button onClick ={() => setCount(count+1)}>Increase</button>
 
</div>

  )
}

function Users() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic User :{users.length}</h3>
    </div>
  )
}

  function Product(props) {
    const ProductStyle ={
      border:'1px solid gray',
      borderRadius :'5px',
      backgroundColor :'lightGray',
      height :'200px',
      weight :'400px',
      float : 'left'

    }

    return(
      
     <div style={ProductStyle}>
        <h6>{props.product.name}</h6>
        <h4>{props.product.price}</h4>
        <button>Buy now</button>      
     </div>
  )
   
  }
 
  


export default App;
