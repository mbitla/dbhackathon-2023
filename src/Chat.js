import React, { useState, useEffect } from 'react';
import ChatBot from "react-simple-chatbot";
import axios from 'axios';
import Dashboard from './Dashboard';
import { useLocation } from "react-router-dom";

export default function Chat() {

  let [showChat, setShowChat] = useState(false);
  let [getResult, setResult] = useState(null);
  const [location, setLocation] = useState({ longitude: null, latitude: null });
  const state   = useLocation();

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

  const showPosition = position => {
    console.log("position");
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // setLocation({ longitude: longitude, latitude: latitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
    
    // axios
    // .get('http://ip-api.com/json')
    // .then((response) => {
    //     console.log("location successfully...", response.data);
    //     setLocation(response.data);
    // });
  };

  const showError = err => {
    console.log("err");
    console.log(err.message);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  }, []);

  
  const getChatResult = () => { 
    // call text to sentiment api here
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
        console.log("response successfully...", response.data);
        setResult(response.data);
    });
  }

  return (
    <div className="App" style= {{ 'overflow-y':'scroll' }}>
       <div><div id="mySidenav" class="sidenav">
<p class="logo"></p>
<a href="#" class="icon-a"><i class="fa fa-dashboard icons"></i>   Dashboard</a>
<a href="#"class="icon-a"><i class="fa fa-users icons"></i>   Customers</a>
<a href="#"class="icon-a"><i class="fa fa-list icons"></i>   Products</a>
<a href="#"class="icon-a"><i class="fa fa-shopping-bag icons"></i>   Orders</a>
<a href="#"class="icon-a"><i class="fa fa-tasks icons"></i>   Inventory</a>
<a href="#"class="icon-a"><i class="fa fa-user icons"></i>   Accounts</a>
<a href="#"class="icon-a"><i class="fa fa-list-alt icons"></i>   Tasks</a>

</div>
<div id="main">

<div class="head">
  <div class="col-div-6">
<span style={{ fontSize:'30px', cursor:'pointer', color: 'white'}}>Invest-AI-sist</span>
{/* <span style={{fontSize:'30px', cursor:'pointer', color: 'white'}} class="nav2"  >☰ Dashboard</span> */}
</div>

<div class="col-div-6">
<div class="profile" style={{ fontSize:'30px', cursor:'pointer', color: 'white'}}>
  <p>Hello, warroom</p>
  <p>Pune, Maharashtra</p>
</div>
</div>
<div class="clearfix"></div>
</div>

<div class="clearfix"></div>
<br/>

<div class="col-div-3">
  <div class="box">
    <p>67<br/><span>Consumers</span></p>
    <i class="fa fa-users box-icon"></i>
  </div>
</div>
<div class="col-div-3">
  <div class="box">
    <p>80<br/><span>Products</span></p>
    <i class="fa fa-list box-icon"></i>
  </div>
</div>
<div class="col-div-3">
  <div class="box">
    <p>99<br/><span>Orders</span></p>
    <i class="fa fa-shopping-bag box-icon"></i>
  </div>
</div>
<div class="col-div-3">
  <div class="box">
    <p>78<br/><span>Reviews</span></p>
    <i class="fa fa-tasks box-icon"></i>
    <i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
  </div>
</div>
<div class="clearfix"></div>
<br/>
<div class="col-div-8">
  <div class="box-8">
  <div class="content-box">
    <p>Top Recommended Products</p>
    {/* <br/> */}
    <table>
<tr>
  <th>Product</th>
  <th>Description</th>
  <th>Reviews</th>
</tr>
<tr>
  <td>Alfreds Futterkiste</td>
  <td>Maria Anders</td>
  <td> <i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
    </td>
</tr>
{getResult ? <><tr>
  <td>Centro comercial Moctezuma</td>
  <td>Francisco Chang</td>
  <td><i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star " aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i></td>
</tr>
<tr>
  <td>Ernst Handel</td>
  <td>Roland Mendel</td>
  <td><i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
            <i class="fa fa-star-o stars-active" aria-hidden="true"></i>
            <i class="fa fa-star-o stars-active" aria-hidden="true"></i></td>
</tr>
<tr>
  <td>Island Trading</td>
  <td>Helen Bennett</td>
  <td><i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
  <i class="fa fa-star stars-active" aria-hidden="true"></i>
            <i class="fa fa-star-o stars-active" aria-hidden="true"></i>
            <i class="fa fa-star-o stars-active" aria-hidden="true"></i></td>
</tr> </>: null }


</table>
  </div>
</div>
</div>

<div class="col-div-3">
  <div class="box-4">
  <div class="content-box">
    <p>Total Sale</p>

    <div class="circle-wrap">
  <div class="circle">
    <div class="mask full">
      <div class="fill"></div>
    </div>
    <div class="mask half">
      <div class="fill"></div>
    </div>
    <div class="inside-circle"> 70% </div>
  </div>
</div>
  </div>
</div>
</div>

</div>
       </div>
      
       <div className = "bot">
       <div style ={{display: showChat ? "" : "none"}}>
       <ChatBot
          handleEnd={getChatResult}
          steps={[
            {
                id: '1',
                message: 'Hi I am Invest-AI-sist, your virtual assistant to help you with your queries',
                trigger: 'name',
              },
              {
                id: 'name',
                user: true,
                trigger: 'end-message',
              },
            //   {
            //     id: 'end-message',
            //     component: <ChatSearch getChatResult={getChatResult}/>,
            //     waitAction: true,
            //     trigger: 3,
            //   },
              {
                id: 'end-message',
                message: 'Thank you for your query!! Our representative will contact you soon.',
                end: true
              },
          ]}
        />
        </div> 


        {/* <div style={{ marginLeft: '64%'}}>
        <span class="fa-stack fa-lg">
          <i class="fa fa-microphone fa-stack-1x fa-inverse" style={{'--fa-stack-z-index': '2'}}></i>
          <i class="fa-solid fa-circle fa-stack-2x" style={{'--fa-stack-z-index': '1', color :'#1da1f2'}}></i>
        </span>
        <div class="" style={{color: 'white'}}>Voice Bot</div> */}

        {/* </div>  */}
        <div>
           {!showChat 
             ?
            <div style={{ marginLeft: '46%'}}> 
              <div class="centered">Chat</div>
              <img class="user" onClick={() => startChat()} src="https://i.ibb.co/yVGxFPR/2.png" height="60px" width="60px"/> 
            </div> 
             : <button className="btn" style={{backgroundColor:'#272c4a', color: 'white'}}onClick={() => hideChat()}>click to hide... </button>}
    </div>
    <Dashboard setResult={setResult}></Dashboard>
  </div>
</div>
  );
}
