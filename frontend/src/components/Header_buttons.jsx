import React from "react";
import "../styles/Header_buttons.scss"


function Header_buttons({ }) {   
    return (
        <div class="text_box">
            <div class='button_box'>
                <a href="/">Главная</a>
                <a href="/profile">Профиль</a>
                <a href="/shop">Товары</a>
                <a href="/contacts">Контакты</a>
            </div>
        </div>
    );
}

export default Header_buttons