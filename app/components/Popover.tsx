import * as React from "react"
import * as rxPopover from "@radix-ui/react-popover"
import { cn } from "~/lib/cn"

const Popover = rxPopover.Root
const PopoverTrigger = rxPopover.Trigger
const PopoverAnchor = rxPopover.Anchor

const PopoverContent = React.forwardRef<
	React.ElementRef<typeof rxPopover.Content>,
	React.ComponentPropsWithoutRef<typeof rxPopover.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, forwardedRef) => (
	<rxPopover.Portal>
		<rxPopover.Content
			ref={forwardedRef}
			align={align}
			sideOffset={sideOffset}
			className={cn(
				"z-50 border rounded-md p-4 shadow-md outline-none",
				"bg-stone-100 border-slate-400 text-slate-800",
				"dark:bg-slate-800 dark:border-slate-500 dark:text-slate-100",
				"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
				"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-90",
				"data-[state=open]:data-[side=bottom]:slide-in-from-top-2 data-[state=open]:data-[side=left]:slide-in-from-right-2 data-[state=open]:data-[side=right]:slide-in-from-left-2 data-[state=open]:data-[side=top]:slide-in-from-bottom-2",
				"data-[state=closed]:data-[side=bottom]:slide-out-to-top-2 data-[state=closed]:data-[side=top]:slide-out-to-bottom-2 data-[state=closed]:data-[side=left]:slide-out-to-right-2 data-[state=closed]:data-[side=right]:slide-out-to-left-2",
				className
			)}
			{...props}
		/>
	</rxPopover.Portal>
))

export {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverAnchor,
}