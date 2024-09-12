import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Checkbox } from "../Checkbox"

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
				<Checkbox />
			</CardContent>
		</CardWrapper>
	)
}

export {
	CheckboxCard
}