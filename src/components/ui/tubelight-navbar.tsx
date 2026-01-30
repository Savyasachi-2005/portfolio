"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/useTheme"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(() => {
    const currentItem = items.find(item => item.url === location.pathname)
    return currentItem?.name || items[0].name
  })
  const { theme, toggleTheme } = useTheme()

  // Update active tab when location changes
  useEffect(() => {
    const currentItem = items.find(item => item.url === location.pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 pb-4 sm:pb-0 sm:pt-4 md:pt-6 px-2",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3 bg-theme-bg/70 border border-theme-accent/20 backdrop-blur-xl py-1.5 px-1.5 sm:px-2 rounded-full shadow-lg max-w-[calc(100vw-1rem)]">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 rounded-full transition-colors",
                "text-theme-text-alt hover:text-theme-accent",
                isActive && "bg-theme-accent/10 text-theme-accent",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} className="sm:w-[18px] sm:h-[18px]" />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-theme-accent/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-theme-accent rounded-t-full">
                    <div className="absolute w-12 h-6 bg-theme-accent/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-theme-accent/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-theme-accent/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative cursor-pointer text-sm font-semibold px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-colors text-theme-text-alt hover:text-theme-accent hover:bg-theme-accent/10"
        >
          <span className="text-base sm:text-lg" role="img" aria-hidden="true">
            {theme === 'cyber' ? '⚡' : '☕'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default NavBar
