
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Chat from './Chat';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route exact path='/' element={< Login />}></Route>
      <Route exact path='/dashboard' element={< Dashboard />}></Route>
      <Route exact path='/chat' element={< Chat />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';
// import SimpleForm from './SimpleForm';
// import './App.css';

// const App = (props) => {
//   let [showChat, setShowChat] = useState(false);

//   const startChat = () => { setShowChat(true); }
//   const hideChat = () => { setShowChat(false); }

//     return (
//       <>
//       <div className = "header">
//         <h2>My Application!!!</h2>
//       </div>
//       <div className = "main">
//         <div className ="nav">
//           <h3>My Navigation</h3>
//         </div>
//         <div className ="content">
//           <div style = {{padding:"20px"}}>
//             <h1>Content of my application will go here.....</h1>
//             <p>Sample content to fill the gap as much as possible. Sample content to fill the gap as much as possible.
//             Sample content to fill the gap as much as possible.Sample content to fill the gap as much as possible.</p>
//             <p>More content to fill the available area of the main contect. More content to fill the available area of the main contect.
//             More content to fill the available area of the main contect.More content to fill the available area of the main contect. </p>
//           </div>
//         </div>
//       </div>
//       <div className = "footer">Footer</div>
//       <div className = "bot">
//         <div style ={{display: showChat ? "" : "none"}}>
//           <SimpleForm></SimpleForm>
//         </div>      
//         {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
//         <div>
//           {!showChat 
//             ? <button className="btn" onClick={() => startChat()}>click to chat... </button> 
//             : <button className="btn" onClick={() => hideChat()}>click to hide... </button>}
//         </div>
//       </div>      
//       </>
//     )
// }

// export default App;