import * as rxCheckbox from "@radix-ui/react-checkbox"
import React from "react"
import { FaCheck } from "react-icons/fa6"
import { cn } from "~/lib/cn"

const Checkbox = React.forwardRef<React.ElementRef<typeof rxCheckbox.Root>, React.ComponentPropsWithoutRef<typeof rxCheckbox.Root>>(({className, ...props}, forwardedRef) => {
	return (
		<rxCheckbox.Root
			ref={forwardedRef}
			{...props}
			className={cn(
				"h-5 w-5 border border-slate-400 dark:border-slate-500 bg-slate-200 hover:bg-slate-300 data-[state=checked]:bg-slate-400 data-[state=checked]:hover:bg-slate-300 dark:bg-slate-800 dark:hover:data-[state=unchecked]:bg-slate-900 dark:hover:data-[state=checked]:bg-slate-600 dark:data-[state=checked]:bg-slate-500 transition-colors rounded disabled:cursor-not-allowed shrink-0 disabled:opacity-50 disabled:pointer-events-none outline-none focus-within:ring-2 ring-offset-1 ring-offset-slate-300 dark:ring-offset-slate-600 ring-indigo-200 dark:ring-indigo-950",
				className
			)}
		>
			<rxCheckbox.Indicator className={cn("flex items-center justify-center data-[state=checked]:text-slate-600 dark:data-[state=checked]:text-slate-800")}>
				<FaCheck className="w-4 h-4" />
			</rxCheckbox.Indicator>
		</rxCheckbox.Root>
	)
})

export {
	Checkbox
}