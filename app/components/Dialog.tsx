import React from "react"
import * as rxDialog from "@radix-ui/react-dialog"
import { cn } from "~/lib/cn"

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
			className={cn("", className)}
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
			className={cn("", className)}
			{...props}
		>
			{children}
		</rxDialog.Content>
	)
})

// const DialogHeader = React.forwardRef<React.ElementRef<typeof rxDialog.Header>, React.ComponentPropsWithoutRef<typeof rxDialog.Header>>(({
// 	children,
// 	className,
// 	...props
// }, forwardedRef) => {
// 	return (
// 		<rxDialog.Header
// 			ref={forwardedRef}
// 			className={cn("", className)}
// 			{...props}
// 		>
// 			{children}
// 		</rxDialog.Header>
// 	)
// })

// const DialogFooter = React.forwardRef<React.ElementRef<typeof rxDialog.Footer>, React.ComponentPropsWithoutRef<typeof rxDialog.Footer>>(({
// 	children,
// 	className,
// 	...props
// }, forwardedRef) => {
// 	return (
// 		<rxDialog.Footer
// 			ref={forwardedRef}
// 			className={cn("", className)}
// 			{...props}
// 		>
// 			{children}
// 		</rxDialog.Footer>
// 	)
// })

const DialogTitle = React.forwardRef<React.ElementRef<typeof rxDialog.Title>, React.ComponentPropsWithoutRef<typeof rxDialog.Title>>(({
	children,
	className,
	...props
}, forwardedRef) => {
	return (
		<rxDialog.Title
			ref={forwardedRef}
			className={cn("", className)}
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
			className={cn("", className)}
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
	DialogContent
}