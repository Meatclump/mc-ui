import React from "react"
import { cn } from "~/lib/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "contrast"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({variant, className, children, ...props}, forwardedRef) => {
	const variants: {[key: string]: string} = {
		"default": "px-2 py-1 border border-slate-400 text-slate-800 bg-white hover:border-slate-600 active:bg-slate-100 dark:border-slate-500 dark:text-slate-300 dark:bg-slate-800 rounded-md dark:hover:text-white dark:hover:bg-slate-900 dark:active:bg-slate-950 dark:hover:border-slate-400",
		"contrast": "px-2 py-1 rounded-md border border-transparent bg-slate-800 text-white hover:bg-slate-900 active:bg-slate-950 dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-white dark:active:bg-slate-200"
	}

	return (
		<button
			ref={forwardedRef}
			className={cn(
				variants[variant ?? "default"],
				"outline-none focus:ring-2 ring-offset-1 ring-indigo-200 dark:ring-indigo-950 ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
})

export {
	Button
}