import React, { createContext, useContext, useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { RemoveScroll } from "react-remove-scroll"

export const PrankContext = createContext()

export const PrankProvider = ({ children }) => {
  const [showPrank, setShowPrank] = useState(false)

  useEffect(() => {
    let timeout
    if (!localStorage.getItem("launch-prank")) {
      setShowPrank(true)
      timeout = setTimeout(() => {
        setShowPrank(false)
      }, 1000)
      localStorage.setItem("launch-prank", "shown")
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <PrankContext.Provider value={{ showPrank }}>
      <AnimatePresence>
        {showPrank && (
          <motion.div
            style={{ margin: "8px", fontFamily: "Times" }}
            initial={{ height: "100vh" }}
            animate={{ height: 0 }}
            exit={{ height: 0 }}
            transition={{ delay: 9, type: "tween", duration: 3 }}
          >
            <RemoveScroll removeScrollBar />
            <h1 style={{ fontSize: "32px", fontWeight: 700 }}>
              Resource Limit Is Reached
            </h1>
            The website is temporarily unable to service your request as it
            exceeded resource limit. Please try again later.
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </PrankContext.Provider>
  )
}

export const usePrank = () => useContext(PrankContext)
