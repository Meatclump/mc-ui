import { createContext, useContext, useEffect, useId } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"
import { cn } from "~/lib/cn"

type DarkModeContext = {
	darkMode: boolean,
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const darkModeContext = createContext<DarkModeContext>({darkMode: false, setDarkMode: () => {}})

export const DarkMode = () => {
	const { darkMode, setDarkMode } = useContext(darkModeContext)

	useEffect(() => {
		console.log(darkMode)
	}, [darkMode])
	
	const id = useId()
	return (
		<div className="group">
			<input
				type="checkbox"
				id={id}
				className="sr-only"
				checked={darkMode}
				onChange={() => setDarkMode(prevState => !prevState)}
			/>
			<label htmlFor={id} className="flex gap-1 cursor-pointer">
				<div className={cn("rounded-full bg-slate-400 w-16 h-7 relative transition-colors duration-300 group-focus-within:ring-2 ring-offset-1 ring-blue-500 self-center", darkMode && "bg-slate-800")}>
					<span className={cn("bg-yellow-400 rounded-full absolute top-[.15rem] left-[.1rem] w-6 h-6 transition-[left] duration-300", darkMode && "left-[2.35rem] bg-blue-600")}></span>
					<FaSun className={cn("absolute text-slate-300 left-[.25rem] w-5 h-5 top-[.25rem] transition-colors duration-300", !darkMode && "text-yellow-700")} />
					<FaMoon className={cn("absolute text-slate-600 left-[2.45rem] w-5 h-5 top-[.25rem] transition-colors duration-300", darkMode && "text-white")} />
				</div>
			</label>
		</div>
	)
}