import React from 'react';
import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, useState } from "react";


export default function Dashboard({setResult}) {

  const [Mp3Recorder, setMp3Recorder] = useState(
    new MicRecorder({ bitRate: 128 })
  );
  const [isRecording, setRecording] = useState(false);
  const [blobURL, setBlobURL] = useState([]);
  const [isBlocked, setBlocked] = useState(false);
  const [uuid, setUUID] = useState(false);

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setBlocked(false);
        // this.setState({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        setBlocked(true);
        // this.setState({ isBlocked: true })
      }
    );
  }, []);

  const start = () => {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setRecording(true);
        })
        .catch((e) => console.error(e));
    }
  };

  const getUUID = () => {
      return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

   const uploadFile = async () => {
    console.log("blob url", blobURL);
    
    const audioBlob = await fetch(blobURL).then((r) => r.blob());
     
    console.log("audioBlob", audioBlob);

    const audiofile = new File([audioBlob], "audiofile.mp3", {
      type: "audio/mp3",
    });
    
    const formData = new FormData();
    
    formData.append("file", audiofile);
      
    // console.log("blob url", blobURL);
     let uuid = getUUID();
     console.log("printing uuid", uuid);
      fetch('https://storage.googleapis.com/upload/storage/v1/b/hack-voice-bucket/o?uploadType=media&name=' + uuid, {
        method: 'POST',
        headers: {
          'Content-Type': "audio/mp3",   
          'Authorization': 'Bearer ya29.a0AbVbY6PHdQsWvZYzPkcuS3wjc2EPoA8VdL4wn1MoRW9DdByKb1rALKjDtqX61_8OmUJlDEFAokP_xRljDDGmJvWci0seS1-TJQ9cts3JkeYcT4Yw2_-clQHiJgqxeaoGU-Rj1lF0estLmcISFfVrIQIO_EZ_aCgYKAdASARASFQFWKvPlvli88VW20SKFdiXpbBBvDA0163',
        },
        body: formData,
  })
        .then(response => 
          {
          alert('Your input was recorded and sent to the concerned team');
          setResult(response);
        }
          )
        .catch(error => console.log(error));
    };

    
  useEffect(() => {
    if(blobURL.length != 0)
      uploadFile();

 }, [blobURL]);

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setRecording(false);
        console.log("bobl url" , blobURL);
        console.log("buffer", buffer)
        setBlobURL(blobURL);

      })
      .catch((e) => console.log(e));
  };
    
  return   <div style={{ marginLeft: '65%'}}>
  <span class="fa-stack fa-lg">
    <a href="#" className={ isRecording ? "hiddenTab": ''}onClick={start} disabled={isRecording}>
    <i class="fa fa-microphone fa-stack-1x fa-inverse" style={{'--fa-stack-z-index': '2'}}></i>
    <i class="fa-solid fa-circle fa-stack-2x" style={{'--fa-stack-z-index': '1', color :'#1da1f2'}}></i>
    </a>
    <a href="#" className={ !isRecording ? "hiddenTab": ''}onClick={stop} disabled={!isRecording}>
    <i class="fa fa-microphone fa-stack-1x fa-inverse" style={{'--fa-stack-z-index': '2', color :'black'}}></i>
    <i class="fa-solid fa-circle fa-stack-2x" style={{'--fa-stack-z-index': '1'}}></i>
    </a>
  </span>
  <div class="" style={{color: 'white'}}>{isRecording ? "Listening.." : "Voice" }</div>
</div>
}
  {/* // return <div style={{ position: 'absolute', 
  //                         background: '#000000',
  //                         height: '100%',
  //                         width: '100%'}}> 
  // <div class="dash" >
  //   <h3>Input your query here</h3>
  //           <input class="form-box" type="text" name="search"/>
  //           <a href="#" className={ isRecording ? "hiddenTab": ''}onClick={start} disabled={isRecording}>
  //             <i class="fa fa-microphone fa-lg" style={{color: 'black'}}></i>
  //           </a>
  //           <a href="#"  className={ !isRecording ? "hiddenTab": ''}  onClick={stop} disabled={!isRecording}>
  //             <i class="fa fa-microphone fa-lg"></i>
  //           </a>
  //           <audio src={blobURL} controls="controls" />
  // <img src="https://police.un.org/sites/default/files/radio-microphone.png" id="google-mic" alt="microphone"/>
  // </div></div>*/}

