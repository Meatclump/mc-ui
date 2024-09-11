import * as rxSelect from "@radix-ui/react-select"
import React from "react"
import { FaArrowRight, FaCaretRight, FaCheck, FaChevronRight, FaSort, FaSortDown, FaSortUp } from "react-icons/fa6"
import { cn } from "~/lib/cn"

const Select = rxSelect.Root
const SelectGroup = rxSelect.Group
const SelectValue = rxSelect.Value

const SelectIcon = React.forwardRef<React.ElementRef<typeof rxSelect.Icon>, React.ComponentPropsWithoutRef<typeof rxSelect.Icon>>(({
	children,
	...props
}, forwardedRef) =>
	<rxSelect.Icon {...props} ref={forwardedRef}>
		{children}
	</rxSelect.Icon>
)

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof rxSelect.SelectTrigger>,
	React.ComponentPropsWithoutRef<typeof rxSelect.SelectTrigger>
>(({ children, className, ...props }, forwardedRef) =>
	<rxSelect.SelectTrigger
		ref={forwardedRef}
		className={cn("outline-none focus-within:ring-2 ring-offset-1 ring-offset-transparent ring-indigo-200 dark:ring-indigo-950 flex items-center gap-2 justify-between rounded-md px-3 py-2 text-sm leading-none bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors border border-slate-400 dark:border-slate-500 data-[placeholder]:text-slate-700 dark:data-[placeholder]:text-slate-300", className)}
		{...props}
	>
		{children}
		<SelectIcon>
			<FaSort size={12} className="text-slate-500" />
		</SelectIcon>
	</rxSelect.SelectTrigger>
)

const SelectContent = React.forwardRef<React.ElementRef<typeof rxSelect.SelectContent>, React.ComponentPropsWithoutRef<typeof rxSelect.SelectContent>>(({
	children,
	className,
	position = "popper",
	...props
}, forwardedRef) =>
	<rxSelect.Portal>
		<rxSelect.Content
			ref={forwardedRef}
			className={cn("relative overflow-hidden bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm border border-slate-400 dark:border-slate-500 rounded-md max-h-[400px] min-w-[130px] z-[999] data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=open]:duration-250 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className)}
			position={position}

			{...props}
		>
			<SelectScrollUpButton />
			<rxSelect.Viewport className={cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>
				{children}
			</rxSelect.Viewport>
			<SelectScrollDownButton />
		</rxSelect.Content>
	</rxSelect.Portal>
)

const SelectItem = React.forwardRef<React.ElementRef<typeof rxSelect.SelectItem>, React.ComponentPropsWithoutRef<typeof rxSelect.SelectItem>>(({
	children,
	className,
	...props
}, forwardedRef) =>
	<rxSelect.Item
		className={cn("outline-none relative flex items-center text-sm leading-none text-slate-600 dark:text-slate-400 h-6 data-[disabled]:text-slate-400 dark:data-[disabled]:text-slate-600 data-[disabled]:pointer-events-none data-[highlighted]:bg-indigo-100 data-[highlighted]:text-slate-800 data-[highlighted]:dark:bg-indigo-900 data-[highlighted]:dark:text-slate-200 rounded-md ps-5 py-3 cursor-default", className)}
		{...props}
		ref={forwardedRef}
	>
		<rxSelect.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-5">
			<FaCaretRight size={12} />
		</rxSelect.ItemIndicator>
		<rxSelect.ItemText>
			{children}
		</rxSelect.ItemText>
	</rxSelect.Item>
)

const SelectScrollUpButton = React.forwardRef<React.ElementRef<typeof rxSelect.ScrollUpButton>, React.ComponentPropsWithoutRef<typeof rxSelect.ScrollUpButton>>(({
	children,
	className,
	...props
}, forwardedRef) =>
	<rxSelect.ScrollUpButton
		ref={forwardedRef}
		className={cn("flex cursor-default items-center justify-center px-1 pt-1", className)}
		{...props}
	>
		<FaSortUp size={12} className="text-slate-500" />
	</rxSelect.ScrollUpButton>
)

const SelectScrollDownButton = React.forwardRef<React.ElementRef<typeof rxSelect.ScrollDownButton>, React.ComponentPropsWithoutRef<typeof rxSelect.ScrollDownButton>>(({
	className,
	...props
}, forwardedRef) =>
	<rxSelect.ScrollDownButton
		ref={forwardedRef}
		className={cn("flex cursor-default items-center justify-center px-1 pb-1", className)}
		{...props}
	>
		<FaSortDown size={12} className="text-slate-500" />
	</rxSelect.ScrollDownButton>
)

const SelectSeparator = React.forwardRef<React.ElementRef<typeof rxSelect.Separator>, React.ComponentPropsWithoutRef<typeof rxSelect.Separator>>(({
	className,
	...props
}, forwardedRef) =>
	<rxSelect.Separator
		ref={forwardedRef}
		className={cn("mx-1 my-[6px] h-px bg-slate-300 dark:bg-slate-700", className)}
		{...props}
	/>
)

const SelectLabel = React.forwardRef<React.ElementRef<typeof rxSelect.Label>, React.ComponentPropsWithoutRef<typeof rxSelect.Label>>(({
	className,
	...props
}, forwardedRef) =>
	<rxSelect.Label
		ref={forwardedRef}
		className={cn("font-semibold px-2 text-slate-500", className)}
		{...props}
	/>
)

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton
}