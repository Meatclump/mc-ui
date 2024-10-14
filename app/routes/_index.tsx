import type { MetaFunction } from "@remix-run/node";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/Accordion";
import { Anchor, Command as CLI, CodeBlock, HL, LT, GT, LB, RB, NL, Tab, Import } from "~/components/Code";
import { AccordionCard } from "~/components/demoCards/AccordionCard";
import { ButtonCard } from "~/components/demoCards/ButtonCard";
import { CardCard } from "~/components/demoCards/CardCard";
import { CheckboxCard } from "~/components/demoCards/CheckboxCard";
import { ComboBoxCard } from "~/components/demoCards/ComboBoxCard";
import { CommandCard } from "~/components/demoCards/CommandCard";
import { DarkModeCard } from "~/components/demoCards/DarkModeCard";
import { DialogCard } from "~/components/demoCards/DialogCard";
import DraggableListCard from "~/components/demoCards/DraggableListCard";
import { InputCard } from "~/components/demoCards/InputCard";
import { LabelCard } from "~/components/demoCards/LabelCard";
import { PopoverCard } from "~/components/demoCards/PopoverCard";
import { RadioGroupCard } from "~/components/demoCards/RadioGroupCard";
import { SelectCard } from "~/components/demoCards/SelectCard";
import { SeparatorCard } from "~/components/demoCards/SeparatorCard";
import { SwitchCard } from "~/components/demoCards/SwitchCard";
import { TableCard } from "~/components/demoCards/TableCard";

export const meta: MetaFunction = () => {
	return [
		{ title: "mc-ui" },
		{ name: "description", content: "UI components by Meatclump" },
	];
};

