import * as Select from "@radix-ui/react-select"
import React from "react"
import { FaSort } from "react-icons/fa6"
import { cn } from "~/lib/cn"

export default ({placeholder, ariaLabel}: {placeholder: string, ariaLabel: string}) => {
	return (
		<SelectRoot>
			<SelectTrigger className="inline-flex items-center justify-between rounded-md px-3 py-2 text-base leading-none gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-300 border border-slate-400 data-[placeholder]:text-slate-700 dark:data-[placeholder]:text-slate-300">
				<SelectValue placeholder={placeholder} aria-label={ariaLabel} />
				<SelectIcon>
					<FaSort size={12} />
				</SelectIcon>
			</SelectTrigger>
			<SelectPortal>
				<SelectContent>
					<SelectScrollUpButton />
					<SelectViewport>
						
					</SelectViewport>
					<SelectScrollDownButton />
				</SelectContent>
			</SelectPortal>
		</SelectRoot>
	)
}

export const SelectItem = React.forwardRef<React.ElementRef<typeof Select.SelectItem>, React.ComponentPropsWithoutRef<typeof Select.SelectItem>>(({ children, className, ...props }, forwardedRef) => {
	return (
		<Select.Item className={cn(className)} {...props} ref={forwardedRef}>
			{children}
		</Select.Item>
	)
})

export const SelectIcon = React.forwardRef<React.ElementRef<typeof Select.Icon>, React.ComponentPropsWithoutRef<typeof Select.Icon>>(({children, ...props}, forwardedRef) => {
	return (
		<Select.Icon {...props} ref={forwardedRef}>
			{children}
		</Select.Icon>
	)
})

export const SelectValue = React.forwardRef<React.ElementRef<typeof Select.SelectValue>, React.ComponentPropsWithoutRef<typeof Select.SelectValue>>(({className, ...props}, forwardRef) => {
	return (
		<Select.Value ref={forwardRef} className={cn(className)} {...props} />
	)
})

export const SelectTrigger = React.forwardRef<React.ElementRef<typeof Select.SelectTrigger>, React.ComponentPropsWithoutRef<typeof Select.SelectTrigger>>(({children, className, ...props}, forwardedRef) => {
	return (
		<Select.SelectTrigger ref={forwardedRef} className={cn(className)} {...props}>
			{children}
		</Select.SelectTrigger>
	)
})

export const SelectPortal = React.forwardRef<React.ElementRef<typeof Select.SelectPortal>, React.ComponentPropsWithoutRef<typeof Select.SelectPortal>>(({children, ...props}) => {
	return (
		<Select.Portal {...props}>
			{children}
		</Select.Portal>
	)
})

export const SelectContent = React.forwardRef<React.ElementRef<typeof Select.SelectContent>, React.ComponentPropsWithoutRef<typeof Select.SelectContent>>(({children, className, ...props}, forwardedRef) => {
	return (
		<Select.Content ref={forwardedRef} className={cn(className)} {...props}>
			{children}
		</Select.Content>
	)
})

export const SelectViewport = React.forwardRef<React.ElementRef<typeof Select.SelectViewport>, React.ComponentPropsWithoutRef<typeof Select.SelectViewport>>(({children, className, ...props}, forwardedRef) => {
	return (
		<Select.Viewport ref={forwardedRef} className={cn(className)} {...props}>
			{children}
		</Select.Viewport>
	)
})

export const SelectRoot = React.forwardRef<React.ElementRef<typeof Select.Root>, React.ComponentPropsWithoutRef<typeof Select.Root>>(({children, ...props}) => {
	return (
		<Select.Root {...props}>
			{children}
		</Select.Root>
	)
})

export const SelectScrollUpButton = React.forwardRef<React.ElementRef<typeof Select.ScrollUpButton>, React.ComponentPropsWithoutRef<typeof Select.ScrollUpButton>>(({children, className, ...props}, forwardedRef) => {
	return (
		<Select.ScrollUpButton ref={forwardedRef} className={cn(className)} {...props}>
			{children}
		</Select.ScrollUpButton>
	)
})

export const SelectScrollDownButton = React.forwardRef<React.ElementRef<typeof Select.ScrollDownButton>, React.ComponentPropsWithoutRef<typeof Select.ScrollDownButton>>(({children, className, ...props}, forwardedRef) => {
	return (
		<Select.ScrollDownButton ref={forwardedRef} className={cn(className)} {...props}>
			{children}
		</Select.ScrollDownButton>
	)
})