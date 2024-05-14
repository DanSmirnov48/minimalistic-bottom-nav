import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  to?: string
  disabled?: boolean
  icon?: keyof typeof Icons
  external?: boolean
}