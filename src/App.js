import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import Title from './components/Title.js';
import PostController from './components/PostController.js';
import DisplayBlogs from "./components/DisplayBlogs.js";

const url = 'https://jsonplaceholder.typicode.com/posts';
class App extends React.Component {
  state = {
    blogs : []
  }

  
  getBlogs = async () => {
    const api_call = await fetch(url);
    const data = await api_call.json();
    console.log(data)
    this.setState({
      blogs : data
    });
  }
  componentDidMount() {
    this.getBlogs();
   }
  render() {
    return (
      
        <div>
        <div>
        <ul>
          {this.state.blogs.map((ele)=>{
            return(
              <li key = { ele.id } > {ele.title}</li>
            );
          })}
          </ul>
        </div>
        </div>
      
    );
  }
};
export default App;

