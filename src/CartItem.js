import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price:999,
            title:'Mobile Phone',
            qty:1,
            img: ''
        }

    }
    increaseQuantity (){
        console.log('test');
    }
    render () {
        const{ price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                 <img style={styles.image}/>
                </div>
                <div>
                    <div className="right-block">
                        <div style={ {fontSize: 25}}>{title}</div>
                        <div style={{color:'#777'}}>Rs {price}</div>
                        <div style={{color:'#777'}}>Qty: {qty}</div>
                        <div className="cart-item-actions">
                            {/* {buttons} */}
                            <img 
                            alt="increase" 
                            className="action-icons" 
                            src="" 
                            onClick={this.increaseQuantity}
                            />
                            <img alt="decrease" className="action-icons" src="" />
                            <img alt="delete" className="action-icons"  src="" />

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height:110,
        width:110,
        borderRadius: 4,
        background:'#ccc'
    }
}

export default CartItem;