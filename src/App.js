import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {


  const API_URL ="https://60b2206b62ab150017ae1b27.mockapi.io/meetup";

  const [list,setList]=useState([]);


  const addMeetup=async (title)=>{

    const data={title:title};
    setList(list=>[...list,data]);

    try{
    const response= await axios.post(API_URL,data);
    console.log(response); 
    
    }
    catch(err){

    }


   

  }

  const fetchMeetups=async ()=>{

    try{
      const response = await axios.get(API_URL);

    setList(response.data);

    }
  catch(err){
    console.log(err);
  }    

  }

  useEffect(()=>{
    fetchMeetups();

  },[]);

  




  return (
    <div className="App">
     <Header/>
     <Input addMeetup={addMeetup}/>
     <List data={list}/>
    </div>
  );
}

export default App;
