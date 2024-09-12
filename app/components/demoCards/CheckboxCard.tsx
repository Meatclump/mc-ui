import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Checkbox } from "../Checkbox"
import { Label } from "../Label"

const CheckboxCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Checkbox
				</CardTitle>
				<CardDescription>
					Interactive control that can be toggled between unchecked and checked.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<div className="flex items-center gap-2">
					<Checkbox id="sample-checkbox" />
					<Label htmlFor="sample-checkbox">
						Sample Checkbox
					</Label>
				</div>
			</CardContent>
		</CardWrapper>
	)
}

export {
	CheckboxCard
}