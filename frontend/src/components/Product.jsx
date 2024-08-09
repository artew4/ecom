import React from "react";
import "../styles/Product.scss"

function Product({name1, name2, price, image}) {
    return (
        <div>
            <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="card">

                                <div class={image}>                                        
                                        <h1>{name1}<br></br>{name2}</h1>
                                        <span class="price">{price}</span>
                                        <div class="card-back">
                                            <a href="#">Add to cart</a>
                                            <a href="#">View detail</a>
                                        </div>
                                </div>
                            </div>
                    </div>
            </div>            
        </div>
    );
}
export default Product