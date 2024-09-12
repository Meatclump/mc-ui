import { Label } from "@radix-ui/react-label"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Input } from "../Input"

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
				<div className="flex gap-3 justify-center items-center">
					<Label htmlFor="sample-input">
						Sample Label
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
