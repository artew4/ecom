import React from "react";
import "../styles/Header_text.scss"

function Header_text({ }) {   
    return (
        <div>
        <h2 class="border">Минимальный заказ от 10000р</h2>
        <h2 class="wave">Минимальный заказ от 10000р</h2>
        
        <h2 class="border two">Только крупный опт</h2>
        <h2 class="wave two">Только крупный опт</h2>
        
        <h2 class="border three">Доставка по РФ и СНГ </h2>
        <h2 class="wave three">Доставка по РФ и СНГ </h2>
        </div>
        
    );
}
export default Header_text
