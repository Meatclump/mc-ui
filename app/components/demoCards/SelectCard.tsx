import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "../Select"

export const SelectCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Select
				</CardTitle>
				<CardDescription>
					Button-triggered selector.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Select>
					<SelectTrigger className="min-w-[125px]">
						<SelectValue placeholder="Select an item..." />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Group 1</SelectLabel>
							{[
								{ key: 1, value: "1", text: "Item" },
								{ key: 2, value: "2", text: "Item2" },
								{ key: 3, value: "3", text: "Item3" },
								{ key: 4, value: "4", text: "Item4" },
								{ key: 5, value: "5", text: "Item5", disabled: true },
								{ key: 6, value: "6", text: "Item6" },
								{ key: 7, value: "7", text: "Item7" },
								{ key: 8, value: "8", text: "Item8" },
								{ key: 9, value: "9", text: "Item9" },
								{ key: 11, value: "11", text: "Item11" },
								{ key: 12, value: "12", text: "Item12" },
								{ key: 13, value: "13", text: "Item13" },
								{ key: 14, value: "14", text: "Item14" },
								{ key: 15, value: "15", text: "Item15" },
								{ key: 16, value: "16", text: "Item16" },
								{ key: 17, value: "17", text: "Item17" },
								{ key: 18, value: "18", text: "Item18" },
								{ key: 19, value: "19", text: "Item19" },
								{ key: 20, value: "20", text: "Item20" },
							].map(item =>
								<SelectItem key={item.value} disabled={item.disabled} value={item.value}>{item.text}</SelectItem>
							)}
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>Group 2</SelectLabel>
							<SelectItem value={"21"}>Item 21</SelectItem>
							<SelectItem value={"22"}>Item 22</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>Group 3</SelectLabel>
							<SelectItem value={"23"}>Item 23</SelectItem>
							<SelectItem value={"24"}>Item 24</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</CardContent>
		</CardWrapper>
	)
}