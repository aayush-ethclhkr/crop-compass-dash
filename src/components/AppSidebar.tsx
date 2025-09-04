import { Home, Phone, HelpCircle, Wheat, TrendingUp, Sprout } from "lucide-react"
import { NavLink } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Farming Techniques", url: "/farming-techniques", icon: Wheat },
  { title: "MSP Rates", url: "/msp-rates", icon: TrendingUp },
  { title: "Help", url: "/help", icon: HelpCircle },
  { title: "Contact Us", url: "/contact", icon: Phone },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            {!isCollapsed && (
              <div>
                <h2 className="text-lg font-bold text-primary">AgriDash</h2>
                <p className="text-xs text-muted-foreground">Rural Development</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) =>
                        isActive 
                          ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
                          : "hover:bg-muted/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}