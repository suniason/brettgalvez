import { createContext, useContext, useEffect, useState } from "react"
import { AppContextType, ChildrenProps } from "../utils/types"


const ConfigContext = createContext<AppContextType | undefined>(undefined)  

export const ConfigProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600)
      };
      handleResize();
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      };
    }, []);
    
    return (
      <ConfigContext.Provider 
        value={{ darkMode, setDarkMode, isMobile, setIsMobile }}>
        {children}
      </ConfigContext.Provider>
    )
  }

  export const useConfigContext = (): AppContextType => {
    const context = useContext(ConfigContext)
  
    if (context == null) {
      throw new Error('useConfigContext must be used within a ConfigProvider')
    }
  
    return context
  }