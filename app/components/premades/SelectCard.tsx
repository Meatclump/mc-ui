import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import Select from "../Select"

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
				<Select placeholder="Select an item..." ariaLabel="Item Select" >
					
				</Select>
			</CardContent>
		</CardWrapper>
	)
}