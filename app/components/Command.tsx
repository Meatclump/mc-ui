import * as React from "react"
import { Command as CMDKCommand } from "cmdk"
import { cn } from "~/lib/cn"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Dialog, DialogContent } from "./Dialog"
import { FaMagnifyingGlass } from "react-icons/fa6"

const Command = React.forwardRef<React.ElementRef<typeof CMDKCommand>, React.ComponentPropsWithoutRef<typeof CMDKCommand>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand
		ref={forwardedRef}
		className={cn(
			"bg-slate-500",
			className
		)}
		{...props}
	/>
))

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => (
	<Dialog {...props}>
		<DialogContent className="">
			<Command className="">
				{children}
			</Command>
		</DialogContent>
	</Dialog>
)

const CommandInput = React.forwardRef<React.ElementRef<typeof CMDKCommand.Input>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Input>>(({ className, ...props }, forwardedRef) => (
	<div className="">
		<FaMagnifyingGlass />
		<CMDKCommand.Input
			ref={forwardedRef}
			className={cn(
				"",
				className
			)}
			{...props}
		/>
	</div>
))

const CommandList = React.forwardRef<React.ElementRef<typeof CMDKCommand.List>, React.ComponentPropsWithoutRef<typeof CMDKCommand.List>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand.List
		ref={forwardedRef}
		className={cn(
			"",
			className
		)}
		{...props}
	/>
))

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CMDKCommand.Empty>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Empty>>((props , forwardedRef) => (
	<CMDKCommand.Empty
		ref={forwardedRef}
		className={cn("")}
		{...props}
	/>
))

const CommandGroup = React.forwardRef<React.ElementRef<typeof CMDKCommand.Group>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Group>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand.Group
		ref={forwardedRef}
		className={cn(
			"",
			className
		)}
		{...props}
	/>
))

const CommandSeparator = React.forwardRef<React.ElementRef<typeof CMDKCommand.Separator>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Separator>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand.Separator
		ref={forwardedRef}
		className={cn(
			"",
			className
		)}
		{...props}
	/>
))

const CommandItem = React.forwardRef<React.ElementRef<typeof CMDKCommand.Item>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Item>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand.Item
		ref={forwardedRef}
		className={cn(
			"",
			className
		)}
		{...props}
	/>
))

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
	<span
		className={cn(
			"",
			className
		)}
		{...props}
	/>
)

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandSeparator,
	CommandItem,
	CommandShortcut
}