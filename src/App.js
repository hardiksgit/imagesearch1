import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import validator from 'react-validation';

/*
const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};*/
 

function App() {
  const [value,setValue] = useState("")
  const [results,setresults] =useState([])
  
  //const [id,setId] = useState("")
  //naORmFo1HfkIPwCMCO(0WfC1iVfwGXKnORBmmZ773yBK8
  const fetchimages = ()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=naORmFo1HfkIPwCMCOWfC1iVfwGXKnORBmmZ773yBK8&query=${value}&orientation=squarish&per_page=${24}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setresults(data.results)
    })
  }

  

  
/*
    const imageClick = () => {
     
      
      fetch(`https://api.unsplash.com/photos/:id/statistics?client_id=naORmFo1HfkIPwCMCOWfC1iVfwGXKnORBmmZ773yBK8`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        console.log('Click')
        
      })
    } */


    /*function imageopen(num){
            

    }
*/




  return (
    <div className="App">

      
      <div className="mydiv">

      <button className="button" onClick={()=>fetchimages()}> search </button>
        <input
        style={{width:"60%"}}
        className="input"
        type="text" 
        placeholder="type here"
        
        onclick="onClick(this)" 
        
        value={value} 
        onChange={(e)=>setValue(e.target.value)}
        //validations={[required]}
        />
       
      </div>
      
      <div className="gallery">
        {
          results.map((item)=>{
            
            return <img className="item" 
                     // onclick={openmodal()}  
                      type="card" 
                      key={item.id}  src={item.urls.regular} width="320" height="320"
                      alt={item.alt_description}
                     />

  
      
    
     
      

                      

                     

                     
            
          })
        }
        

       

      

      </div>

                    
        
      
    </div>
  );
}

export default App;
