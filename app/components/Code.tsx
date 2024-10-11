import { cn } from "~/lib/cn"

interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
	href: string
}
const Anchor = ({className, href, children}: AnchorProps) => {
	return (
		<a
			className={cn("text-slate-400 border-b border-dashed border-slate-500 dark:border-slate-400", className)}
			href={href}
		>
			{children}
		</a>
	)
}

interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {}
const Command = ({className, children}: CommandProps) => {
	return (
		<code
			className={cn(
				"px-1.5 py-0.5 rounded-md border",
				"text-slate-300 bg-stone-800 border-slate-800",
				"dark:bg-slate-600 dark:border-slate-500",
				className
			)}
		>
			{children}
		</code>
	)
}

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {}
const CodeBlock = ({children}: CodeBlockProps) => {
	return (
		
		<div className="py-2">
			<pre className={cn(
				"px-3 py-2 rounded-md border",
				"text-slate-300 bg-stone-800 border-slate-800",
				"dark:text-slate-400 dark:bg-slate-600 dark:border-slate-400"
			)}>
				{children}
			</pre>
		</div>
	)
}

interface PurpleProps extends React.HTMLAttributes<HTMLSpanElement> {
	color: "fuchsia" | "amber" | "yellow" | "orange" | "blue" | "teal" | "green" | "white"
}
const HL = ({children, color}: PurpleProps) => {
	const variants: {[key: string]: string} = {
		"fuchsia": "text-fuchsia-400/70",
		"amber": "text-amber-400/70",
		"yellow": "text-yellow-100/70",
		"orange": "text-orange-400/70",
		"blue": "text-blue-400/70",
		"teal": "text-sky-300/70",
		"green": "text-emerald-400/70",
		"white": "text-white/70",
	}

	return (
		<span className={cn(variants[color])}>
			{children}
		</span>
	)
}
const NL = () => {
	return <br />
}
const Tab = () => {
	return <>&#9;</>
}
const LT = () => {
	return <>&lt;</>
}
const GT = () => {
	return <>&gt;</>
}
const LB = () => {
	return <>&#123;</>
}
const RB = () => {
	return <>&#125;</>
}

export {
	Anchor,
	Command,
	CodeBlock,
	HL,
	NL,
	Tab,
	LT,
	GT,
	LB,
	RB
}