import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Popover, PopoverContent, PopoverTrigger } from "../Popover"
import { Button } from "../Button"
import { FaCaretRight, FaSort } from "react-icons/fa6"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../Command"
import { cn } from "~/lib/cn"

const ComboBoxCard = () => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")
	const items = [
		{
			id: 1,
			value: "item 1",
			label: "Item 1"
		},
		{
			id: 2,
			value: "item 2",
			label: "Item 2"
		},
		{
			id: 3,
			value: "item 3",
			label: "Item 3"
		},
		{
			id: 4,
			value: "item 4",
			label: "Item 4"
		},
		{
			id: 5,
			value: "item 5",
			label: "Item 5"
		},
		{
			id: 6,
			value: "item 6",
			label: "Item 6"
		},
		{
			id: 7,
			value: "item 7",
			label: "Item 7"
		},
		{
			id: 8,
			value: "item 8",
			label: "Item 8"
		},
		{
			id: 9,
			value: "item 9",
			label: "Item 9"
		},
		{
			id: 10,
			value: "item 10",
			label: "Item 10"
		},
	]
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Combo Box Card
				</CardTitle>
				<CardDescription>
					Autocomplete input and command palette with a list of suggestions.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							className="flex gap-1 items-center w-[200px] justify-between"
							role="combobox"
							aria-expanded={open}
						>
							{value
								? items.find(item => item.value === value)?.label
								: "Select item"
							}
							<FaSort size={12} className="text-slate-500" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0 border-0">
						<Command>
							<CommandInput placeholder="Search items" className="w-0 min-w-full" />
							<CommandList>
								<CommandEmpty>No items found.</CommandEmpty>
								<CommandGroup>
									{items.map(item =>
										<CommandItem
											key={item.id}
											value={item.value}
											onSelect={currentValue => {
												setValue(currentValue === value ? "" : currentValue)
												setOpen(false)
											}}
											className="flex gap-1 items-center"
										>
											<FaCaretRight size={12} className={cn(
												"",
												value === item.value ? "opacity-100" : "opacity-0"
											)} />
											{item.label}
										</CommandItem>
									)}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
			</CardContent>
		</CardWrapper>
	)
}

export {
	ComboBoxCard
}