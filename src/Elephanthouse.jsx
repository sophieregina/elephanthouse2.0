import {useGLTF, Html, Text, RoundedBox} from '@react-three/drei';
import React, {useEffect, useRef, useState} from 'react';
import { useFrame, useThree} from '@react-three/fiber'; 
import {Mesh, Raycaster, Vector2, Vector3 } from 'three';


export function Model(props) {
  
  const { nodes, materials } = useGLTF(process.env.REACT_APP_BASEURL +'elephanthouse.glb');
  if (nodes) {
    props.LoadingChildtoParent(false);
  }
  const { scene } = useThree();
  const { camera } = useThree();

  //useState
  const ButtonSet = true;
  const [menu, setMenu] = useState(true);
  const [about, setAbout] = useState(false);
  const [past, setPast] = useState(false);
  const [curator, setCurator] = useState(false);
  const [UpIOn, setUpIOn] = useState(false); 
  const [handshake, setHandshake] = useState(false);
  const [echolot, setEcholot] = useState(false);
  const [kevin, setKevin] = useState(false);
  const [lussi, setLussi] =useState(false);
  const [InfoBWUP, setInfoBWUP] = useState(false);
  const [InfoLWUP, setInfoLWUP] = useState(false);
  const [InfoRWUP, setInfoRWUP] = useState(false);
  const [InfoLWHandshake, setInfoLWHandshake] = useState(false);
  const [InfoRWHandshake, setInfoRWHandshake] = useState(false);
  const [InfoBWEcholot, setInfoBWEcholot] = useState(false);
  const [InfoRWEcholot, setInfoRWEcholot] = useState(false);
  const [InfoLWEcholot, setInfoLWEcholot] = useState(false);
  const [InfoKevin, setInfoKevin] = useState(false);
  const [InfoLussiRW, setInfoLussiRW] = useState(false);
  const [InfoLussiBW, setInfoLussiBW] = useState(false);
  const [InfoAbout, setInfoAbout] = useState(false);
  const [InfoPW, setInfoPW] = useState(false);
  const [answersQ11, setAnswersQ11] = useState(false);
  const [answersQ12, setAnswersQ12] = useState(false);
  const [popupQ1, setPopupQ1] = useState(false);
  const [popupQ2_1, setPopupQ2_1] = useState(false);
  const [popupQ2_2, setPopupQ2_2] = useState(false);
  const [popupQ3_1, setPopupQ3_1] = useState(false);
  const [popupQ3_2, setPopupQ3_2] = useState(false);
  const [popupQ3_3, setPopupQ3_3] = useState(false);
  const [popupQ3_4, setPopupQ3_4] = useState(false);
  const [popupQ3_5, setPopupQ3_5] = useState(false);
  const [playing, setPlaying] = useState(false);

  //useRef
  const elephantMesh = useRef();
  const audioAngeHalliwell = useRef(null);
  const audioShayu = useRef(null);
  const audioAntony = useRef(null);
  const audioLussi = useRef(null);
  const audioQ11 = useRef(null);
  const audioQ12 = useRef(null);
  const audioQ13 = useRef(null);
  const audioQ14 = useRef(null);
  const audioQ15 = useRef(null);
  const audioQ16 = useRef(null);
  const audioQ21 = useRef(null);
  const audioQ22 = useRef(null);
  const audioQ23 = useRef(null);
  const audioQ31 = useRef(null);
  const audioQ32 = useRef(null);
  const audioQ33 = useRef(null);
  const audioQ34 = useRef(null);
  const audioQ35 = useRef(null);
  const audioQ36 = useRef(null);
  const audioQ4 = useRef(null);
  const audioQ5 = useRef(null);

  // const audioHandshake = useRef(null);

  const showMenu = () => { 
    //function that sets every exhibition to false and shows menu
    SoundOff(); //stops playing all sounds if something is playing 
    props.MenuchildToParent(true); //sets the turning elephant on 
    props.LightChildToParent(1); //sets light back to standard
    setMenu(true); //sets menu to true
    setPast(false);
    setUpIOn(false);
    setHandshake(false);
    setEcholot(false);
    setKevin(false);
    setLussi(false);
    setAbout(false);
    setCurator(false);
  }

  //set about 
  const showAbout = () => { 
    props.MenuchildToParent(false);

    setAbout(true);
    setCurator(false);
  }
  // set "ask the curator"
  const showCurator = () => {
    setCurator(true);
    setAbout(false); 
  }
  //clean up: cleans all the walls and empties the room
  const emptyRoom = () => {
    setAbout(false);
    setCurator(false);
  };
  
  // set past exhibitions
  const showPast = () => {
    setPast(true);
    setMenu(false);
    setAbout(false);
    setCurator(false);
  }
  const showUpI = () => {
    props.MenuchildToParent(false); //sets turning elephant and menu off 
    SoundOff();
    setHandshake(false);
    setEcholot(false);
    setKevin(false);
    setLussi(false);
    props.LightChildToParent(1); //sets light
    setUpIOn(true);
  };
  const showHandshake = () => {
    props.MenuchildToParent(false); //sets turning elephant and menu off 
    SoundOff();
    setUpIOn(false);
    setEcholot(false);
    setKevin(false);
    setLussi(false);
    props.LightChildToParent(1); //sets light
    setHandshake(true);
    // HandshakeSoundOn();
  };
  const showEcholot = () => {
    props.MenuchildToParent(false); //sets turning elephant and menu off 
    SoundOff();
    setHandshake(false);
    setUpIOn(false);
    setKevin(false);
    setLussi(false);
    props.LightChildToParent(0.3); //sets light
    setEcholot(true);
  };
  const showKevin = () => {
    props.MenuchildToParent(false); //sets turning elephant and menu off 
    SoundOff();
    props.LightChildToParent(1); //sets light
    setHandshake(false);
    setUpIOn(false);
    setEcholot(false);
    setLussi(false);
    setKevin(true);
  }
  const showLussi = () => {
    props.MenuchildToParent(false); //sets turning elephant and menu off 
    SoundOff();
    props.LightChildToParent(1); //sets light
    setHandshake(false);
    setUpIOn(false);
    setEcholot(false);
    setKevin(false);
    setLussi(true);
  }
  // set Info text boxes:
  const showInfoBW = () => { 
    // sets Info Boxes on back wall 
    //--> if statments check which exhibition is currently on
    if (UpIOn){
      setInfoBWUP(true);
      }
    else if (kevin){
      setInfoKevin(true);
    } 
    else if (echolot) {
      setInfoBWEcholot(true);
    }
    else if (lussi) {
      setInfoLussiBW(true);
    }
  };
  const closeInfoBW = () => { 
    //closes Info Boxes on back wall 
    if (UpIOn){
      setInfoBWUP(false);
    }
    else if (kevin){
      setInfoKevin(false);
    }
    else if (echolot) {
      setInfoBWEcholot(false);
    }
    else if (lussi) {
      setInfoLussiBW(false);
    }
    const delayedFunction = () => {
      // Hier kommt der Code, den Sie nach der Verzögerung ausführen möchten
      props.BWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  };
  const showInfoLW = () => { 
    //Leftwall: sets Info Boxes on left wall 
    //--> if statments check which exhibition is currently on
    if (UpIOn){
      setInfoLWUP(true);
    } 
    else if (handshake){
      setInfoLWHandshake(true);
    }
    else if (echolot){
      setInfoLWEcholot(true);
    }
  };
  const closeInfoLW = () =>{ 
    //closes Info Boxes on left wall 
    if (UpIOn){
      setInfoLWUP(false);
    } 
    else if (handshake){
      setInfoLWHandshake(false);
    }
    else if (echolot){
      setInfoLWEcholot(false);
    }
  };
  const showInfoRW = () => {
    //Rightwall: sets Info Boxes on right wall 
    //--> if statments check which exhibition is currently on
    if (UpIOn){
      setInfoRWUP(true);
    }
    else if (handshake) {
      setInfoRWHandshake(true);
    }
    else if (echolot) {
      setInfoRWEcholot(true);
    }
    else if (lussi) {
      setInfoLussiRW(true);
    }
    else if (about) {
      setInfoAbout(true);
    }
  };
  const closeInfoRW = () =>{ 
    //closes Info Boxes on right wall 
    if (UpIOn){
      setInfoRWUP(false);
    } 
    else if (handshake) {
      setInfoRWHandshake(false);
    }
    else if (echolot) {
      setInfoRWEcholot(false);
    }
    else if (lussi) {
      setInfoLussiRW(false);
    }
    else if (about) {
      setInfoAbout(false);
    }
    const delayedFunction = () => {
      // code which should appear with delay to set the position right
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  };
  //Posterwall
  const ShowInfoPW = () => { 
    //sets Info Boxes on poster wall
    setInfoPW(true); 
  };
  const closeInfoPW = () => { 
    //closes Info Boxes on poster wall
    setInfoPW(false);
  };

  //turning elephant 
  useFrame(({ clock }) => { 
    if (props.elephantOn) { 
      elephantMesh.current.rotation.z = clock.getElapsedTime(); //rotates elephant on the z-axes
    }
  });

  //sound
  //handle sound menu from App
  useEffect (()=> { 
  if (!props.playing) {
    SoundOff();
  }
  }, [props.playing]);

  const SoundOff = () => { 
    //sets all sounds off if something is playing
    if (playing) {
      AngeHalliwellSoundOff();
      ShayuSoundOff();
      AntonySoundOff();
      LussiSoundOff();
      audioQ11.current.pause();
      audioQ12.current.pause();
      audioQ13.current.pause();
      audioQ14.current.pause();
      audioQ15.current.pause();
      audioQ16.current.pause();
      audioQ21.current.pause();
      audioQ22.current.pause();
      audioQ23.current.pause();
      audioQ31.current.pause();
      audioQ32.current.pause();
      audioQ33.current.pause();
      audioQ34.current.pause();
      audioQ35.current.pause();
      audioQ36.current.pause();
      audioQ4.current.pause();
      audioQ5.current.pause();
      setPlaying(false);
    };
  };
  // const HandshakeSoundOn = () => {
  //   audioHandshake.current.play();
  //   setPlaying(true);
  // }
  const AngeHalliwellSoundOn = () => {
    SoundOff(); //turning currently playing sounds off
    audioAngeHalliwell.current.play(); //starts playing 
    setPlaying(true); 
  }
  const AngeHalliwellSoundOff = () => {
    audioAngeHalliwell.current.pause();
    setPlaying(false);
  }
  const ShayuSoundOn = () => {
    SoundOff(); //turning currently playing sounds off
    audioShayu.current.play();
    setPlaying(true);
  }
  const ShayuSoundOff = () => {
    audioShayu.current.pause();
    setPlaying(false);
  }
  const AntonySoundOn = () => {
    SoundOff(); //turning currently playing sounds off
    audioAntony.current.play();
    setPlaying(true);
  }
  const AntonySoundOff = () => {
    audioAntony.current.pause();
    setPlaying(false);
  }
  const LussiSoundOn = () => {
    SoundOff(); //turning currently playing sounds off
    audioLussi.current.play();
    setPlaying(true);
  }
  const LussiSoundOff = () => {
    audioLussi.current.pause();
    setPlaying(false);
  }

  // Audiofiles: Ask the curator
  //play Audio
  const AudioQ11 = () => {
    //play Audio 1 of question 1
    SoundOff();
    setPlaying(true)
    audioQ11.current.play();
  }
  const AudioQ12 = () => {
    //play Audio 2 of question 1
    SoundOff();
    setPlaying(true)
    audioQ12.current.play();
    closeQ1();
  }
  const AudioQ13 = () => {
    //play Audio 3 of question 1
    SoundOff();
    setPlaying(true)
    audioQ13.current.play();
    closeQ1();
  }
  const AudioQ14 = () => {
    //play Audio 4 of question 1
    SoundOff();
    setPlaying(true)
    audioQ14.current.play();
  }
  const AudioQ15 = () => {
    //play Audio 5 of question 1
    SoundOff();
    setPlaying(true)
    audioQ15.current.play();
    closeQ1();
  }
  const AudioQ16 = () => {
    //play Audio 6 of question 1
    SoundOff();
    setPlaying(true)
    audioQ16.current.play();
    closeQ1();
  }
  const AudioQ21 = () => {
    //play Audio 1 of question 2
    SoundOff();
    setPlaying(true)
    audioQ21.current.play();
  }
  const AudioQ22 = () => {
    //play Audio 2 of question 2
    SoundOff();
    setPlaying(true)
    audioQ22.current.play();
    closeQ2_1();
  }
  const AudioQ23 = () => {
    //play Audio 3 of question 
    SoundOff();
    setPlaying(true)
    audioQ23.current.play();
    closeQ2_2();
  }
  const AudioQ31 = () => {
    //play Audio 1 of question 3
    SoundOff();
    setPlaying(true)
    audioQ31.current.play();
  }
  const AudioQ32 = () => {
    //play Audio 2 of question 3
    SoundOff();
    setPlaying(true)
    audioQ32.current.play();
    closeQ3_1();
  }
  const AudioQ33 = () => {
    //play Audio 3 of question 3
    SoundOff();
    setPlaying(true)
    audioQ33.current.play();
    closeQ3_2();
  }
  const AudioQ34 = () => {
    //play Audio 4 of question 3
    SoundOff();
    setPlaying(true)
    audioQ34.current.play();
    closeQ3_3();
  }
  const AudioQ35 = () => {
    //play Audio 5 of question 3
    SoundOff();
    setPlaying(true)
    audioQ35.current.play();
    closeQ3_4();
  }
  const AudioQ36 = () => {
    //play Audio 6 of question 3
    SoundOff();
    setPlaying(true)
    audioQ36.current.play();
    closeQ3_5();
  }
  const AudioQ4 = () => {
    //play Audio of question 4
    SoundOff();
    setPlaying(true)
    audioQ4.current.play();
  }
  const AudioQ5 = () => {
    //play Audio of question 5
    SoundOff();
    setPlaying(true)
    audioQ5.current.play();
  }

  //handlers Audio end
  const handleAudioQ11Ended = () => {
    //checks if audio 1 to question 1 has finished playing andshows pop up 1 with answers to question 1
    setAnswersQ11(true);
  }
  const handleAudioQ12Ended = () => {
    //checks if audio 2 to question 1 has finished playing
    AudioQ14();
  }
  const handleAudioQ13Ended = () => {
    //checks if audio 3 to question 1 has finished playing
    setPopupQ1(true);
  }
  const handleAudioQ14Ended = () => {
    //checks if audio 4 to question 1 has finished playing and shows pop up 2 with answers to question 1
    setAnswersQ12(true);
  }
  const handleAudioQ21Ended = () => {
    //checks if audio 1 to question 2 has finished playing and shows pop up with upfollowing questions
    setPopupQ2_1(true);
    setPopupQ2_2(true);
  }
  const handleAudioQ31Ended = () => {
    //checks if audio 1 to question 3 has finished playing and shows pop up with upfollowing questions
    setPopupQ3_1(true);
    setPopupQ3_2(true);
    setPopupQ3_3(true);
    setPopupQ3_4(true);
    setPopupQ3_5(true);
  }

  //close Answer-Pop-ups
  const closeQ1 = () => {
    //close pop up with answers from question 1
    setAnswersQ11(false);
    setAnswersQ12(false);
    setPopupQ1(false);
    const delayedFunction = () => {
      // set location back
      props.BWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }
  const closeQ2_1 = () => {
    //close pop up 1 from question 2
    setPopupQ2_1(false);
    const delayedFunction = () => {
      // set location back
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }
  const closeQ2_2 = () => {
    //close pop up 2 from question 2
    setPopupQ2_2(false);
    const delayedFunction = () => {
      // set location back
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }
  const closeQ3_1 = () => {
    //close pop up 2 from question 2
    setPopupQ3_1(false);
    const delayedFunction = () => {
      // set location back
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }
  const closeQ3_2 = () => {
    //close pop up 2 from question 2
    setPopupQ3_2(false);
    const delayedFunction = () => {
      // set location back
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }
  const closeQ3_3 = () => {
    //close pop up 2 from question 2
    setPopupQ3_3(false);
    const delayedFunction = () => {
      // set location back
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }
  const closeQ3_4 = () => {
    //close pop up 2 from question 2
    setPopupQ3_4(false);
    const delayedFunction = () => {
      // set location back
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }
  const closeQ3_5 = () => {
    //close pop up 2 from question 2
    setPopupQ3_5(false);
    const delayedFunction = () => {
      // set location back
      props.RWchildToParent(ButtonSet);
    };
    const timer = setTimeout(delayedFunction, 1);
  }

  //handle click trough multiple meshes
  const handleClick = (event) => {
    const raycaster = new Raycaster();
    const mouse = new Vector2();
    // Get the mouse position relative to the canvas
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // Set the raycaster origin and direction
    raycaster.setFromCamera(mouse, camera);
    // Get the intersected objects
    const intersects = raycaster.intersectObjects(scene.children, true);
    // Check if the intersected object should handle the click event
    for (const intersect of intersects) {
      if (intersect.object instanceof Mesh && intersect.object.uuid === 'elephanthous_outside') {
        // Handle the click event for the mesh
        console.log('Mesh clicked:', intersect.object.name);
        event.stopPropagation();
        break;
    }
  }
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      {/* audio   */}
      <Html className='audio'>
        <audio loop ref={audioAngeHalliwell} src={process.env.REACT_APP_BASEURL+"sounds/AngeHalliwell.mp3"}/>
        <audio loop ref={audioShayu} src={process.env.REACT_APP_BASEURL+"sounds/ShayuSlick_Collision.mp3"}/>
        <audio loop ref={audioAntony} src={process.env.REACT_APP_BASEURL+"sounds/AntonyNoLimit_AntonyMeurt.mp3"}/>
        <audio loop ref={audioLussi} src={process.env.REACT_APP_BASEURL+"sounds/4JackenStereoMix_Martina_Lussi.mp3"}/>
        <audio ref={audioQ11} src={process.env.REACT_APP_BASEURL+"sounds/Q11.m4a"} onEnded={handleAudioQ11Ended}/>
        <audio ref={audioQ12} src={process.env.REACT_APP_BASEURL+"sounds/Q12.m4a"} onEnded={handleAudioQ12Ended}/>
        <audio ref={audioQ13} src={process.env.REACT_APP_BASEURL+"sounds/Q13.m4a"} onEnded={handleAudioQ13Ended}/>
        <audio ref={audioQ14} src={process.env.REACT_APP_BASEURL+"sounds/Q14.m4a"} onEnded={handleAudioQ14Ended}/>
        <audio ref={audioQ15} src={process.env.REACT_APP_BASEURL+"sounds/Q15.m4a"}/>
        <audio ref={audioQ16} src={process.env.REACT_APP_BASEURL+"sounds/Q16.m4a"}/>
        <audio ref={audioQ21} src={process.env.REACT_APP_BASEURL+"sounds/Q21.m4a"} onEnded={handleAudioQ21Ended}/>
        <audio ref={audioQ22} src={process.env.REACT_APP_BASEURL+"sounds/Q22.m4a"}/>
        <audio ref={audioQ23} src={process.env.REACT_APP_BASEURL+"sounds/Q23.m4a"}/>
        <audio ref={audioQ31} src={process.env.REACT_APP_BASEURL+"sounds/Q31.m4a"} onEnded={handleAudioQ31Ended}/>
        <audio ref={audioQ32} src={process.env.REACT_APP_BASEURL+"sounds/Q32.m4a"}/>
        <audio ref={audioQ33} src={process.env.REACT_APP_BASEURL+"sounds/Q33.m4a"}/>
        <audio ref={audioQ34} src={process.env.REACT_APP_BASEURL+"sounds/Q34.m4a"}/>
        <audio ref={audioQ35} src={process.env.REACT_APP_BASEURL+"sounds/Q35.m4a"}/>
        <audio ref={audioQ36} src={process.env.REACT_APP_BASEURL+"sounds/Q36.m4a"}/>
        <audio ref={audioQ4} src={process.env.REACT_APP_BASEURL+"sounds/Q4.m4a"}/>
        <audio ref={audioQ5} src={process.env.REACT_APP_BASEURL+"sounds/Q5.m4a"}/>
      </Html>
    
      {/* 3D-Model menu */}
      {props.elephantOn &&
        <group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh ref={elephantMesh} geometry={nodes.elephant.geometry} material={materials['wire_148177027.001']} position={[-18.45, 38.39, 18.25]} rotation={[0, 0.03, 0.14]} scale={0.03} />
          </group>
          {/* set menu */}
        {menu &&
          <group>
          <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} color="#37343e" position={new Vector3(-50, 20, -40)} anchorX="middle" anchorY="middle" fontSize={5}>
          Willkommen im
            </Text>
        <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} color="#37343e" position={new Vector3(-30, 16, -30)} anchorX="middle" anchorY="middle" fontSize={6}>
          sic! Elephanthouse
          </Text>
          <RoundedBox onClick={() => showPast()} args={[18, 8, 1]} position={new Vector3(-45, 5, -40)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
          <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-7, 0, 1)} color="white" anchorX="left" anchorY="middle" fontSize={3}>past</Text>
          </RoundedBox>
          <RoundedBox onClick={() => emptyRoom()} args={[18, 8]} position={new Vector3(-20, 5, -40)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
          <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-7, 0, 1)} color="white" anchorX="left" anchorY="middle" fontSize={3}>clean up</Text>
          </RoundedBox>
          <RoundedBox onClick={() => showAbout()} args={[18, 8]} position={new Vector3(5, 5, -40)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
            <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-7, 0, 1)} color="white" anchorX="left" anchorY="middle" fontSize={3}>about</Text>
          </RoundedBox>
          </group>
        }
        {/* set submenu: past  */}
        {past &&
          <group>
          <RoundedBox onClick={() => showUpI()} args={[8, 4]} position={new Vector3(-45, 5, -45)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
          <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-2, 0.5, 1)} color="white" anchorX="left" anchorY="middle" fontSize={2.5}>Up#I</Text>
          </RoundedBox>
          <RoundedBox onClick={() =>showHandshake()} args={[47, 4]} position={new Vector3(-10, 5, -40)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
          <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-21, 0.5, 1)} color="white" anchorX="left" anchorY="middle" fontSize={2.5}>Handshake – Monika Emmanuelle Kazi</Text>
          </RoundedBox>
          <RoundedBox onClick={() =>showEcholot()} args={[30, 4]} position={new Vector3(-40, 5, -27)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
            <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-11, 0.5, 1)} color="white" anchorX="left" anchorY="middle" fontSize={2.5}>Echolot Musik-Festival</Text>
          </RoundedBox>
          <RoundedBox onClick={() =>showKevin()} args={[40, 4]} position={new Vector3(0, 5, -25)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
            <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-19, 0.5, 1)} color="white" anchorX="left" anchorY="middle" fontSize={2}>Kevin Pinsembert – Painting Performance</Text>
          </RoundedBox>
          <RoundedBox onClick={() =>showLussi()} args={[28, 4]} position={new Vector3(-35, 5, -15)} material-color="#37343e" material-transparent={true} material-opacity={0.6} radius={0.5}>
            <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-12, 0.5, 1)} color="white" anchorX="left" anchorY="middle" fontSize={2}>Martina Lussi – The Listener</Text>
          </RoundedBox>
          <RoundedBox onClick={() =>showMenu()} args={[8, 3]} position={new Vector3(-10, 5, -10)} material-color="#73989b" material-transparent={true} material-opacity={0.6} radius={0.5}>
            <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-3, 0.5, 1)} color="white" anchorX="left" anchorY="middle" fontSize={2}>BACK</Text>
          </RoundedBox>
          </group>
        }
        </group>
      }
      
      {/* Infosign Posterwall */}
      <group position={[-82.06, 54.19, -91.3]} rotation={[-Math.PI / 2, 0, -1.64]}>
        <mesh onClick={() => ShowInfoPW()} geometry={nodes.Infosign.geometry} material={materials['Material.012']} position={[59.64, 27.08, -62.02]} rotation={[-0.23, -0.1, 0.22]} />
        {InfoPW &&
         <Html position={[30, 65, -21.6]}>
         <div class="textbox">
           <button class="Onclicks" onClick={() => closeInfoPW()}>x</button>
           <p>Momentan sind an der Wand des sic! elephanthouse die Plakate des letzten Fumette Comic-Festivals zu sehen.</p>
         </div>
         </Html>}
      </group>

      {/* photogrammetry models  */}
      <mesh geometry={nodes['photogrammetry-model'].geometry} uuid="elephanthous_outside" material={materials.Material_0} position={[-8.45, 27.02, -38.17]} rotation={[-0.27, -1.14, 0.44]} />
      <mesh geometry={nodes.BodenDecimated.geometry} material={materials.BodenDecimated} position={[-17.52, 1.28, -35.21]} rotation={[-1.57, 0, 0.13]} scale={1.58} />

      {/* Interior */}
      <mesh geometry={nodes.floor.geometry} material={materials['Material.001']} position={[-18.76, 0.58, -34.8]} rotation={[0, -1.43, 0]} scale={[66.68, 16.87, 37.19]} />
      <mesh geometry={nodes.roof.geometry} material={materials['Material.004']} position={[45.99, 38.06, -14.22]} rotation={[0, 0.14, 2.94]} scale={[-22.44, -2.05, -38.33]} />
      <mesh onClick={() => {props.RWchildToParent(ButtonSet);}} 
            geometry={nodes['wall-right'].geometry} material={materials['Material.002']} position={[18.77, 27.29, -39.52]} rotation={[-Math.PI / 2, 0, 1.71]} scale={[-66.58, -0.77, -26.5]} />
      <mesh onClick={() => props.LWchildToParent(ButtonSet)}
            geometry={nodes['wall-left'].geometry} material={materials['Material.003']} position={[-53.93, 27.66, -29.12]} rotation={[Math.PI / 2, 0, 1.44]} scale={[66.3, 1, 27.14]} />
      <mesh onClick={() => props.BWchildToParent(ButtonSet)}
            geometry={nodes['wall-back'].geometry} material={materials['Material.007']} position={[-26.5, 25.9, -99.09]} rotation={[1.57, 0, -0.13]} scale={[37.21, 0.44, 26.56]} />
      <mesh geometry={nodes['wall-front'].geometry} material={materials['Material.006']} position={[5.87, 28.04, 27.68]} rotation={[1.56, -0.01, -0.11]} scale={[47.25, 16.34, 27.65]} />

      {/* Up#I */}
      {UpIOn &&
        <group>
        <mesh geometry={nodes['Sabina_Lang_&_Daniel_Baumann_(LB)'].geometry} material={materials.Material} position={[10.04, 35.32, -99.99]} rotation={[1.57, -0.02, 1.43]} scale={3.28} />
        <mesh geometry={nodes['Up_#_I'].geometry} material={materials['Material.009']} position={[-58.56, 37.15, -94.58]} rotation={[1.57, 0.01, -0.12]} scale={4.35} />
        <mesh geometry={nodes['29082014-29082016'].geometry} material={materials['Material.010']} position={[-12.44, 36.14, -100.41]} rotation={[1.57, 0.01, -0.12]} scale={3.75} />
        <mesh geometry={nodes.BWpicture.geometry} material={materials.BWpicture} position={[-29, 27.9, -98.26]} rotation={[-Math.PI / 2, 0, -3.01]} scale={[-41.62, -85.42, -41.62]} />
        <mesh geometry={nodes.LWpicture.geometry} material={materials.LWpicture} position={[-53.81, 28.64, -35.41]} rotation={[Math.PI / 2, 0, -1.69]} scale={39.88} />
        <mesh geometry={nodes.RWpicture.geometry} material={materials.RWpicture} position={[20.91, 27.24, -21.6]} rotation={[Math.PI / 2, 0, 1.44]} scale={43.67} />
        <mesh className="Onclicks" onClick={() => showInfoBW()} geometry={nodes.infoBW.geometry} material={materials.info} position={[-10.89, 9.73, -99.74]} rotation={[Math.PI / 2, 0, -0.13]} scale={4.66} />
        <mesh className="Onclicks" onClick={() => showInfoRW()} geometry={nodes.infoRW.geometry} material={materials['info.001']} position={[16.3, 10.14, -55.88]} rotation={[1.57, 0, 1.41]} scale={4.66} />
        <mesh className="Onclicks" onClick={() => showInfoLW()} geometry={nodes.infoLW.geometry} material={materials['info.002']} position={[-58.8, 10.64, -67.7]} rotation={[1.57, 0, -1.7]} scale={4.66} />
        {InfoBWUP &&
        <Html position={[-10, 45, -98.26]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoBW()}>x</button>
          <p>Die Kunstschaffenden Sabina Lang und Daniel Baumann (L/B) wurden von sic! Raum für Kunst eingeladen, die Aussenfassade des Ausstellungsraums künstlerisch zu gestalten. 
            L/B realisierten die skulpturale Arbeit «Up #I».</p>
            <p>Indem sie Ort und Kontext ihrer Interventionen jeweils vorgängig genau analysieren, 
            treten die Künstler in einen Dialog mit dem Vorgefunden. Lang/Baumann hinterfragen, häufig auf spielerische Art, 
            gängige Normen und Wahrnehmungsmuster und begeben sich mit ihrer opulenten Bildsprache bewusst auf eine Gratwanderung zwischen 
            klar definierten Bereichen: öffentlichem und privatem Raum, Vertrautem und Ungewohntem, Kunst und Funktionalitat.</p>
        </div>
        </Html>}
        {InfoLWUP &&
        <Html position={[-53.81, 50, -35.41]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoLW()}>x</button>
          <p>Das Werk wurde am 29. August 2014 ab 17.00 Uhr mit Prosecco und Bier eingeweiht und zierte danach während zwei Jahren das Dach des sic!-Elephanthouse. 
            Das Projekt wurde von der Kunstkommission der Stadt Luzern positiv gewürdigt und wurde bei der Realisierung von der Dienstabteilung Städtebau unterstützt. 
            Das Kunstprojekt konnte mit Hilfe der Unterstützung durch die öffentliche Hand (Stadt und Kanton Bern, Kanton Uri, Stadt Luzern, Regionalkonferenz Kultur) 
            sowie privaten Stiftungen (Fond tion Nestlé pour l'Art, Stiftung Charlotte und Joseph Kopp-Maus, Casimir Eigensatz Stiftung, Gemeinnützige Gesellschaft der Stadt Luzern) 
            und der Galerie Urs Meile, Luzern, realisiert werden.</p>
        </div>
        </Html>}
        {InfoRWUP  &&
        <Html position={[30, 65, -21.6]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoRW()}>x</button>
          <p>Sabina Lang (*1972) und Daniel Baumann (*1967) leben in Burgdorf (Schweiz) und arbeiten seit 1990 zusammen. 
            Ihr Werk umfasst Installation, Skulptur, grossflächige Wand- oder Bodenmalerei und architektonische Intervention. 
            Die beiden Künstler arbeiten mit den verschiedensten Materialien – Holz, Metall, Farbe, Teppich, aufblasbare Strukturen – 
            ihr eigentliches Medium jedoch ist der Raum: Die meisten Arbeiten sind ortsspezifisch, einige sind modular angelegt und können 
            so unterschiedlichen Situationen angepasst werden. Zahlreiche der Werke können nicht nur betrachtet, sondern auch benutzt werden; 
            andere täuschen eine Benutzbarkeit nur vor oder sabotieren sie auf listige Weise.</p>
        </div>
        </Html>}
        </group>
      }

      {/* Handshake  */}
      {handshake &&
      <group>
      <mesh geometry={nodes.handshakeBW.geometry} material={materials.handshakeBW} position={[-25.14, 27.2, -99]} rotation={[1.57, 0, -0.13]} scale={52} />
      <mesh geometry={nodes.handshakeRW.geometry} material={materials.handshakeRW} position={[22.4, 27.65, -13]} rotation={[Math.PI / 2, 0, 1.43]} scale={52} />
      <mesh geometry={nodes.handshakeLW.geometry} material={materials.handshakeLW} position={[-57.11, 27.47, -55.14]} rotation={[1.56, 0, -1.7]} scale={53} />
      <mesh geometry={nodes['10042021-22052021'].geometry} material={materials['Material.011']} position={[9.99, 36.08, -96.98]} rotation={[Math.PI / 2, 0, 1.43]} scale={5.5} />
      <mesh geometry={nodes['MONIKA_EMMANUELLE_KAZI_-'].geometry} material={materials['Material.013']} position={[-44.62, 38.69, 33.39]} rotation={[Math.PI / 2, 0, -1.72]} scale={3.61} />
      <mesh geometry={nodes.handshakePoster.geometry} material={materials.handshakePoster} position={[-63.5, 43.25, -86.83]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster001.geometry} material={materials['handshakePoster.001']} position={[-59.62, 43.27, -60.21]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster002.geometry} material={materials['handshakePoster.002']} position={[-63.44, 22.66, -87.09]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster003.geometry} material={materials['handshakePoster.003']} position={[-61.66, 43.17, -72.23]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster004.geometry} material={materials['handshakePoster.004']} position={[-59.5, 10.58, -59.98]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster005.geometry} material={materials['handshakePoster.005']} position={[-61.46, 22.66, -72.48]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster006.geometry} material={materials['handshakePoster.006']} position={[-59.39, 22.66, -60.26]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster007.geometry} material={materials['handshakePoster.007']} position={[-61.23, 10.58, -72.73]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster008.geometry} material={materials['handshakePoster.008']} position={[-63.16, 10.58, -86.98]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster009.geometry} material={materials['handshakePoster.009']} position={[-57.59, 44.04, -43.26]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster010.geometry} material={materials['handshakePoster.010']} position={[-55.62, 44.07, -28.74]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster011.geometry} material={materials['handshakePoster.011']} position={[-53.97, 44.13, -16.53]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster012.geometry} material={materials['handshakePoster.012']} position={[-51.67, 43.92, 0.37]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster013.geometry} material={materials['handshakePoster.013']} position={[-49.66, 44.02, 15.21]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster014.geometry} material={materials['handshakePoster.014']} position={[-48.03, 44.02, 27.2]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster015.geometry} material={materials['handshakePoster.015']} position={[-57.58, 23.41, -43.14]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster016.geometry} material={materials['handshakePoster.016']} position={[-55.58, 23.41, -28.42]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster017.geometry} material={materials['handshakePoster.017']} position={[-49.67, 23.41, 15.13]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster018.geometry} material={materials['handshakePoster.018']} position={[-51.66, 23.41, 0.45]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster019.geometry} material={materials['handshakePoster.019']} position={[-48.27, 23.41, 28.45]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster020.geometry} material={materials['handshakePoster.020']} position={[-53.96, 23.41, -16.49]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster021.geometry} material={materials['handshakePoster.021']} position={[-57.58, 10.95, -43.14]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster022.geometry} material={materials['handshakePoster.022']} position={[-55.58, 10.86, -28.42]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster023.geometry} material={materials['handshakePoster.023']} position={[-53.96, 10.82, -16.49]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster024.geometry} material={materials['handshakePoster.024']} position={[-51.66, 11.02, 0.45]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster025.geometry} material={materials['handshakePoster.025']} position={[-49.67, 10.98, 15.13]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.handshakePoster026.geometry} material={materials['handshakePoster.026']} position={[-48.27, 11.19, 28.45]} rotation={[Math.PI / 2, 0, 1.44]} scale={[20.74, 4.01, 20.74]} />
      <mesh className="Onclicks" onClick={() => showInfoLW()} geometry={nodes.infoRWHandshake.geometry} material={materials.info} position={[-50.39, 10.69, -5.72]} rotation={[Math.PI / 2, 0, -1.72]} scale={6.06} />
      <mesh className="Onclicks" onClick={() => showInfoRW()} geometry={nodes.infoLWHandshake.geometry} material={materials['info.003']} position={[14.91, 16.23, -62.25]} rotation={[Math.PI / 2, 0, 1.43]} scale={6.06} />
      {InfoLWHandshake &&
        <Html position={[-53.81, 50, -35.41]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoLW()}>x</button>
          <p><a href="https://monikaemmanuelle.com/" target="_blank">Monika Emmanuelle Kazi (*1991)</a> ist zwischen Pointe-Noire im Kongo und Paris aufgewachsen und lebt aktuell in Genf. 
            Sie studierte Interior Design in Paris und Brüssel. 
            2018 begann sie ihren Bachelor in Visual Arts an der HEAD in Genf und hat im Sommer 2021 den Master abgeschlossen.</p>
        </div>
        </Html>}
        {InfoRWHandshake &&
        <Html position={[30, 65, -21.6]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoRW()}>x</button>
          <p>Die von Text und drei Malereien begleitete Videoinstallation «mains d’oeuvre» hinterfragt auf subtile Weise die Bedeutung von Worten und Meinungen sowie deren Rechte. 
            Durch die Gesten weisser Hände reflektiert Monika Emmanuelle Kazi die soziale Hierarchie, in der wir alle gefangen sind.
            In ihrem Text stellt sich die Künstlerin eine dystopische Gesellschaft vor, in der Sprache und Meinungen monetisiert werden. 
            Dabei beschäftigt sich Kazi mit folgenden Fragen: Sind wir noch frei in unseren Handlungen und Meinungen oder leitet uns das Bild, das wir öffentlich projizieren wollen, bei unseren Entscheidungen? 
            Wenn unsere Reden und Meinungen eine Währung wären, wer wäre dann reich und wer würde in Armut leben? Wären Sie bereit, Ihr Recht zu sprechen, zu verkaufen, um zu überleben?
            Das Thema mag auf den ersten Blick moralisierend wirken, Kazi weiss es jedoch mit Scharfsinn und Feingefühl zu untersuchen, indem sie Selbstreflexion und Fiktion in den Fokus nimmt.</p>
        </div>
        </Html>}
      </group>
      }
    
    {/* Kevin Pinsembert */}
    {kevin &&
    <group>
      <mesh geometry={nodes.Kevin_PlanePW.geometry} material={materials['Material.017']} position={[-49.68, 26.9, 18.23]} rotation={[-Math.PI / 2, 0, 1.69]} scale={[-17.34, -32.95, -26.67]} />
      <mesh onClick={() => props.KevinVideoPWChildToParent(ButtonSet)}
            geometry={nodes['play-buttonPW'].geometry} material={materials['play-button']} position={[-60.68, 26.21, -46.56]} rotation={[Math.PI / 2, 0, 1.45]} scale={17.9} />
      <mesh onClick={() => props.KevinVideoRWChildToParent(ButtonSet)}
            geometry={nodes['play-buttonRW'].geometry} material={materials['play-button.001']} position={[16.9, 28.13, -43.18]} rotation={[Math.PI / 2, 0, 1.45]} scale={14.33} />
      <mesh onClick={() => props.KevinVideoLWChildToParent(ButtonSet)}
            geometry={nodes['play-buttonLW'].geometry} material={materials['play-button.002']} position={[-49.39, 28.13, -2.21]} rotation={[Math.PI / 2, 0, -1.7]} scale={11.43} />
      <mesh geometry={nodes.Kevin_Pinsembert.geometry} material={materials['Material.008']} position={[-54.01, 44.35, -95.18]} rotation={[Math.PI / 2, 0, -0.11]} scale={5.33} />
      <mesh geometry={nodes['01052021'].geometry} material={materials['Material.016']} position={[-22.29, 39.76, -98.9]} rotation={[Math.PI / 2, 0, -0.11]} scale={4.58} />
      <mesh className="Onclicks" onClick={() => showInfoBW()} geometry={nodes.KevininfoBW.geometry} material={materials['info.004']} position={[3.45, 9.73, -101.54]} rotation={[Math.PI / 2, 0, -0.13]} scale={4.66} />
      <mesh geometry={nodes.VideoPW.geometry} material={materials.VideoPW} position={[-58.1, 26.01, -45.46]} rotation={[Math.PI / 2, 0, 1.45]} scale={55.75} />
      <mesh geometry={nodes.VideoRW.geometry} material={materials.VideoRW} position={[17.48, 27.94, -42.8]} rotation={[Math.PI / 2, 0, 1.43]} scale={40.29} />
      <mesh geometry={nodes.VideoLW.geometry} material={materials.VideoLW} position={[-50.13, 27.66, -2.09]} rotation={[Math.PI / 2, 0, -1.7]} scale={[35.64, 132.54, 35.64]} />
      <mesh geometry={nodes.kevinBW.geometry} material={materials.kevinBW} position={[-26.97, 20.14, -98.73]} rotation={[1.57, 0, -0.13]} scale={[29.61, 0.82, 29.61]} />
      {InfoKevin &&
      <Html position={[-10, 45, -98.26]}>
      <div class="textbox">
        <button class="Onclicks" onClick={() => closeInfoBW()}>x</button>
        <p>Die nördliche Aussenfassade des Elephanthouse wurde zur Leinwand!
          In der eigens für sic! konzipierten Arbeit vermischt der französische Künstler <a href="https://saatchiyates.com/artists/Kevin-Pinsembert#" target="_blank">Kevin Pinsembert</a> (*1989) Architektur, 
          Objekte und Erinnerungen zu malerischen Kompositionen. Er selbst wird Teil dieser gemalten Szenerie, 
          die er über die Zeit performativ entwickelt.</p>
      </div>
      </Html>
    }
    </group>
    }

    {/* Echolot  */}
    {echolot &&
    <group>
      <mesh geometry={nodes.echolotBW.geometry} material={materials.echolotBW} position={[-26.89, 27.73, -98.21]} rotation={[1.57, 0, -0.13]} scale={51.66} />
      <mesh geometry={nodes.echolotLW.geometry} material={materials.echolotLW} position={[-52.4, 28.17, -26.2]} rotation={[1.57, 0, -1.7]} scale={52.31} />
      <mesh geometry={nodes.echolotRW.geometry} material={materials.echolotRW} position={[21.85, 27.68, -13.05]} rotation={[Math.PI / 2, 0, -1.71]} scale={52.28} />
      <mesh geometry={nodes['wall-left-echolot'].geometry} material={materials['Material.005']} position={[-53.24, 27.66, -29.2]} rotation={[Math.PI / 2, 0, 1.44]} scale={[66.3, 1, 27.14]} />
      <mesh geometry={nodes['wall-right-echolot'].geometry} material={materials['Material.014']} position={[13.09, 27.29, -76.04]} rotation={[Math.PI / 2, 0, -1.71]} scale={[28.09, 0.77, 26.5]} />
      <mesh geometry={nodes['wall-back-echolot'].geometry} material={materials['Material.015']} position={[-26.45, 25.91, -98.76]} rotation={[1.57, 0, -0.13]} scale={[37.76, 0.45, 26.59]}  />
      <mesh onClick={() => AngeHalliwellSoundOn()} geometry={nodes.sound_AngeHalliwell.geometry} material={materials.volume} position={[-57.63, 20.11, -64.53]} rotation={[Math.PI / 2, 0, -1.72]} scale={5.25} />
      <mesh onClick={() => ShayuSoundOn()} geometry={nodes.sound_Shayu.geometry} material={materials['volume.001']} position={[-12.62, 16.93, -96.39]} rotation={[1.57, 0.01, -0.16]} scale={2.65} />
      <mesh onClick={() => AntonySoundOn()} geometry={nodes.sound_AntonynoLimit.geometry} material={materials.play} position={[13.77, 7.41, -35.4]} rotation={[1.57, 0.01, 1.44]} scale={4.56} />
      <mesh onClick={() => showInfoBW()} geometry={nodes.infoBWEcholot.geometry} material={materials['info.006']} position={[-16.55, 17.27, -94.01]} rotation={[Math.PI / 2, 0, -0.25]} scale={3.24} />
      {InfoBWEcholot &&
        <Html position={[-10, 45, -98.26]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoBW()}>x</button>
          <p><a href="https://soundcloud.com/1shayu" target="_blank">Shayu</a> ist eine interdisziplinäre Künstlerin und experimentelle Komponistin/Musikerin, die derzeit in Zürich lebt. 
            Sie hat einen BA-Abschluss in Bildender Kunst.
            Sie interessiert sich für die Gegenüberstellung ihrer Klanglandschaften mit ihren abstrakten Gemälden / digitalen Gemälden und versucht 
            Wege zu finden, diese miteinander zu verschmelzen und zu verwandeln. &#91;Text von <a href="https://shayu-studio.com/about" target="_blank">Shayu Studio</a>&#93;
            Der Titel, den du hier hörst, heisst "Collision".
          </p>
        </div>
        </Html>}
      <mesh onClick= {() => showInfoLW()} geometry={nodes.infoLWEcholot.geometry} material={materials['info.007']} position={[-58.45, 20.05, -70.78]} rotation={[Math.PI / 2, 0, -1.66]} scale={4.68} />
      {InfoLWEcholot &&
        <Html position={[-53.81, 50, -35.41]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoLW()}>x</button>
          <p><a href="https://soundcloud.com/ange_halliwell" target="_blank">Ange Halliwell</a> ist ein französischer Harfenist und Produzent, 
          dessen Streichermelodien die Orte und Landschaften der Pyrenäen widerspiegeln, wo sie geboren und aufgewachsen sind und bis heute leben. 
          Sein erstes Album The Wheel Of Time wurde letztes Jahr auf dem Pariser Label High Heal veröffentlicht, 
          gefolgt von der 2018 erschienenen The Venus Silence EP, die neoklassische Einflüsse mit euphorischem Post-Trance auf dem Label Nova Era in Barcelona kombinierte. 
          Wie Autor und Club Late Music-Gründer Brice Reiter beschreibt, lädt Halliwell "den Hörer auf eine Reise ein, auf der die Ewigkeit in einem Augenblick existiert, 
          auf der die Zeit durch die gespielten Noten verherrlicht und das Leben durch die immanente Kraft ihrer Musik wiederhergestellt wird." &#91;Text von <a href="https://www.creamcake.de/artist/ange-halliwell/" target="_blank">CREAMCAKE</a>&#93;
          Den Song, den du hier hörst, heisst "My Secret Grief". 
          </p>
        </div>
        </Html>}
      <mesh onClick={() => showInfoRW()} geometry={nodes.infoRWEcholot.geometry} material={materials.info_white} position={[14.91, 7.29, -28.68]} rotation={[Math.PI / 2, 0, 1.43]} scale={4.86} />
      {InfoRWEcholot &&
        <Html position={[30, 60, -21.6]}>
        <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoRW()}>x</button>
          <p>Du hörst den Song "Antony Meurt" von <a href="https://soundcloud.com/antony_no_limit" target="_blank">Antony no Limit</a>. 
          </p>
        </div>
        </Html>}
      <mesh geometry={nodes.Ange_Halliwell.geometry} material={materials['Material.018']} position={[-57.45, 36.72, -62.56]} rotation={[1.55, 0, -1.69]} scale={5.19} />
      <mesh geometry={nodes.Shayu.geometry} material={materials['Material.019']} position={[-18.69, 20.67, -97.54]} rotation={[1.55, 0, -0.12]} scale={3.18} />
      <mesh geometry={nodes.AntonyNoLimit.geometry} material={materials['Material.020']} position={[14.19, 11.7, -44.72]} rotation={[1.57, 0, 1.43]} scale={3.25} />
    </group>
    }

  {/* Martina Lussi  */}
  {lussi &&
    <group>
    <mesh geometry={nodes.LussiBW.geometry} material={materials['_H2A3414-resized']} position={[-26.35, 25.92, -98.09]} rotation={[Math.PI / 2, 0, -0.13]} scale={35.91} />
    <mesh geometry={nodes.LussiRW.geometry} material={materials._H2A3430} position={[21.1, 27.76, -22.52]} rotation={[Math.PI / 2, 0, 1.43]} scale={46.75} />
    <mesh geometry={nodes.LussiLW4.geometry} material={materials['_H2A3423-resized']} position={[-60.31, 29.67, -78.99]} rotation={[Math.PI / 2, 0, -1.7]} scale={39} />
    <mesh geometry={nodes.LussiLW3.geometry} material={materials['_H2A3426-resized']} position={[-55.98, 29.97, -48.12]} rotation={[Math.PI / 2, 0, -1.7]} scale={39} />
    <mesh geometry={nodes.LussiLW2.geometry} material={materials['_H2A3427-resized']} position={[-51.51, 30.33, -16.86]} rotation={[Math.PI / 2, 0, -1.7]} scale={39} />
    <mesh geometry={nodes.LussiLW1.geometry} material={materials['_H2A3429-resized']} position={[-47.47, 30.33, 14.07]} rotation={[Math.PI / 2, 0, -1.7]} scale={39} />
    <mesh geometry={nodes.MartinaLussi.geometry} material={materials['Material.021']} position={[10.06, 38.66, -85.31]} rotation={[1.57, -0.01, 1.42]} scale={5.89} />
    <mesh geometry={nodes.Datum.geometry} material={materials['Material.022']} position={[10.01, 25.17, -84.06]} rotation={[1.57, -0.01, 1.42]} scale={4.24} />
    <mesh geometry={nodes.TheListener.geometry} material={materials['Material.023']} position={[10.02, 31.53, -84.88]} rotation={[1.57, -0.04, 1.43]} scale={6.91} />
    <mesh onClick={()=> LussiSoundOn()} geometry={nodes.sound_Listener.geometry} material={materials.volume} position={[-52.96, 7.27, -32.39]} rotation={[1.57, 0.01, -1.71]} scale={[4.56, 12.63, 4.18]} />
    <mesh onClick={()=> showInfoBW()} geometry={nodes.InfoBW.geometry} material={materials['info.009']} position={[3.65, 9.81, -102.1]} rotation={[1.57, 0, -0.11]} scale={4.66} />
    <mesh onClick={()=> showInfoRW()} geometry={nodes.InfoRW.geometry} material={materials['info.008']} position={[16.79, 7.26, -52.95]} rotation={[1.57, 0, 1.41]} scale={4.66} />
    {InfoLussiRW &&
    <Html position={[30, 68, -21.6]}>
      <div class="textbox">
      <button class="Onclicks" onClick={() => closeInfoRW()}>x</button>
      <p>Bisher beschäftigte sich Lussi in ihrer künstlerischen Praxis mit Field Recordings. 
        Es sind Aufzeichnungen von nicht eigens erzeugten Klängen, natürlichen Schallereignissen oder vorgefundenen Klanglandschaften ausserhalb eines Tonstudios. 
        Ihr Interesse liegt insbesondere in Aufnahmen von Natur- beziehungsweise Umgebungsgeräuschen, die sie mithilfe von portablen Aufnahmegeräten realisiert. 
        Das Still sein und reduzieren der eigenen Bewegungsgeräusche spielt dabei eine wichtige Rolle. 
        Es stellt sich die Frage, inwiefern die eigens produzierten Geräusche in den Aufzeichnungen von Naturaufnahmen Platz finden. 
        Körpergeräusche zeichnen sich durch den akustischen Ausdruck von physiologischen oder Vorgängen des menschlichen Körpers ab. 
        So entstehen diverse Schallphänomene: Herz-, Atem-, Gelenk- oder Schluckgeräusche. 
        Aber auch die Geräuschkulisse von Materialien wie die der Kleidung ist ein wichtiger Teil der Hörerfahrung.
      </p>
      <p>Solche Geräusche werden oftmals unterdrückt. 
        Wir kennen solche Rauschunterdrückungsverfahren beim Kauf von Kopfhörern, 
        die mit «Noise Cancelling» werben, d.h. die Kopfhörer können mithilfe eines Computerchips den Umgebungsschall eliminieren. 
        Bei Martina Lussi werden solche ungewollten und störenden Nebengeräusche zu Hauptakteuren. 
      </p>
      </div>
    </Html>}
    {InfoLussiBW &&
    <Html position={[-10, 53, -98.26]}>
      <div class="textbox">
      <button class="Onclicks" onClick={() => closeInfoBW()}>x</button>
      <p><a href="https://martinalussi.com/" target="_blank">Martina Lussi</a> (*1987) kreiert Installationen und Kompositionen aus einer Vielzahl unterschiedlicher Klangfragmenten und bearbeitetem akustischem Material. 
      Dabei basiert ihre künstlerische Herangehensweise hauptsächlich auf dem Akt des Zuhörens. 
      Ihre vielfältigen Soundlandschaften laden zum Flanieren ein.</p>
      <p>Im sic! Elephanthouse zeigt Lussi eine neue Arbeit. 
        Die Klanginstallation „The Listener“ basiert auf Studioaufnahmen von Lussi‘s selbst verursachten Jackengeräuschen, die durch Reibung, 
        Greifen oder Rascheln der unterschiedlichen stofflichen Beschaffenheit der Jacken verursacht wurden. 
        Vier unterschiedliche Jacken, dessen Oberfläche und Textur sich andersartig anhören und anfühlen wurden von Lussi je während 10 Minuten angezogen und mittels eigener Bewegung klanglich erforscht. 
        Entstanden sind vier Klangspuren, die auf vier Lautsprechern abgespielt werden, sodass eine zufällige Komposition, 
        eine neue klangliche Umgebung im Ausstellungsraum entsteht. 
        Die Jacken werden zum Hauptinstrument und ihre Verwendung erzeugt einen Raum, der über die klangliche Dokumentation hinausgeht.  
      </p>
      </div>
    </Html>}
    <mesh geometry={nodes.LussiPoster.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500']} position={[-59.39, 43.57, -57.88]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster001.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.001']} position={[-61.46, 43.57, -72.4]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster002.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.002']} position={[-63.04, 43.57, -86.83]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster003.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.003']} position={[-63.09, 22.82, -86.82]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster004.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.004']} position={[-61.32, 22.82, -72.24]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster005.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.005']} position={[-59.33, 22.82, -57.73]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster006.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.006']} position={[-63.59, 9.98, -86.75]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster007.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.007']} position={[-61.31, 10.11, -72.49]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster008.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.008']} position={[-59.16, 10.12, -58.04]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster009.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.009']} position={[-57.26, 43.57, -43.28]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster010.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.010']} position={[-55.57, 43.57, -28.67]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster011.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.011']} position={[-53.5, 43.57, -14.11]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster012.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.012']} position={[-57.26, 22.86, -43.28]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster013.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.013']} position={[-57.26, 9.88, -43.28]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster014.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.014']} position={[-55.57, 22.88, -28.67]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster015.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.015']} position={[-55.57, 10.48, -28.67]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster016.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.016']} position={[-53.49, 22.72, -14.11]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster017.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.017']} position={[-53.17, 10.22, -14.38]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster018.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.018']} position={[-51.51, 43.57, 0.5]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster019.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.019']} position={[-49.54, 43.57, 15.03]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster020.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.020']} position={[-48.04, 43.57, 29.45]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster021.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.021']} position={[-51.51, 22.95, 0.5]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster022.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.022']} position={[-49.54, 22.94, 15.03]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster023.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.023']} position={[-47.98, 22.92, 29.44]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster024.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.024']} position={[-51.51, 10.92, 0.5]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster025.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.025']} position={[-49.54, 10.76, 15.03]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
      <mesh geometry={nodes.LussiPoster026.geometry} material={materials['62f4efb97222c66a5ccd0364_ML_Poster_A3-p-500.026']} position={[-47.98, 10.81, 29.44]} rotation={[Math.PI / 2, 0, 1.44]} scale={20.74} />
    </group>
    }
    {about &&
      <group>
      <RoundedBox onClick={()=>showCurator()} args={[18, 4, 1]} position={new Vector3(-20, 5, -15)} material-color="#37343e" material-transparent={true} material-opacity={0.8} radius={0.5}>
      <Text font={process.env.REACT_APP_BASEURL + "ApfelGrotezk/ApfelGrotezk-Regular.otf"} position={new Vector3(-8, 0.5, 1)} color="white" anchorX="left" anchorY="middle" fontSize={2}>Frag das Team sic!</Text>
      </RoundedBox>
      <mesh geometry={nodes.Umbau04.geometry} material={materials.Umbau_04} position={[-26.35, 25.92, -98.09]} rotation={[Math.PI / 2, 0, -0.13]} scale={39} />
      <mesh geometry={nodes.Umbau02.geometry} material={materials.Umbau_02} position={[-55.98, 29.97, -48.12]} rotation={[Math.PI / 2, 0, -1.7]} scale={39} />
      <mesh geometry={nodes.Umbau03.geometry} material={materials.Umbau_03} position={[-51.51, 30.33, -16.86]} rotation={[Math.PI / 2, 0, -1.7]} scale={39} />
      <mesh geometry={nodes.Umbau01.geometry} material={materials.Umbau_01} position={[21.1, 27.76, -22.52]} rotation={[Math.PI / 2, 0, 1.43]} scale={46.75} />
      <mesh onClick={()=>showInfoRW()}
            geometry={nodes.AboutInfoRW.geometry} material={materials['info.005']} position={[15.3, 7.26, -61.91]} rotation={[1.57, 0, 1.41]} scale={4.66} />
      {InfoAbout &&
        <Html position={[30, 60, -21.6]}>
          <div class="textbox">
          <button class="Onclicks" onClick={() => closeInfoRW()}>x</button>
            <p>Das sic! Elephanthouse ist ein Ableger der Plattform sic! Raum für Kunst 
              und wird seit Februar 2013 in der Neustadstrasse als Ausstellungsort betrieben. 
              Die zentral gelegene, freistehende ehemalige Garage der SBB verfügt  über genügend Raum, 
              um Platz für zwei Elefanten zu bieten. Die etwa 50 Quadratmeter große, 
              fensterlose Garage wurde in einen “white cube“ umgewandelt und bietet heute Raum für Einzelausstellungen.
            </p>
          </div>
        </Html>}
      </group>}
    {curator &&
      <group>
      <mesh geometry={nodes.sabrina.geometry} material={materials.sabrina} position={[-25.53, 27.31, -98.9]} rotation={[-Math.PI / 2, 0, -3.01]} scale={[-43.63, -89.53, -43.63]} />
      <mesh geometry={nodes.Frage1.geometry} material={materials['Material.025']} position={[-56.06, 43.65, -94.27]} rotation={[Math.PI / 2, 0, -0.13]} scale={3.5} />
      <mesh onClick={()=>AudioQ11()} geometry={nodes.audioFrage1.geometry} material={materials['volume.002']} position={[1, 34.84, -101]} rotation={[Math.PI / 2, 0, -0.13]} scale={[4.56, 12.63, 4.18]} />
      {answersQ11 &&
        <Html position={[-50, 40, -98.26]}>
          <div class="textboxQ">
          <button class="Onclicks" onClick={()=>closeQ1()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ12()}><p>A: Ja, ich weiss was ein Offspace ist.</p></span>
          <span class="Onclicks" onClick={()=>AudioQ13()}><p>B: Ich habe den Begriff auch schon gehört, würde aber gerne mehr darüber wissen.</p></span>
          <span class="Onclicks" onClick={()=>AudioQ13()}><p>C: Nein, das weiss ich nicht. Erzähl mir mehr davon.</p></span>
          </div>
        </Html>}
      {answersQ12 && 
        <Html position={[-50, 40, -98.26]}>
          <div class="textboxQ">
          <button class="Onclicks" onClick={()=>closeQ1()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ16()}><p>A: Ja klar!</p></span>
          <span class="Onclicks" onClick={()=>AudioQ15()}><p>B: Nein, aber ich würde gerne einmal vorbeikommen.</p></span>
          <span class="Onclicks" onClick={()=>AudioQ15()}><p>C: Wo befindet sich das Elephanthouse denn genau? </p></span>
          </div>
        </Html>}
      {popupQ1 &&
        <Html position={[-50, 40, -98.26]}>
          <div class="textboxQ">
          <button class="Onclicks" onClick={()=>closeQ1()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ12()}>
          <p>Alles klar, erzähl mir bitte über die Mission des Elephanthouses.</p>
          <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
          </span>
          </div>
        </Html>}
      <mesh geometry={nodes.Frage2.geometry} material={materials['Material.026']} position={[11.88, 34.86, -86.76]} rotation={[1.57, -0.02, 1.43]} scale={3.5} />
      <mesh onClick={()=>AudioQ21()} geometry={nodes.audioFrage2.geometry} material={materials['volume.004']} position={[21.91, 35.93, -11.9]} rotation={[1.57, 0.01, 1.4]} scale={[4.56, 12.63, 4.18]} />
      {popupQ2_1 &&
        <Html position={[30, 30, -140]}>
          <div class="textboxQ">
          <button class="Onclicks" onClick={()=>closeQ2_1()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ22()}>
            <p>Gibt es ein Bewerbungsverfahren?</p>
            <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
            </span>
          </div>
        </Html>}
        {popupQ2_2 &&
        <Html position={[30, 30, -40]}>
          <div class="textboxQ">
          <button class="Onclicks" onClick={()=>closeQ2_2()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ23()}>
            <p>Wie tretet ihr mit den Kunstschaffenden in Kontakt?</p>
            <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
            </span>
          </div>
        </Html>}
      <mesh geometry={nodes.Frage3.geometry} material={materials['Material.024']} position={[11.58, 23.58, -87.21]} rotation={[1.57, -0.02, 1.43]} scale={3.5} />
      <mesh onClick={()=>AudioQ31()} geometry={nodes.audioFrage3.geometry} material={materials['volume.005']} position={[15.83, 25.53, -44.25]} rotation={[1.57, 0.01, 1.4]} scale={[4.56, 12.63, 4.18]} />
      {popupQ3_1 &&
        <Html position={[30, 60, -120]}>
          <div class="textboxQ3">
          <button class="Onclicks" onClick={()=>closeQ3_1()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ32()}>
            <p>1. Programmgestaltung</p>
            <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
            </span>
          </div>
        </Html>}
      {popupQ3_2 &&
        <Html position={[30, 55, -20]}>
          <div class="textboxQ3">
          <button class="Onclicks" onClick={()=>closeQ3_2()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ33()}>
            <p>2. Betreuung der Kunstschaffenden</p>
            <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
            </span>
          </div>
        </Html>}  
      {popupQ3_3 &&
        <Html position={[30, 40, -65]}>
          <div class="textboxQ3">
          <button class="Onclicks" onClick={()=>closeQ3_3()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ34()}>
            <p>3. Ressourcenmanagement</p>
            <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
          </span>
          </div>
        </Html>}
      {popupQ3_4 &&
        <Html position={[30, 20, -120]}>
          <div class="textboxQ3">
          <button class="Onclicks" onClick={()=>closeQ3_4()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ35()}>
            <p>4. Öffentlichkeitsarbeit</p>
            <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
            </span>
          </div>
        </Html>}
      {popupQ3_5 &&
        <Html position={[30, 20, -20]}>
          <div class="textboxQ3">
          <button class="Onclicks" onClick={()=>closeQ3_5()}>x</button>
          <span class="Onclicks" onClick={()=>AudioQ36()}>
            <p>5. Netzwerkbildung und Zusammenarbeit</p>
            <img src={process.env.REACT_APP_BASEURL+"images/play.png"} alt="play" width="20"/>
            </span>
          </div>
        </Html>} 
      <mesh geometry={nodes.Frage4.geometry} material={materials['Material.028']} position={[-52.51, 36.1, -27.62]} rotation={[1.57, -0.02, -1.7]} scale={3.5} />
      <mesh onClick={()=>AudioQ4()} geometry={nodes.audioFrage4.geometry} material={materials['volume.006']} position={[-58.38, 36.95, -66.59]} rotation={[1.57, 0.01, -1.71]} scale={[4.56, 12.63, 4.18]} />
      <mesh geometry={nodes.Frage5.geometry} material={materials['Material.027']} position={[-48.57, 23.4, 4.02]} rotation={[1.57, -0.02, -1.7]} scale={3.5} />
      <mesh onClick={()=>AudioQ5()} geometry={nodes.audioFrage5.geometry} material={materials['volume.007']} position={[-58.31, 23.93, -66.6]} rotation={[1.57, 0.01, -1.71]} scale={[4.56, 12.63, 4.18]} />
      </group>
    }
  </group>
  )
}

useGLTF.preload(process.env.REACT_APP_BASEURL + 'elephanthouse.glb')
