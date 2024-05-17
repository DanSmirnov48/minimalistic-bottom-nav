import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  to?: string
  disabled?: boolean
  icon?: keyof typeof Icons
  external?: boolean
}

export interface OptionalNavItem {
  title: string
  to: string
  icon?: keyof typeof Icons
}