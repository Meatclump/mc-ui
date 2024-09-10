import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { useState } from "react";
import { cn } from "./lib/cn";
import { darkModeContext } from "./components/DarkMode";

export function Layout({ children }: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = useState(false)
	return (
		<html lang="en" className={cn(darkMode && "dark")}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="dark:bg-gray-800 transition-colors duration-300">
				<darkModeContext.Provider value={{darkMode, setDarkMode}}>
				{children}
				</darkModeContext.Provider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
