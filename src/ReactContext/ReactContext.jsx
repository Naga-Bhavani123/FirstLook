import React from 'react'
const ReactContext = React.createContext({
    wishlist: [],
    WishlistAdd: ()=>{},
    WishListRemove: ()=>{},
    watchlist: [],
    watchlistAdd: ()=>{},
    watchlistRemove: ()=>{}
})
export default ReactContext