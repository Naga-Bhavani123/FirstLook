import React from 'react'
const ReactContext = React.createContext({
    wishlist: [],
    WishlistAdd: ()=>{},
    WishListRemove: ()=>{}
})
export default ReactContext