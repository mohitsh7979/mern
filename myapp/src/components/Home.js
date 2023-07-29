import React from 'react'

export default class Home extends React.Component{

    constructor(){

        super();
        this.state = {

            F_name :'Mohit',
            L_name : 'Sharma'
        }
    }

    updatestate(){

        this.setState({

            F_name:"Rohit"
        })
    }
  render()
  {

    const click = ()=>{

        alert("Hello Class Component !!!")
    }

     return(
         
        <div>
            <button onClick={()=>{this.updatestate()}}>Click Me</button>
            <h1>{this.state.F_name}</h1>
        </div>
     )
  }
}
