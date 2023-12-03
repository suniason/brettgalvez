import { createContext, useContext, useState } from "react"
import { AppContextType, ChildrenProps } from "../utils/types"


const ConfigContext = createContext<AppContextType | undefined>(undefined)  

export const ConfigProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(true)
    
    return (
      <ConfigContext.Provider 
        value={{ darkMode, setDarkMode }}>
        {children}
      </ConfigContext.Provider>
    )
  }

  export const useConfigContext = (): AppContextType => {
    const context = useContext(ConfigContext)
  
    if (context == null) {
      throw new Error('useRecipeContext must be used within a RecipeProvider')
    }
  
    return context
  }