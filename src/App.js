import React, { Component } from 'react'
import "./css/main.css"
import Card from './components/Card'
import Loader from './components/Loader'
import getInfo from './Services/getInfo'
export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      info : null,
      isLoad : true
    }
  }
  componentDidMount(){
    getInfo().then((res)=>{
      this.setState({
        info : res ,
        isLoad : false
      })
    })
  }
  render() {
    return (
   <>
   {this.state.isLoad ? <Loader/> :  <Card info = {this.state.info}/>}
   </>
    )
  }
}
export default App