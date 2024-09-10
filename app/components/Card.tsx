import { cn } from "~/lib/cn"

export const CardWrapper = ({
	children,
	className
}: {
	children?: React.ReactNode,
	className?: string
}) => {
	return (
		<div className={cn("border border-slate-400 dark:border-slate-500 rounded-lg shadow-md bg-stone-100 dark:bg-gray-700 transition-colors duration-300 flex flex-col dark:text-slate-200", className)}>
			{children}
		</div>
	)
}

export const CardHeader = ({
	children,
	className
}: {
	children?: React.ReactNode,
	className?: string
}) => {
	return (
		<div className={cn("p-4 border-b border-slate-400 dark:border-slate-500", className)}>
			{children}
		</div>
	)
}

export const CardTitle = ({
	children,
	className
}: {
	children?: React.ReactNode,
	className?: string
}) => {
	return (
		<h2 className={cn("text-2xl", className)}>
			{children}
		</h2>
	)
}

export const CardDescription = ({
	children,
	className
}: {
	children?: React.ReactNode,
	className?: string
}) => {
	return (
		<p className={cn(className)}>
			{children}
		</p>
	)
}

export const CardContent = ({
	children,
	className
}: {
	children?: React.ReactNode,
	className?: string
}) => {
	return (
		<div className={cn("p-4 flex-1 flex", className)}>
			{children}
		</div>
	)
}

export const CardFooter = ({
	children,
	className
}: {
	children?: React.ReactNode,
	className?: string
}) => {
	return (
		<div className={cn("p-4 border-t border-slate-400 dark:border-slate-500", className)}>
			{children}
		</div>
	)
}