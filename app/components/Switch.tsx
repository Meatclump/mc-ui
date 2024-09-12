import * as rxSwitch from "@radix-ui/react-switch"
import React from "react"
import { cn } from "~/lib/cn"

const Switch = React.forwardRef<React.ElementRef<typeof rxSwitch.Root>, React.ComponentPropsWithoutRef<typeof rxSwitch.Root>>(({
	className,
	...props
}, forwardedRef) => {
	return (
		<rxSwitch.Root
			ref={forwardedRef}
			className={cn("group appearance-none rounded-full bg-slate-400 dark:bg-slate-500 w-12 h-5 relative transition-colors duration-300 outline-none focus-within:ring-2 ring-offset-1 ring-offset-slate-300 dark:ring-offset-slate-600 ring-indigo-200 dark:ring-indigo-950 self-center data-[state=checked]:bg-blue-500 data-[state=checked]:dark:bg-slate-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50")}
			{...props}
		>
			<rxSwitch.Thumb className={cn("bg-white dark:bg-slate-800 top-[.15rem] left-[.15rem] transition-[left,background-color] w-4 h-4 absolute rounded-full data-[state=checked]:left-[1.85rem] data-[state=checked]:duration-300 pointer-events-none group-hover:bg-slate-100 group-hover:drop-shadow-md group-hover:dark:bg-slate-900 group-hover:dark:drop-shadow-lg")} />
		</rxSwitch.Root>
	)
})

export { Switch }