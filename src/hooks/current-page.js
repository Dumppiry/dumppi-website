import React, { createContext, useContext, useState } from "react"

export const CurrentPageContext = createContext()

export const CurrentPageProvider = ({ children }) => {
  const [locale, setLocale] = useState()
  const [currentPageId, setCurrentPageId] = useState()

  return (
    <CurrentPageContext.Provider
      value={{ locale, setLocale, currentPageId, setCurrentPageId }}
    >
      {children}
    </CurrentPageContext.Provider>
  )
}

export const useCurrentPage = () => useContext(CurrentPageContext)
