import { createContext, useContext, useId } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"
import { cn } from "~/lib/cn"

type DarkModeContext = {
	darkMode: boolean,
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const darkModeContext = createContext<DarkModeContext>({darkMode: false, setDarkMode: () => {}})

const DarkMode = () => {
	const { darkMode, setDarkMode } = useContext(darkModeContext)
	const id = useId()
	return (
		<div className="group">
			<input
				type="checkbox"
				id={id}
				className="sr-only"
				checked={darkMode}
				onChange={() => setDarkMode(prevState => !prevState)}
				aria-checked={darkMode}
			/>
			<label htmlFor={id} className="flex gap-1 cursor-pointer">
				<div className={cn("rounded-full bg-slate-400 w-16 h-7 relative transition-colors duration-300 group-focus-within:ring-2 ring-offset-1 ring-offset-slate-300 dark:ring-offset-slate-600 ring-indigo-200 dark:ring-indigo-950 self-center data-[state=checked]:bg-slate-800 outline-none")} data-state={darkMode ? "checked" : "unchecked"}>
					<span className={cn("bg-yellow-400 rounded-full absolute top-[.15rem] left-[.1rem] w-6 h-6 transition-[left] duration-300", darkMode && "left-[2.35rem] bg-blue-600")} data-state={darkMode ? "checked" : "unchecked"} />
					<FaSun className={cn("absolute text-slate-300 left-[.25rem] w-5 h-5 top-[.25rem] transition-colors duration-300", !darkMode && "text-yellow-700")} />
					<FaMoon className={cn("absolute text-slate-600 left-[2.45rem] w-5 h-5 top-[.25rem] transition-colors duration-300", darkMode && "text-white")} />
				</div>
			</label>
		</div>
	)
}

export {
	DarkMode
}