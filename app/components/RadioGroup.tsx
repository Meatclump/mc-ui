import * as rxRadioGroup from "@radix-ui/react-radio-group"
import React from "react"
import { cn } from "~/lib/cn"

const RadioGroup = React.forwardRef<React.ElementRef<typeof rxRadioGroup.Root>, React.ComponentPropsWithoutRef<typeof rxRadioGroup.Root>>(({
	children,
	className,
	...props
}, forwardRef) => {
	return (
		<rxRadioGroup.Root
			ref={forwardRef}
			className={cn("group flex flex-col gap-3",className)}
			{...props}
		>
			{children}
		</rxRadioGroup.Root>
	)
})

const RadioButton = React.forwardRef<React.ElementRef<typeof rxRadioGroup.Item>, React.ComponentPropsWithoutRef<typeof rxRadioGroup.Item>>(({
	className,
	...props
}, forwardRef) => {
	return (
		<rxRadioGroup.Item
			ref={forwardRef}
			className={cn(
				"bg-white w-5 h-5 rounded-full border border-slate-400 hover:border-slate-600 dark:bg-slate-800 dark:border-slate-500 dark:hover:border-slate-500 dark:hover:bg-slate-900",
				"outline-none focus:ring-2 ring-offset-1 ring-indigo-200 dark:ring-indigo-950 ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
				className)}
			{...props}
		>
			<rxRadioGroup.Indicator className={cn("flex justify-center items-center after:rounded-full after:block after:content-[''] after:w-2.5 after:h-2.5 after:bg-slate-700 group-active:after:bg-slate-800 dark:after:bg-white dark:group-active:after:bg-slate-400")} />
		</rxRadioGroup.Item>
	)
})

export {
	RadioGroup,
	RadioButton
}