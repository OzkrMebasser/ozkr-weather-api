
import React from 'react';
import './Home.css'
import nubesBg from '../media/backgrounds/background-home.mp4'
import { Link } from 'react-router-dom';
// import style from './Home.module.css';







const Home = () => {
    
    return ( 
        <div className="homehome">
            <div className="home">
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1",
                        
                    }
                }
                >
                <source src={nubesBg} type="video/mp4"></source>
                </video>
                 <h1 id="tituloHome">Busca el clima de cualquier ciudad del mundo</h1>

                 <br/>
                 <button id="buttonStart"> <Link to="/cards">Comenzar</Link></button>
                
                <span>
                <h3 className="made">Created by OskrMebasser</h3>
                <a href="https://github.com/OzkrMebasser" target="__blank" ><i className="rainbow fab fa-github fa-3x"></i> </a>
                </span>
            </div>
             
        
        </div>
     );
}


export default Home;