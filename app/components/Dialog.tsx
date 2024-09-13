import React from "react"
import * as rxDialog from "@radix-ui/react-dialog"
import { cn } from "~/lib/cn"
import { FaXmark } from "react-icons/fa6"

const Dialog = rxDialog.Root
const DialogTrigger = rxDialog.Trigger
const DialogPortal = rxDialog.Portal
const DialogClose = rxDialog.Close

const DialogOverlay = React.forwardRef<React.ElementRef<typeof rxDialog.Overlay>, React.ComponentPropsWithoutRef<typeof rxDialog.Overlay>>(({
	className,
	...props
}, forwardedRef) => {
	return (
		<rxDialog.Overlay
			ref={forwardedRef}
			className={cn(
				"data-[state=open]:animate-in data-[state=open]:fade-in-0",
				"data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
				"bg-slate-950/80 fixed inset-0",
				className
			)}
			{...props}
		/>
	)
})

const DialogContent = React.forwardRef<React.ElementRef<typeof rxDialog.Content>, React.ComponentPropsWithoutRef<typeof rxDialog.Content>>(({
	children,
	className,
	...props
}, forwardedRef) => {
	return (
		<rxDialog.Content
			ref={forwardedRef}
			className={cn(
				"data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-3",
				"data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-3",
				"fixed z-50 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-h-[85vh] w-[90vw] max-w-[450px] rounded-md dark:bg-slate-800 dark:text-slate-300 px-4 py-6",
				className
			)}
			{...props}
		>
			{children}
			<rxDialog.Close className="group p-1 rounded-md absolute top-3 right-3 outline-none focus-within:ring-2 ring-offset-1 ring-indigo-200 dark:ring-indigo-950 ring-offset-slate-400">
				<FaXmark className="text-slate-500 group-hover:text-slate-400" />
				<span className="sr-only">Close</span>
			</rxDialog.Close>
		</rxDialog.Content>
	)
})

const DialogTitle = React.forwardRef<React.ElementRef<typeof rxDialog.Title>, React.ComponentPropsWithoutRef<typeof rxDialog.Title>>(({
	children,
	className,
	...props
}, forwardedRef) => {
	return (
		<rxDialog.Title
			ref={forwardedRef}
			className={cn("text-xl leading-none tracking-normal dark:text-slate-300", className)}
			{...props}
		>
			{children}
		</rxDialog.Title>
	)
})

const DialogDescription = React.forwardRef<React.ElementRef<typeof rxDialog.Description>, React.ComponentPropsWithoutRef<typeof rxDialog.Description>>(({
	children,
	className,
	...props
}, forwardedRef) => {
	return (
		<rxDialog.Description
			ref={forwardedRef}
			className={cn("text-sm dark:text-slate-400", className)}
			{...props}
		>
			{children}
		</rxDialog.Description>
	)
})

export {
	Dialog,
	DialogTrigger,
	DialogPortal,
	DialogClose,
	DialogOverlay,
	DialogContent,
	DialogTitle,
	DialogDescription,
}