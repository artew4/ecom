import Product from "../components/Product"
import "../styles/Shop.css"
import Header from "../components/Header"
import Header_buttons from "../components/Header_buttons"
import Header_text from "../components/Header_text"

function Shop() {
    return (
        <div>
            <Header_text/>
            <Header_buttons/>
            <Header/>
            <ul class="cats">
                <Product name1={'Little'} name2={'Bonsai'} price={'$79'} image={'cover item-a'}/>
                <Product name1={'Tropical'} name2={'Leaf'} price={'$35'} image={'cover item-b'}/>
                <Product name1={'Marijuana'} name2={'Chill'} price={'$155'} image={'cover item-c'}/>
            </ul>            
        </div>
    );
}

export default Shop;