import * as rxAccordion from "@radix-ui/react-accordion"
import React from "react"
import { FaChevronDown } from "react-icons/fa6"
import { cn } from "~/lib/cn"

const Accordion = React.forwardRef<React.ElementRef<typeof rxAccordion.Root>, React.ComponentPropsWithoutRef<typeof rxAccordion.Root>>(({
	children,
	className,
	...props
}, forwardRef) => {
	return (
		<rxAccordion.Root
			ref={forwardRef}
			className={cn("rounded-md", className)}
			{...props}
		>
			{children}
		</rxAccordion.Root>
	)
})

const AccordionItem = React.forwardRef<React.ElementRef<typeof rxAccordion.Item>, React.ComponentPropsWithoutRef<typeof rxAccordion.Item>>(({
	children,
	className,
	...props
}, forwardRef) => {
	return (
		<rxAccordion.Item
			ref={forwardRef}
			className={cn("group first:rounded-t-md last:rounded-b-md overflow-hidden border-x border-t last:border-b border-slate-400", className)}
			{...props}
		>
			{children}
		</rxAccordion.Item>
	)
})

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof rxAccordion.Trigger>, React.ComponentPropsWithoutRef<typeof rxAccordion.Trigger>>(({
	children,
	className,
	...props
}, forwardRef) => {
	return (
		<rxAccordion.Header className="flex">
			<rxAccordion.Trigger
				ref={forwardRef}
				className={cn("bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 px-3 py-1 flex-1 flex justify-between items-center [&[data-state=open]>svg]:rotate-180 transition-all hover:bg-slate-900 active:bg-slate-950", className)}
				{...props}
			>
				{children}
				<FaChevronDown size={12} className="transition-transform duration-300" />
			</rxAccordion.Trigger>
		</rxAccordion.Header>
	)
})

const AccordionContent = React.forwardRef<React.ElementRef<typeof rxAccordion.Content>, React.ComponentPropsWithoutRef<typeof rxAccordion.Content>>(({
	children,
	className,
	...props
}, forwardRef) => {
	return (
		<rxAccordion.Content
			ref={forwardRef}
			className={cn(
				"data-[state=closed]:animate-accordion-up",
				"data-[state=open]:animate-accordion-down",
				"px-3 border-slate-400 dark:bg-slate-700 bg-stone-100 text-slate-800 dark:text-slate-100",
				className
			)}
			{...props}
		>	
			<div className="py-1">
				{children}
			</div>
		</rxAccordion.Content>
	)
})

export {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent
}