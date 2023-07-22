import React, { useState, useEffect } from 'react';
import { Loading } from 'react-simple-chatbot';
import axios from "axios";

const ChatSearch = ( { triggerNextStep, getChatResult })  => {

  const [state, setData] = useState({ loading: true,
    result: '',
    trigger: false
  });
  
  
  useEffect(() => {
    console.log("useEffect next...");
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
        console.log("response successfully...");
        setData({ loading: false  });
        triggerNextStep();
        getChatResult(response);
        // triggerNext();
       
    });
  },[])

//   const triggerNext = () => {
//     triggerNextStep();
//     getChatResult();
//   }

  const { loading, trigger, result } = state;

    return (
      <div className={ !loading ? 'displayNone': null }>
        { loading ? <Loading /> : result }
        {
          !loading && <div style={{ display: 'none'}}></div>
        //   <div
        //     style={{
        //       textAlign: 'center',
        //       marginTop: 10,
        //     }}
        //   >
        //     Data received
        //   </div>
        }
        
      </div>
    );
}


export default ChatSearch;