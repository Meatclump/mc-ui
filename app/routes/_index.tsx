import type { MetaFunction } from "@remix-run/node";
import { AccordionCard } from "~/components/demoCards/AccordionCard";
import { ButtonCard } from "~/components/demoCards/ButtonCard";
import { CardCard } from "~/components/demoCards/CardCard";
import { CheckboxCard } from "~/components/demoCards/CheckboxCard";
import { DarkModeCard } from "~/components/demoCards/DarkModeCard";
import { DialogCard } from "~/components/demoCards/DialogCard";
import { InputCard } from "~/components/demoCards/InputCard";
import { LabelCard } from "~/components/demoCards/LabelCard";
import { RadioGroupCard } from "~/components/demoCards/RadioGroupCard";
import { SelectCard } from "~/components/demoCards/SelectCard";
import { SeparatorCard } from "~/components/demoCards/SeparatorCard";
import { SwitchCard } from "~/components/demoCards/SwitchCard";

export const meta: MetaFunction = () => {
	return [
		{ title: "mc-ui" },
		{ name: "description", content: "UI components by Meatclump" },
	];
};

export default function Index() {
	return (
		<div className="flex flex-col gap-3 p-4">
			<h1 className="text-3xl dark:text-slate-200 transition-colors duration-300 ">Components</h1>
			<div className="grid grid-cols-3 gap-4">
				<DarkModeCard />
				<SwitchCard />
				<SelectCard />
				<CheckboxCard />
				<SeparatorCard />
				<LabelCard />
				<InputCard />
				<CardCard />
				<ButtonCard />
				<RadioGroupCard />
				<DialogCard />
				<AccordionCard />
			</div>
		</div>
	)
}
