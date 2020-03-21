import React, { createContext, useContext, useState } from "react"

export const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => setShowNav(prev => !prev)
  const hideNav = () => setShowNav(false)

  return (
    <NavigationContext.Provider value={{ showNav, toggleNav, hideNav }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
