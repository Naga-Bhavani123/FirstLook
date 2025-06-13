import React from 'react'
const ReactContext = React.createContext({
    wishlist: [],
    WishlistAdd: ()=>{},
    WishListRemove: ()=>{},
    watchlist: [],
    watchlistAdd: ()=>{},
    watchlistRemove: ()=>{},
    searchname: '',
    search: ()=>{}
})
export default ReactContext