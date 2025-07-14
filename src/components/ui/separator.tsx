// src/components/ui/separator.tsx
import { cn } from "@/lib/utils"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as React from "react"

/**
 * Separator component for visual content division
 * @param className - Additional CSS classes
 * @param orientation - Horizontal or vertical orientation
 * @param decorative - Whether separator is decorative only
 * @param props - Additional separator props
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
