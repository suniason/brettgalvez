import { ReactNode } from "react"

export interface AppContextType{
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isMobile: boolean
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ChildrenProps {
  children: ReactNode
}