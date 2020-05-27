import React,{useState, useEffect} from 'react';

import {gsap, Power3, Power2} from 'gsap'
import Reel from './reel.jsx';
import Title from './title.jsx';
import TopRight from "./topRight.jsx"
import Video from './video.jsx'
import "../sass/home.scss";

const Home = props =>{
    let reel
    let time = .8;
    const [current, updateCurrent] = useState(1)
    const [prev, updatePrev] = useState(1)
    const [currentInfo, updateInfo] = useState({title: "", video: "", showVideo: false,})
    useEffect(()=>{
        if(reel){
            gsap.to(reel, time, {
                x: `${(current- 1) * -50}vw`,
                ease: Power3.easeInOut,
            })
        }
    }, [current, reel])
    useEffect(()=>{
        setTimeout(()=>{
            updatePrev(current)
        }, 100)
    }, [current])
    return(
    <div className = "homeContainer">
        <div className = "header">
            <h1>BSR</h1>
            <TopRight 
            currentInfo = {currentInfo}
            updateInfo = {(info)=>updateInfo(info)}
            showVideo = {currentInfo.showVideo}/>
        </div>
        <div className = "reel">
          <div ref = {div=>reel=div} className = "case">
               <div className = "placeholder"></div>
                <Reel 
                showVideo = {currentInfo.showVideo}
                time = {time}
                updateCurrent = {(num)=>updateCurrent(num)}
                updateInfo = {(info)=>updateInfo(info)}
                current = {current} />
          </div>
            <Title 
            showVideo = {currentInfo.showVideo}
            direction = {prev < current ? 1:-1 }
            time = {time}
            title = {currentInfo.title} />
        </div>
            <Video 
            time = {time}
            video = {currentInfo.video} 
            show = {currentInfo.showVideo}/>
    </div>
    )
}
export default Home