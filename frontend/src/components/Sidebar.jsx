import React from 'react';
import "../styles/Sidebar.css"
// import { SidebarData } from './SidebarData';
import reactLogo from '../assets/react.svg'
import home from '../assets/home.svg'
import profile from '../assets/profile.svg'
import shop from '../assets/shop.svg'
import contacts from '../assets/map.svg'

// главная
// профиль
// контакты
// товары

function Sidebar() {
    return(
    <div class="sidebar">
        <ul>
            <li>
                <div className='container top'>
                    <a href="" className="logo top" alt="React logo"><img src={reactLogo}/></a>
                </div>
            </li>

            <li>
                <div className='container'>
                    <a href="" className="logo menu" alt="React logo"><img src={home}/></a>
                    <a href="" className='container text'>Главная</a>
                </div>
            </li>

            <li>
            <div className='container'>
                    <a href="" className="logo menu" alt="React logo"><img src={profile}/></a>
                    <a href="" className='container text'>Профиль</a>
                </div>
            </li>

            <li>
            <div className='container'>
                    <a href="" className="logo menu" alt="React logo"><img src={shop}/></a>
                    <a href="" className='container text'>Товары</a>
                </div>
            </li>

            <li>
            <div className='container'>
                    <a href="" className="logo menu" alt="React logo"><img src={contacts}/></a>
                    <a href="" className='container text'>Контакты</a>
                </div>
            </li>
        </ul>        
    </div>
    );
}

export default Sidebar;

        // <ul>
        // {SidebarData.map((val, key)=>{
        //         return (
        //             <li key={key}> 
        //             {""}
        //             <div>{val.icon}</div>{""}
        //             </li>
        //         )
        //     })}
        // </ul> 
        // ahahah