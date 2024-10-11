import { createContext, useContext, useId } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"
import { cn } from "~/lib/cn"

interface DarkModeContext {
	darkMode: boolean,
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const darkModeContext = createContext<DarkModeContext>({darkMode: false, setDarkMode: () => {}})

const DarkMode = () => {
	const { darkMode, setDarkMode } = useContext(darkModeContext)
	const id = useId()

	const handleChange = () => {
		setDarkMode(prevState => {
			window.localStorage.setItem("darkMode", (!prevState).toString())
			return !prevState
		})
	}

	return (
		<div className="group/darkMode inline-block">
			<input
				type="checkbox"
				id={id}
				className="sr-only"
				checked={darkMode}
				onChange={() => handleChange()}
				aria-checked={darkMode}
				data-state={darkMode ? "checked" : "unchecked"}
			/>
			<label htmlFor={id} className="flex gap-1 cursor-pointer">
				<div
					data-state={darkMode ? "checked" : "unchecked"}
					className={cn("rounded-full bg-slate-400 w-16 h-7 relative transition-colors duration-300 group-focus-within/darkMode:ring-2 ring-offset-1 ring-offset-slate-300 dark:ring-offset-slate-600 ring-indigo-200 dark:ring-indigo-950 self-center data-[state=checked]:bg-slate-800 outline-none")}
				>
					<span
						data-state={darkMode ? "checked" : "unchecked"}
						className={cn("bg-yellow-400 group-hover/darkMode:bg-yellow-300 rounded-full absolute top-[.15rem] left-[.1rem] w-6 h-6 transition-[left] duration-300 data-[state=checked]:left-[2.35rem] data-[state=checked]:bg-blue-600 group-hover/darkMode:data-[state=checked]:bg-blue-700 group-hover/darkMode:drop-shadow-lg")}
					/>
					<FaSun
						data-state={darkMode ? "checked" : "unchecked"}
						className={cn("absolute text-slate-300 left-[.25rem] w-5 h-5 top-[.25rem] transition-colors duration-300 data-[state=unchecked]:text-yellow-700")}
					/>
					<FaMoon
						data-state={darkMode ? "checked" : "unchecked"}
						className={cn("absolute text-slate-600 left-[2.45rem] w-5 h-5 top-[.25rem] transition-colors duration-300 data-[state=checked]:text-white")}
					/>
				</div>
			</label>
		</div>
	)
}

export {
	DarkMode
}