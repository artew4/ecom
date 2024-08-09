import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.scss"
import Button_login from "../components/Form1"
//import {Link} from "../components/Links"
import Form1 from "../components/Form1"
import "../styles/Main.scss"
import Header from "../components/Header"
import Header_buttons from "../components/Header_buttons"
import Header_text from "../components/Header_text"

function Home() {
    return (
        <div>
            <Header_text/>
            <Header_buttons/>
            <Header/>

            <div class='main-info'>

                {/* <div class="main-img-block">
                    <img src="/images/doc1.jpg" alt="Italian Trulli " class = 'main-img'></img>
                </div> */}
                <section class='section1'>
                    <div class="">
                        <div class="card1">
                            <div class="cover item-a0">
                                <h1>Ваше<br></br>Доверие</h1>
                                    <span class="price">Наша лицензия</span>
                                    <div class="card-back">
                                        <a href="https://companies.rbc.ru/trademark/1005023/runkaline/">Не желаете проверить?</a>
                                        {/* <a href="#">View detail</a> */}
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                        <p class="main-txt"> Приветствуем Всех в нашем магазине.
                        С вами RUNKALINE - Хозтовары и товары
                        оптом для маркетплейсов.
                        </p>
                        <p class="main-txt">
                            - Рассчитываем на долгосрочное сотрудничество, поэтому работаем ответственно и честно.</p>
                        <p class="main-txt">
                            - Самовывоз: г. Москва, ул. Малая Юшуньская улица, 1с1, БЦ "Берлин".</p>
                        <p class="main-txt">
                            - Доставка по РФ: СДЭК; Деловые линии; ПЭК; Байкал сервис; Шерл; Виктория; Кит и многие другие.</p>
                        <p class="main-txt">
                            - Есть возможность обмена брака.</p>
                        <p class="main-txt">
                            - Гарантированное качество.</p>
                <div class="main-txt">      
                </div>
                
                        
                        
            </div>
            
        </div>
    );
}

export default Home;
