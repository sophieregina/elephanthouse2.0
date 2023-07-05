import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Elephanthouse.jsx';
import { CP } from './copyright.js'
import { UB } from './about.js'

export default function App() {
  //UseRef
  const cameraRef = useRef();
  const controlsRef = useRef();
  const canvasRef = useRef();
  const audioRefOutdoor = useRef(null);
  const audioRefIndoor = useRef(null);
  //UseState
  const [elephanthouse, setElephanthouse] = useState(true);
  const [copyright, setCopyright] = useState(false);
  const [about, setAbout] = useState(false);
  const [footer, setFooter] = useState(false);
  const [modelPosition, setModelPosition] = useState([20,-15,5]);
  const [elephantOn, setElephantOn] = useState(true);
  const [cameraMovement, setCameraMovement] = useState(true);
  const [light, setLight] = useState(1);
  const [backWall, setBackWall] = useState(false);
  const [leftWall, setLeftWall] = useState(false);
  const [rightWall, setRightWall] = useState(false);
  const [outdoor, setOutdoor] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [kevinVideoPW, setKevinVideoPW] = useState(false);
  const [kevinVideoLW, setKevinVideoLW] = useState(false);
  const [kevinVideoRW, setKevinVideoRW] = useState(false);
  const [playing, setPlaying] = useState(false); //really needed?
  

  //footer: functions to set footer, about and copyright state variables to true 
  const showCopyright = () => { 
    //sets copyright and footer state variable to true and all the others to false
    setElephanthouse(false);
    setAbout(false);
    setCopyright(true);
    setFooter(true);
  }
  const showAbout = () => { 
    //sets about and footer state variable to true and all the others to false
    setElephanthouse(false);
    setCopyright(false);
    setFooter(true);
    setAbout(true);
  }
  //3D-Modell Menu: functions to enable and disable elephant(menu) state variable
  const hideElephant = () => {
    setElephantOn(false);
  };
  const showElephant = () => {
    setElephantOn(true);
    insideButton();
  };

  //child to parent functions: functions which are passed to the elephanthous.jsx, where their attributes get changed an send back to the App.js 
  const BWchildToParent = (BWchilddata) => { 
    //gets click-acitivity on back wall from elephanthouse.jsx to App.js
    setBackWall(BWchilddata);
    insideButton(); //set state to the inside viewer point 
  };
  const LWchildToParent = (LWchilddata) => { 
    //gets click-acitivity on left wall from elephanthouse.jsx to App.js
    // setBackWall(BWchilddata); NEEDED?
    setLeftWall(LWchilddata);
    insideButton(); //set state to the inside viewer point 
  };
  const RWchildToParent = (RWchilddata) => { 
    //gets click-acitivity on right wall from elephanthouse.jsx to App.js
    setRightWall(RWchilddata);
    insideButton(); //set state to the inside viewer point 
  };
  const MenuchildToParent = (Menuchilddata) => { 
    //checks if menu(elephant) should be on or off 
    setElephantOn(Menuchilddata);
  }
  const LoadingChildtoParent = (Loadingchilddata) => { 
    //checks if 3D-Model has finished loading in elephanthous.jsx
    setIsLoading(Loadingchilddata);
  };
  const LightChildToParent = (Lightchilddata) => { 
    //sets light in the elephanthouse depending on the current exhibition
    setLight(Lightchilddata);
  }
  const KevinVideoPWChildToParent = (KevinVideoPWchilddata) => { 
    //gets click-activity on the play symbol on the poster wall to load Kevin Pinsemberts videos 
    setPopup(KevinVideoPWchilddata);
    setKevinVideoLW(false);
    setKevinVideoRW(false);
    setKevinVideoPW(KevinVideoPWchilddata);
  } 
  const KevinVideoLWChildToParent = (KevinVideoLWchilddata) => { 
    //gets click-activity on the play symbol on the left wall to load Kevin Pinsemberts videos
    setPopup(KevinVideoLWchilddata);
    setKevinVideoPW(false);
    setKevinVideoRW(false);
    setKevinVideoLW(KevinVideoLWchilddata);
  } 
  const KevinVideoRWChildToParent = (KevinVideoRWchilddata) => { 
    //gets click-activity on the play symbol on the right wall to load Kevin Pinsemberts videos
    setPopup(KevinVideoRWchilddata);
    setKevinVideoLW(false);
    setKevinVideoPW(false);
    setKevinVideoRW(KevinVideoRWchilddata);
  }

  //App Menu
  const outsideButton = () => { 
    //sets camera and model position, light and the according background noise to the viewers state outside the building
    setOutdoor(true);
    backgroundNoiseOutdoorOn();
    cameraRef.current.position.set(15,10,120);
    setModelPosition([20,-15,5]);
    setCameraMovement(true);
    controlsRef.current.target.set(0, 0, 0);
  };
  
  const insideButton = () => { 
    //sets camera and model position, light and the according background noise 
    //to the viewers state inside the building
    setOutdoor(false);
    backgroundNoiseIndoorOn();
    cameraRef.current.position.set(0, 0, 50);
    setModelPosition([25, -25, 30]);
    setCameraMovement(true);
    controlsRef.current.target.set(0, 0, 0);
  };
  const posterWallButton = () => { 
    //sets camera and model position, light and the according background noise 
    //to the viewers state in front of the posterwall
    setOutdoor(true);
    backgroundNoiseOutdoorOn();
    cameraRef.current.position.set(-120,2,20);
    setModelPosition([-0, -22, 25]); 
    controlsRef.current.target.set(0, 0, 0);
    setCameraMovement(true);
  };
  const back = () => { 
    // back button for the two sites "copyright" and "about"
    setCopyright(false);
    setAbout(false);
    setFooter(false);
    setElephanthouse(true);
  }
  
  // navigation inside the elephanthouse
  useEffect (()=> { 
    if (backWall){ 
      //sets camera and model position to the viewers state in front of the back wall 
      cameraRef.current.position.set(4, 0, 30);
      setModelPosition([20, -25, 90]);
      setCameraMovement(true);
      controlsRef.current.target.set(0, 0, 0);
      setElephantOn(false); //disables 3D-Modell Menu 
      setBackWall(false); //set back wall to false again 
    }
    else if (leftWall){ 
      //sets camera and model position to the viewers state in front of the left wall 
      cameraRef.current.position.set(13, 0, -1.7);
      setModelPosition([20, -25, 30]);
      setCameraMovement(true);
      controlsRef.current.target.set(0, 0, 0);
      setElephantOn(false); //disables 3D-Modell Menu 
      setLeftWall(false); //set left wall to false again 
    }
    else if (rightWall){ 
      //sets camera and model position to the viewers state in front of the right wall 
      cameraRef.current.position.set(-5, 0, 0.7);
      setModelPosition([20, -25, 30]);
      setCameraMovement(true);
      controlsRef.current.target.set(0, 0, 0);
      setElephantOn(false); //disables 3D-Modell Menu 
      setRightWall(false); //set right wall to false again 
    }
  }, [backWall, leftWall, rightWall, elephantOn]);


//Sound: functions for noise and sound
  const SoundOff = () => { 
    //sets background noises off with click on the sound symbol
    backgroundNoiseOutdoorOff();
    backgroundNoiseIndoorOff();
    setPlaying(false);
  }
  const SoundOn = () => { 
    //sets background noises on with click on the sound symbol
    if (outdoor) { 
      backgroundNoiseOutdoorOn();
      setPlaying(true);
    }
    else { 
      backgroundNoiseIndoorOn();
      setPlaying(true);
    }
  }
  const backgroundNoiseOutdoorOn = () => { 
    //plays outdoor background noises if outdoor state is on
    backgroundNoiseIndoorOff(); 
    audioRefOutdoor.current.play();
    setPlaying(true);
  };
  const backgroundNoiseOutdoorOff = () => { 
    //stops playing outdoor sound
    audioRefOutdoor.current.pause(); 
    audioRefOutdoor.current.currentTime = 0;
    setPlaying(false);
  };
  const backgroundNoiseIndoorOn = () => { 
    //plays indoor background noises if indoor state is on
    backgroundNoiseOutdoorOff();
    audioRefIndoor.current.play();
    setPlaying(true);
  }
  const backgroundNoiseIndoorOff = () => { 
    // stops playing indoor sound
    audioRefIndoor.current.pause();
    audioRefIndoor.current.currentTime = 0;
    setPlaying(false);
  }

//Popups for video player
  const closePopup = () => {
    setPopup(false);
  }


  return (
    <div className="App">
        <div className="menu">
          {elephanthouse && 
          <div className='menu_elephanthouse'>
          {outdoor &&
          <span className="menuButton" onClick={insideButton}>eintreten</span>}
          {!outdoor &&
          <span className="menuButton" onClick={outsideButton}>verlassen</span>}
          <span className="menuButton" onClick={posterWallButton}>zur plakatwand</span>
          {elephantOn &&
          <span className="menuButton" onClick={hideElephant}>menü aus</span>}
          {!elephantOn &&
          <span className="menuButton" onClick={showElephant}>menü</span>}
          <div className="Sound Onclicks">
            <span onClick={() => SoundOn()} className={playing ? 'disabled' : ''}>
              {!playing &&
              <img className="menuButton" src={process.env.REACT_APP_BASEURL + 'images/play.png'} width={40} height={40} alt="play"/>}
            </span>
            <span onClick={() => SoundOff()} className={playing ? 'disabled' : ''}>
              {playing &&
              <img className="menuButton" src={process.env.REACT_APP_BASEURL + 'images/pause.png'} width={40} height={40} alt="pause" />}
            </span>
            <audio loop ref={audioRefOutdoor} src= {process.env.REACT_APP_BASEURL + "sounds/Elephanthouse-frontseite.mp3"}/>
            <audio loop ref={audioRefIndoor} src={process.env.REACT_APP_BASEURL + "sounds/elephanthouse-innen.mp3"}/>
          </div>
          </div>}
          {footer &&
          <span className="menuButton" onClick={() => back()}>Zurück zum Elephanthouse</span>}
        </div>
        {elephanthouse &&
        <div className="3DModel"> 
        {isLoading &&
          <div className="loadingSign">
            <img src= {process.env.REACT_APP_BASEURL + "images/crane.gif"} width="100px" alt="Crane animated icons created by Freepik - Flaticon"/>
            <p>Elephanthouse wird gebaut...</p>
            </div>
          }
        <Canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%' }}
          camera={{ position: [15,10,120] }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
        >
        {/* //load 3D-Model (Elephanthouse.jsx) */}
        <Model position={modelPosition} elephantOn={elephantOn} playing={playing}
          BWchildToParent={BWchildToParent} 
          LWchildToParent={LWchildToParent} 
          RWchildToParent={RWchildToParent}
          MenuchildToParent={MenuchildToParent}
          LoadingChildtoParent={LoadingChildtoParent}
          LightChildToParent={LightChildToParent}
          KevinVideoPWChildToParent={KevinVideoPWChildToParent}
          KevinVideoLWChildToParent={KevinVideoLWChildToParent}
          KevinVideoRWChildToParent={KevinVideoRWChildToParent}
        />
        <OrbitControls ref={controlsRef} camera={cameraRef.current} enabled={cameraMovement}/>
        <ambientLight intensity={light} />
        </Canvas>
        </div>}
        {copyright&&
        // load copyright.js
        <CP></CP>}
        {about === true &&
        // load about.js
        <UB></UB>}
        <div className='footer'>
          <span className="menuButtonFooter" itemID='copyright' onClick={() => showCopyright()}>Copyright</span>
          <span className="menuButtonFooter" itemID='about' onClick={() => showAbout()}>Über dieses App</span>
        </div>
        {popup &&
        <div className="popup">
          <button class="Onclicks" onClick={() => closePopup()}>x</button>
          <div className="popup-video" width="650" height="380" controls>
          {kevinVideoPW &&
            <iframe className="video" src="https://www.youtube.com/embed/N9FwXGQi4Zw?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen allowautoplay></iframe>}
          {kevinVideoLW  &&
            <iframe className="video" src="https://www.youtube.com/embed/9tWbYjn7lRw?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen allowautoplay></iframe>}
          {kevinVideoRW  &&
            <iframe className="video" src="https://www.youtube.com/embed/yUnt8bF0bt4?autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen allowautoplay></iframe>}
          </div>
        </div>}
    </div>
  );
}