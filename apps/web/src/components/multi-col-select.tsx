'use client'

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { useState,useEffect } from "react"
import { Button } from "@repo/ui"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui"
 
type Checked = DropdownMenuCheckboxItemProps["checked"]

interface dropdownPorps{
  columns:string[],
  onColChange:(selectedColumns:string[])=>void,
  d_type:string
}
 
export const DropdownColumns=({columns,onColChange,d_type}:dropdownPorps)=> {
  const [showStatusBar, setShowStatusBar] = useState<Record<string, Checked>>({})

  useEffect(() => {
    const selectedColumns = Object.keys(showStatusBar).filter(
      (col) => showStatusBar[col] === true
    )
    onColChange(selectedColumns)
  }, [showStatusBar, onColChange])

  const handleCheckedChange = (column: string, checked: Checked) => {
    setShowStatusBar((prev) => ({
      ...prev,
      [column]: checked
    }))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{d_type} Columns</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-60 overflow-visible overflow-y-auto">
        <DropdownMenuLabel>Select Columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {columns.length>0?
        columns.map((col)=>(
          <DropdownMenuCheckboxItem
          key={col}
          checked={showStatusBar[col]??false}
          onCheckedChange={(checked)=>handleCheckedChange(col,checked)}>
            {col}
          </DropdownMenuCheckboxItem>)):
        <DropdownMenuCheckboxItem
        checked={false} disabled>
          No File Uploaded
        </DropdownMenuCheckboxItem>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}