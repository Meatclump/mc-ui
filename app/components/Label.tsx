import * as rxLabel from "@radix-ui/react-label"
import React from "react"
import { cn } from "~/lib/cn"

const Label = React.forwardRef<React.ElementRef<typeof rxLabel.Root>, React.ComponentPropsWithoutRef<typeof rxLabel.Root>>(({
	children,
	className,
	...props
}, forwardedRef) => {
	return (
		<rxLabel.Root
			ref={forwardedRef}
			className={cn("text-slate-900 dark:text-white leading-5 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:pointer-events-none",className)}
			{...props}
		>
			{children}
		</rxLabel.Root>
	)
})

export {
	Label
}