import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Input } from "../Input"
import { Label } from "../Label"

const InputCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Input
				</CardTitle>
				<CardDescription>
					Input Form control.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<div className="flex flex-col gap-1">
					<Label htmlFor="sample-input">
						Sample Input
					</Label>
					<Input id="sample-input" />
				</div>
			</CardContent>
		</CardWrapper>
	)
}

export {
	InputCard
}
