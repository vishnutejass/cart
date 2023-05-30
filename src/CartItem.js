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
    this.testing();
    }
    testing() {
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('done');
            },5000);
    })

    promise.then(() => {
        this.setState({ qty:this.state.qty + 10});

        this.setState({ qty:this.state.qty + 10});

        this.setState({ qty:this.state.qty + 10});

        console.log('state',this.state);
    });
}
    increaseQuantity =() =>{
       // this.state.qty +=1;
       // console.log('this',this.state);
        //setstate form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });
        
        //setstate form 2
        this.setState((prevState) => {
               return{
                qty:prevState.qty +1
               }
        } 
        // ,() => {
        //     console.log('this.state',this.state);
        // }
        );
    }
        decreaseQuantity = ()=>{
            const { qty} =this.state;

            if(qty === 0) {
                return;
            }

            this.setState((prevState) =>{
                  return{
                
                    qty:prevState.qty-1

                  }
            });
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
                            <i  onClick= {this.increaseQuantity} class="ri-arrow-up-circle-line"></i>   
                            <i  onClick= {this.decreaseQuantity} class="ri-delete-bin-fill"></i>
                            {/* <img
                            
                            alt="increase" 
                            className="action-icons" 
                            src=""
                            onClick={this.increaseQuantity}
                            /> */}

                            {/* <img alt="decrease" className="action-icons" src="" />
                            <img alt="delete" className="action-icons"  src="" /> */}

                            
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