export default function Index() {
	return (
		<div className="flex flex-col gap-3 p-4">
			<h1 className="text-3xl underline dark:text-slate-200 transition-colors duration-300">MC-UI</h1>
			<p className="dark:text-slate-200">
				MC-UI is a library of components primarily based on <Anchor href="https://www.radix-ui.com/">Radix primitives</Anchor>, but also borrows a lot of implementation from <Anchor href="https://ui.shadcn.com/">shadcn-ui</Anchor>.
			</p>
			<p className="dark:text-slate-200">
				I use <Anchor href="https://remix.run/">Remix</Anchor>, but most components should have similar setup for other reactive libraries, making conversion a fairly easy process.
			</p>
			<p className="dark:text-slate-200">
				All components here are made using the helpful <CLI><HL color="amber">cn</HL><HL color="blue">()</HL></CLI> utility. Most components use icons from <Anchor href="https://react-icons.github.io/react-icons/">react-icons</Anchor>, but are easy to replace.
			</p>
			<Accordion type="multiple" className="w-[500px]">
				<AccordionItem value="cn">
					<AccordionTrigger>Setting up cn utility</AccordionTrigger>
					<AccordionContent>
						<p>
							Helps with class priority and allows construction of classname string using <CLI>&&</CLI> syntax, ternary operators and more.
						</p>
						<h4 className="text-xl underline dark:text-slate-200 transition-colors duration-300">Dependencies</h4>
						<ul>
							<li>
								<Anchor href="https://github.com/dcastil/tailwind-merge">tailwind-merge</Anchor>
							</li>
							<li>
								<Anchor href="https://github.com/lukeed/clsx">clsx</Anchor>
							</li>
						</ul>
						<h4 className="text-xl underline dark:text-slate-200 transition-colors duration-300 mt-5">Recommended Setup</h4>

						<ol>
							<li>
								<p className="dark:text-slate-200">
									Install the dependencies:
								</p>
								<CLI className="block px-3 py-1.5 my-1.5">
									npm i tailwind-merge clsx
								</CLI>
							</li>
							<li>
								<p className="dark:text-slate-200">
									Create the cn util in <code className="dark:text-slate-300 dark:bg-slate-600 px-1.5 py-0.5 rounded-md">app/lib</code>:
								</p>
								<CodeBlock>
									<Import imported={[{name: "ClassValue"}, {name: "clsx"}]} importedFrom="clsx" />
									<Import imported={[{name: "twMerge"}]} importedFrom="tailwind-merge" />
									<NL />
									<HL color="fuchsia">export</HL> <HL color="blue">const</HL> <HL color="yellow">cn</HL> = <HL color="amber">(</HL>...<HL color="teal">inputs</HL>: <HL color="green">ClassValue</HL><HL color="fuchsia">[]</HL><HL color="amber">)</HL> <HL color="blue">=<GT /></HL> <HL color="amber"><LB /></HL><NL />
									<Tab /><HL color="fuchsia">return</HL> <HL color="yellow">twMerge</HL><HL color="fuchsia">(</HL><HL color="yellow">clsx</HL><HL color="blue">(</HL><HL color="teal">inputs</HL><HL color="blue">)</HL><HL color="fuchsia">)</HL><NL />
									<HL color="amber"><RB /></HL>
								</CodeBlock>
							</li>
							<li>
								<p className="dark:text-slate-200">
									Example Usage:
								</p>
								<CodeBlock>
									<HL color="fuchsia">import</HL> <HL color="amber"><LB /></HL> <HL color="teal">cn</HL> <HL color="amber"><RB /></HL> <HL color="fuchsia">from</HL> <HL color="orange">"~/lib/cn"</HL>;<NL />
									<NL />
									<HL color="fuchsia">export</HL> <HL color="blue">const</HL> <HL color="yellow">Component</HL> = <HL color="amber">(</HL><HL color="fuchsia"><LB /></HL><HL color="teal"> className </HL><HL color="fuchsia"><RB /></HL><HL color="amber">)</HL> <HL color="blue">=<GT /></HL> <HL color="amber"><LB /></HL><NL />
									<Tab /><HL color="fuchsia">return (</HL><NL/>
									<Tab count={2} /><LT /><HL color="blue">div</HL><NL />
									<Tab count={3} /><HL color="teal">className</HL>=<HL color="blue"><LB /></HL><HL color="yellow">cn</HL><HL color="amber">(</HL><NL />
									<Tab count={4} /><HL color="orange">"class1 class2"</HL>,<NL />
									<Tab count={4} /><HL color="blue">true</HL> && <HL color="orange">"conditional-class"</HL>,<NL />
									<Tab count={4} /><HL color="teal">className</HL>,<NL />
									<Tab count={3} /><HL color="amber">)</HL><HL color="blue"><RB /></HL><NL />
									<Tab count={2} /><GT /><NL />
									<Tab count={2} /><LT />/<HL color="blue">div</HL><GT /><NL />
									<Tab /><HL color="fuchsia">)</HL><NL />
									<HL color="amber"><RB /></HL>
								</CodeBlock>
							</li>
						</ol>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			
			<h2 className="text-3xl dark:text-slate-200 transition-colors duration-300 ">Components</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				<Accordion type="multiple">
					<AccordionItem value="darkMode">
						<AccordionTrigger>Dark Mode Toggle</AccordionTrigger>
						<AccordionContent>
							<DarkModeCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="switch">
						<AccordionTrigger>Switch</AccordionTrigger>
						<AccordionContent>
							<SwitchCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="select">
						<AccordionTrigger>Select</AccordionTrigger>
						<AccordionContent>
							<SelectCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="checkbox">
						<AccordionTrigger>Checkbox</AccordionTrigger>
						<AccordionContent>
							<CheckboxCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="separator">
						<AccordionTrigger>Separator</AccordionTrigger>
						<AccordionContent>
							<SeparatorCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="label">
						<AccordionTrigger>Label</AccordionTrigger>
						<AccordionContent>
							<LabelCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="input">
						<AccordionTrigger>Input</AccordionTrigger>
						<AccordionContent>
							<InputCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="card">
						<AccordionTrigger>Card</AccordionTrigger>
						<AccordionContent>
							<CardCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="button">
						<AccordionTrigger>Button</AccordionTrigger>
						<AccordionContent>
							<ButtonCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="radioGroup">
						<AccordionTrigger>Radio Group</AccordionTrigger>
						<AccordionContent>
							<RadioGroupCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="dialog">
						<AccordionTrigger>Dialog</AccordionTrigger>
						<AccordionContent>
							<DialogCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="accordion">
						<AccordionTrigger>Accordion</AccordionTrigger>
						<AccordionContent>
							<AccordionCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="popover">
						<AccordionTrigger>Popover</AccordionTrigger>
						<AccordionContent>
							<PopoverCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="command">
						<AccordionTrigger>Command</AccordionTrigger>
						<AccordionContent>
							<CommandCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="comboBox">
						<AccordionTrigger>Combo Box</AccordionTrigger>
						<AccordionContent>
							<ComboBoxCard />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="table">
						<AccordionTrigger>Table</AccordionTrigger>
						<AccordionContent>
							<TableCard />
						</AccordionContent>
					</AccordionItem>
				{/* <DraggableListCard /> */}
				</Accordion>
			</div>
		</div>
	)
}
