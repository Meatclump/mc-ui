import * as rxSeparator from "@radix-ui/react-separator"
import React from "react"
import { cn } from "~/lib/cn"

const Separator = React.forwardRef<React.ElementRef<typeof rxSeparator.Root>, React.ComponentPropsWithoutRef<typeof rxSeparator.Root>>(({
	className,
	orientation = "horizontal",
	decorative = true,
	...props
}, forwardedRef) => {
	return (
		<rxSeparator.Root
			ref={forwardedRef}
			className={cn("bg-slate-400 dark:bg-slate-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=horizontal]:my-3 data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full data-[orientation=vertical]:mx-3", className)}
			orientation={orientation}
			decorative={decorative}
			{...props}
		/>
	)
})

export {
	Separator
}