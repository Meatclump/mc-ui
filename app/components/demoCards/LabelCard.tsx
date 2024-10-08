import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Input } from "../Input"
import { Label } from "../Label"

const LabelCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Label
				</CardTitle>
				<CardDescription>
					Accessible label associated with control elements.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<div className="flex gap-3 justify-center items-center">
					<Label htmlFor="sample-label-input">
						Sample Label
					</Label>
					<Input id="sample-label-input" />
				</div>
			</CardContent>
		</CardWrapper>
	)
}

export {
	LabelCard
}
