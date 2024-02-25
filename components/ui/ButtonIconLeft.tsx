import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonIconLeft() {
  return (
    <Button variant="outline" size="icon">
      <ChevronLeft className="h-4 w-4" />
    </Button>
  )
}
