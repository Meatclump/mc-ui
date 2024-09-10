import type { MetaFunction } from "@remix-run/node";
import { DarkModeCard } from "~/components/premades/DarkModeCard";
import { SelectCard } from "~/components/premades/SelectCard";
import { SwitchCard } from "~/components/premades/SwitchCard";

export const meta: MetaFunction = () => {
	return [
		{ title: "mc-ui" },
		{ name: "description", content: "UI components by Meatclump" },
	];
};

export default function Index() {
	return (
		<div className="p-4">
			<h1 className="text-3xl dark:text-slate-200 transition-colors duration-300">Components</h1>
			<div className="grid grid-cols-3 gap-4">
				<DarkModeCard />
				<SwitchCard />
				<SelectCard />
			</div>
		</div>
	)
}
