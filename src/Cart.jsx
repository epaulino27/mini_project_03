function Cart({items, onRemove}) {
    return(
        <div>
            <h2>Cart Checkout</h2>
            {/* the jsx version of if (?) else (:) */}
            {/* check cart items and display them */}
            
            {items.length === 0 
                ? <p>No items yet</p> 
                : items.map(
                    item => ( 
                    <div key={item.name}> 
                        <p>{item.name} ({item.quantity})</p> 
                        <button onClick={() => onRemove(item)}>Remove Item</button> 
                    </div> 
                ))
            }
        </div>
    )
}

export default Cart