import { DarkMode } from "../DarkMode"
import { Command as CLI, CodeBlock, GT, HL, LB, LT, NL, RB, Tab } from "../Code"

export const DarkModeCard = () => {
	return (
		<div>
			<p>
				Toggles stylesheet theme to Dark Mode using context provider.
			</p>
			<div className="flex justify-center p-3">
				<DarkMode />
			</div>
			<h4 className="text-xl mb-3">Installation</h4>
			
			<p className="text-sm -mb-1.5">
				~/components/DarkMode.tsx
			</p>
			<CodeBlock>
				<div className="overflow-scroll">
					<HL color="fuchsia">import</HL> <HL color="amber"><LB /></HL> <HL color="teal">createContext</HL>, <HL color="teal">useContext</HL>, <HL color="teal">useId</HL> <HL color="amber"><RB /></HL> <HL color="fuchsia">from</HL> <HL color="orange">"react"</HL><NL />
					<HL color="fuchsia">import</HL> <HL color="amber"><LB /></HL> <HL color="teal">FaMoon</HL>, <HL color="teal">FaSun</HL> <HL color="amber"><RB /></HL> <HL color="fuchsia">from</HL> <HL color="orange">"react-icons/fa6"</HL><NL />
					<HL color="fuchsia">import</HL> <HL color="amber"><LB /></HL> <HL color="teal">cn</HL> <HL color="amber"><RB /></HL> <HL color="fuchsia">from</HL> <HL color="orange">"~/lib/cn"</HL><NL />
					<NL />
					<HL color="blue">interface</HL> <HL color="green">DarkModeContext</HL> <HL color="amber"><LB /></HL><NL />
					<Tab /><HL color="teal">darkMode</HL>: <HL color="green">boolean</HL>,<NL />
					<Tab /><HL color="yellow">setDarkMode</HL>: <HL color="green">React</HL>.<HL color="green">Dispatch</HL><HL color="fuchsia"><LT /></HL><HL color="green">React</HL>.<HL color="green">SetStateAction</HL><HL color="blue"><LT /></HL><HL color="green">boolean</HL><HL color="blue"><GT /></HL><HL color="fuchsia"><GT /></HL> <NL />
					<HL color="amber"><RB /></HL><NL />
					<NL />
					<HL color="fuchsia">export</HL> <HL color="blue">const</HL> <HL color="teal">darkModeContext</HL> = <HL color="yellow">createContext</HL><HL color="amber"><LT /></HL><HL color="green">DarkModeContext</HL><HL color="amber"><GT /></HL><HL color="amber">(</HL><HL color="fuchsia"><LB /></HL><HL color="teal">darkMode:</HL> <HL color="blue">false</HL>, <HL color="yellow">setDarkMode</HL><HL color="teal">:</HL> <HL color="blue">() =<GT /> <LB /><RB /></HL><HL color="fuchsia"><RB /></HL><HL color="amber">)</HL><NL />
					<NL />
					<HL color="blue">const</HL> <HL color="yellow">DarkMode</HL> = <HL color="amber">()</HL> <HL color="blue">=<GT /></HL> <HL color="amber"><LB /></HL><NL />
					<Tab /><HL color="blue">const</HL> = <HL color="fuchsia"><LB /></HL> <HL color="blue">darkMode</HL>, <HL color="yellow">setDarkMode</HL> <HL color="fuchsia"><RB /></HL> = <HL color="yellow">useContext</HL><HL color="fuchsia">(</HL><HL color="blue">darkModeContext</HL><HL color="fuchsia">)</HL> <NL />
					<Tab /><HL color="blue">const id</HL> = <HL color="yellow">useId</HL><HL color="fuchsia">()</HL><NL />
					<Tab /><NL />
					<Tab /><HL color="blue">const</HL> <HL color="yellow">handleChange</HL> = <HL color="fuchsia">()</HL> <HL color="blue">=<GT /></HL> <HL color="fuchsia"><LB /></HL> <NL />
					<Tab count={2} /><HL color="yellow">setDarkMode</HL><HL color="blue">(</HL><HL color="teal">prevState</HL> <HL color="blue">=<GT /></HL> <HL color="amber"><LB /></HL><NL />
					<Tab count={3} /><HL color="teal">window</HL>.<HL color="teal">localStorage</HL>.<HL color="yellow">setItem</HL><HL color="fuchsia">(</HL><HL color="orange">"darkMode"</HL>, <HL color="blue">(</HL>!<HL color="teal">prevState</HL><HL color="blue">)</HL>.<HL color="yellow">toString</HL><HL color="blue">()</HL><HL color="fuchsia">)</HL><NL />
					<Tab count={3} /><HL color="fuchsia">return</HL> !<HL color="teal">prevState</HL><NL />
					<Tab count={2} /><HL color="amber"><RB /></HL><HL color="blue">)</HL><NL />
					<Tab /><HL color="fuchsia"><RB /></HL><NL />
					<NL />
					<Tab /><HL color="fuchsia">return (</HL><NL />
					<Tab count={2} /><LT /><HL color="blue">div</HL> <HL color="teal">className</HL>=<HL color="orange">"group/darkMode inline-block"</HL><HL color="blue"><GT /></HL><NL />
					<Tab count={3} /><LT /><HL color="blue">input</HL><NL />
					<Tab count={4} /><HL color="teal">type</HL>=<HL color="orange">"checkbox"</HL><NL />
					<Tab count={4} /><HL color="teal">id</HL>=<HL color="blue"><LB /></HL><HL color="blue">id</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={4} /><HL color="teal">className</HL>=<HL color="orange">"sr-only"</HL><NL />
					<Tab count={4} /><HL color="teal">checked</HL>=<HL color="blue"><LB /></HL><HL color="blue">darkMode</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={4} /><HL color="teal">onChange</HL>=<HL color="blue"><LB /></HL><HL color="amber">()</HL> <HL color="blue">=<GT /> <HL color="yellow">handleChange</HL><HL color="amber">()</HL></HL><HL color="blue"><RB /></HL><NL />
					<Tab count={4} /><HL color="teal">aria-checked</HL>=<HL color="blue"><LB /></HL><HL color="blue">darkMode</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={4} /><HL color="teal">data-state</HL>=<HL color="blue"><LB /></HL><HL color="blue">darkMode</HL> ? <HL color="orange">"checked"</HL> : <HL color="orange">"unchecked"</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={3} />/<GT /><NL />
					<Tab count={3} /><LT /><HL color="blue">label</HL> <HL color="teal">htmlFor</HL>=<HL color="blue"><LB />id<RB /></HL> <HL color="teal">className</HL>=<HL color="orange">"flex gap-1 cursor-pointer"</HL><HL color="blue"><GT /></HL><NL />
					<Tab count={4} /><LT /><HL color="blue">div</HL><NL />
					<Tab count={5} /><HL color="teal">data-state</HL>=<HL color="blue"><LB />darkMode</HL> ? <HL color="orange">"checked"</HL> : <HL color="orange">"unchecked"</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={5} /><HL color="teal">className</HL>=<HL color="blue"><LB /></HL><HL color="yellow">cn</HL><HL color="amber">(</HL><HL color="orange">"rounded-full bg-slate-400 w-16 h-7 relative transition-colors duration-300 group-focus-within/darkMode:ring-2 ring-offset-1 ring-offset-slate-300 dark:ring-offset-slate-600 ring-indigo-200 dark:ring-indigo-950 self-center data-[state=checked]:bg-slate-800 outline-none"</HL><HL color="amber">)</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={4} /><GT /><NL />
					<Tab count={5} /><LT /><HL color="blue">span</HL><NL />
					<Tab count={6} /><HL color="teal">data-state</HL>=<HL color="blue"><LB />darkMode</HL> ? <HL color="orange">"checked"</HL> : <HL color="orange">"unchecked"</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={6} /><HL color="teal">className</HL>=<HL color="blue"><LB /></HL><HL color="yellow">cn</HL><HL color="amber">(</HL><HL color="orange">"bg-yellow-400 group-hover/darkMode:bg-yellow-300 rounded-full absolute top-[.15rem] left-[.1rem] w-6 h-6 transition-[left] duration-300 data-[state=checked]:left-[2.35rem] data-[state=checked]:bg-blue-600 group-hover/darkMode:data-[state=checked]:bg-blue-700 group-hover/darkMode:drop-shadow-lg"</HL><HL color="amber">)</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={5} />/<GT /><NL />
					<Tab count={5} /><LT /><HL color="green">FaSun</HL><NL />
					<Tab count={6} /><HL color="teal">data-state</HL>=<HL color="blue"><LB />darkMode</HL> ? <HL color="orange">"checked"</HL> : <HL color="orange">"unchecked"</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={6} /><HL color="teal">className</HL>=<HL color="blue"><LB /></HL><HL color="yellow">cn</HL><HL color="amber">(</HL><HL color="orange">"absolute text-slate-300 left-[.25rem] w-5 h-5 top-[.25rem] transition-colors duration-300 data-[state=unchecked]:text-yellow-700"</HL><HL color="amber">)</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={5} />/<GT /><NL />
					<Tab count={5} /><LT /><HL color="green">FaMoon</HL><NL />
					<Tab count={6} /><HL color="teal">data-state</HL>=<HL color="blue"><LB />darkMode</HL> ? <HL color="orange">"checked"</HL> : <HL color="orange">"unchecked"</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={6} /><HL color="teal">className</HL>=<HL color="blue"><LB /></HL><HL color="yellow">cn</HL><HL color="amber">(</HL><HL color="orange">"absolute text-slate-600 left-[2.45rem] w-5 h-5 top-[.25rem] transition-colors duration-300 data-[state=checked]:text-white"</HL><HL color="amber">)</HL><HL color="blue"><RB /></HL><NL />
					<Tab count={5} />/<GT /><NL />
					<Tab count={4} /><LT />/<HL color="blue">div</HL><GT /><NL />
					<Tab count={3} /><LT />/<HL color="blue">label</HL><GT /><NL />
					<Tab count={2} /><LT />/<HL color="blue">div</HL><GT /><NL />
					<Tab /><HL color="fuchsia">)</HL><NL />
					<HL color="amber"><RB /></HL>
					<NL />
					<HL color="fuchsia">export</HL> <HL color="amber"><LB /></HL><NL />
					<Tab /><HL color="yellow">DarkMode</HL><NL />
					<HL color="amber"><RB /></HL><NL />
				</div>
			</CodeBlock>
			<h4 className="text-xl mb-3">Usage</h4>
		</div>
	)
}