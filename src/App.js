import React from 'react';
import logo from './img.png';
import './App.css';
import  Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class App extends React.Component{

  constructor(props){
      super(props);
      this.state={
        newItem: "",
        list : []
      }
  }  

  addItem(todoValue){
   if(todoValue !==""){
     const newItem = {
       id: Date.now(),
       value: todoValue,
       isDone: false
     };
     const list= [...this.state.list];
     list.push(newItem);

     this.setState({
       list,
       newItem: ""
     });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item=> item.id!==id);
    this.setState({
      list:updatedlist,
    });
  }

  updateInput(input){
    this.setState({newItem: input});
  }

  render(){
    return(
      <div className="con">
    <img src={logo} alt="React" width='150' height='150' className='logo' />
    <h1 className="app-title">WHAT TODO NEXT ?</h1>
    <div className="container">
        Add Events
        <br/><br/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" 
          type="text"
         className="input-text"
          placeholder="Write a TODO"
        required
        value={this.state.newItem}
        onChange={e=> this.updateInput(e.target.value)}
         />
       <Button variant="contained" color="primary"
       onClick={()=>this.addItem(this.state.newItem)}
       disabled={!this.state.newItem.length}>Add TODO</Button>
       <div className="list">
       
         <ol>
           
           {this.state.list.map((item) =>{
             return(
               <li key={item.id}>
                  <input
                      type="checkbox"
                       name="idDone"
                      checked={item.isDone}
                     onChange={()=>{}}
                      />
                      {item.value + "    "}
           <Button variant="contained" color="secondary"
           className="btn"
           onClick={()=>this.deleteItem(item.id)}
           >Delete</Button>
           <br/><br/>
                </li>
                
             )
           })}
          
         </ol>
       </div>
    </div>
    </div>)
  }
}

export default App;