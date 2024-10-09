import type { MetaFunction } from "@remix-run/node";
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
			<h1 className="text-3xl dark:text-slate-200 transition-colors duration-300 ">Components</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
				{/* <DraggableListCard /> */}
				<PopoverCard />
				<CommandCard />
				<ComboBoxCard />
				<TableCard />
			</div>
		</div>
	)
}
