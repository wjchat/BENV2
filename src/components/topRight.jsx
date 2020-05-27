import React,{useEffect,useState} from "react"
import {gsap, Power3} from "gsap"
import "../sass/topRight.scss"

const TopRight = props =>{
    let contact
    let back
    const [message, updateMessage] = useState(null)
    useEffect(()=>{
        if(contact && back){
            if(props.showVideo){
                gsap.set(back, {
                    opacity: 0,
                    scale: .8,
                    pointerEvents: "none",
                })                
                gsap.to(back, {
                    opacity: 1,
                    scale: 1,
                    pointerEvents: "all",
                    ease: Power3.easeInOut,
                })                
                gsap.to(contact, {
                    opacity: 0,
                    scale: 1.2,
                    pointerEvents: "none",
                    ease: Power3.easeInOut,
                })
            }if(props.showVideo === false){    
                gsap.to(contact, {
                    opacity: 1,
                    scale: 1,
                    pointerEvents: "all",
                    ease: Power3.easeInOut,
                })                
                gsap.to(back, {
                    opacity: 0,
                    scale: .8,
                    pointerEvents: "none",
                    ease: Power3.easeInOut,
                })
            }
        }
    }, [props.showVideo, contact, back])
    return<div className = "topRight">
        <h1 
           ref = {div=>back=div}
            onClick = {()=>props.updateInfo({title: props.currentInfo.title, showVideo: false})}>BACK</h1>
        <h1
        ref = {div=>contact=div}
        >CONTACT</h1>
        </div>
    
}

export default TopRight