import React from "react"
import { cn } from "~/lib/cn"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
	className,
	...props
}, forwardedRef) => {
	return (
		<input
			ref={forwardedRef}
			className={cn("bg-white text-slate-700 dark:text-slate-300 hover:border-slate-600 hover:dark:bg-slate-900 transition-colors dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-400 dark:border-slate-500 selection:dark:text-white selection:text-slate-700 selection:bg-slate-300 selection:dark:bg-slate-700 outline-none focus-within:ring-2 ring-offset-1 ring-indigo-200 dark:ring-indigo-950 ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",className)}
			{...props}
		/>
	)
})

export {
	Input
}