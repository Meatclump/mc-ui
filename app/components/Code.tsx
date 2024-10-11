import { cn } from "~/lib/cn"

interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
	href: string
}
const Anchor = ({className, href, children}: AnchorProps) => {
	return (
		<a
			className={cn(
				"border-b border-dashed",
				"text-slate-400 border-slate-500",
				"hover:text-slate-600 dark:hover:text-slate-300 dark:border-slate-400",
				className
			)}
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
				"text-slate-300 bg-stone-800 border-slate-500",
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
				"text-slate-300 bg-stone-800 border-slate-500",
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
		"fuchsia": "text-fuchsia-400",
		"amber": "text-amber-400",
		"yellow": "text-yellow-100",
		"orange": "text-orange-400",
		"blue": "text-blue-400",
		"teal": "text-sky-300",
		"green": "text-emerald-400",
		"white": "text-white",
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
const Tab = ({count = 1}: {count?: number}) => {
	const tabCharacter = <>&#9;</>
	const tabArray = []
	for (let i = 0; i < count; i++) {
		tabArray.push(tabCharacter);
		
	}
	return (
		<>
			{...tabArray}
		</>
	)
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