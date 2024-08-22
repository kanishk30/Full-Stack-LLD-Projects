import React, { useCallback, useState } from 'react';

const ItemsList = () => {

    const [items, setItems] = useState(
        ['item1', 'item2', 'item3']
    )

    // function handleRemoveItem(removeItem) {
    //     const updatedList = items.filter((item) => item !== removeItem);

    //     setItems(updatedList);
    // }

    const removeItemWithCallBack = useCallback((removeItem) => {
        const updatedList = items.filter((item) => item !== removeItem);
        setItems(updatedList);
    }, [])


    return (
        <div>
            {items.map((item, idx) => (
                <div key={idx}>
                    {item}
                    <button onClick={() => removeItemWithCallBack(item)}>Remove</button>
                </div>
            ))}
        </div>
    )

}

export default ItemsList;