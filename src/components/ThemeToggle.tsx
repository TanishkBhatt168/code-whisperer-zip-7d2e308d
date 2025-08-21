import { Moon, Sun, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme, colorTheme, setColorTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="glass-effect">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-effect">
        <DropdownMenuLabel>Theme Mode</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
        
        <DropdownMenuItem onClick={() => setColorTheme("blue")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
          Sky Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("purple")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-purple-500" />
          Purple
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("green")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
          Green
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorTheme("orange")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-orange-500" />
          Orange
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}