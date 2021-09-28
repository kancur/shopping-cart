import React, { useState } from 'react'

export const dataStore = React.createContext(null)

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(['cick', 'tam'])


  return <dataStore.Provider value={{cart, setCart}} >{children}</dataStore.Provider>
}

export default StoreProvider