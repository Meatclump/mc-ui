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
			"bg-stone-100 border-slate-400 text-slate-800",
			"dark:bg-slate-800 dark:border-slate-500 dark:text-slate-200",
			"rounded-md border shadow-md",
			className
		)}
		{...props}
	/>
))

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => (
	<Dialog {...props}>
		<DialogContent className="overflow-hidden p-0">
			<Command className="">
				{children}
			</Command>
		</DialogContent>
	</Dialog>
)

const CommandInput = React.forwardRef<React.ElementRef<typeof CMDKCommand.Input>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Input>>(({ className, ...props }, forwardedRef) => (
	<div className="flex gap-2 items-center border-b border-slate-400 dark:border-slate-500 px-2 py-2.5">
		<FaMagnifyingGlass className="text-slate-500 dark:text-slate-500" />
		<CMDKCommand.Input
			ref={forwardedRef}
			className={cn(
				"bg-stone-100 text-slate-800 placeholder:text-slate-500",
				"dark:bg-slate-800 dark:text-slate-300 dark:placeholder:text-slate-600",
				"outline-none",
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
			"text-slate-700",
			"dark:text-slate-300",
			"px-1 max-h-[300px] overflow-y-auto overflow-x-hidden",
			className
		)}
		{...props}
	/>
))

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CMDKCommand.Empty>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Empty>>(({className, ...props}, forwardedRef) => (
	<CMDKCommand.Empty
		ref={forwardedRef}
		className={cn(
			"py-6 text-center text-sm",
			className
		)}
		{...props}
	/>
))

const CommandGroup = React.forwardRef<React.ElementRef<typeof CMDKCommand.Group>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Group>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand.Group
		ref={forwardedRef}
		className={cn(
			"[&_[cmdk-group-heading]]:text-slate-500",
			"dark:[&_[cmdk-group-heading]]:text-slate-500",
			"py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pt-0.5 [&_[cmdk-group-heading]]:pb-1",
			className
		)}
		{...props}
	/>
))

const CommandSeparator = React.forwardRef<React.ElementRef<typeof CMDKCommand.Separator>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Separator>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand.Separator
		ref={forwardedRef}
		className={cn(
			"-mx-2 h-px bg-slate-400 dark:bg-slate-500",
			className
		)}
		{...props}
	/>
))

const CommandItem = React.forwardRef<React.ElementRef<typeof CMDKCommand.Item>, React.ComponentPropsWithoutRef<typeof CMDKCommand.Item>>(({ className, ...props }, forwardedRef) => (
	<CMDKCommand.Item
		ref={forwardedRef}
		className={cn(
			"hover:bg-slate-400/50",
			"dark:hover:bg-slate-500/50",
			"px-1.5 py-0.5 rounded data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
			className
		)}
		{...props}
	/>
))

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
	<span
		className={cn(
			"text-slate-500",
			"dark:text-slate-500",
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