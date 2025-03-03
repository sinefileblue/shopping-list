import React from 'react'

function ShoppingItem(props) {
    return <li>{props.item} ({props.quantity}) <button>Delete</button></li>;
}

export default function ShoppingList({ items }) {
console.log(items)
    const ItemsJsx = items.map(listItem =>
            <ShoppingItem
                key={listItem.id}
                id={listItem.id}
                item={listItem.item}
                quantity={listItem.quantity}
            />
    )

    return(
        <ul>{ItemsJsx}</ul>
    );
}