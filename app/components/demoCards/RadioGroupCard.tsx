import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Label } from "../Label"
import { RadioButton, RadioGroup } from "../RadioGroup"

const RadioGroupCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Radio Group
				</CardTitle>
				<CardDescription>
					Checkable buttons where only one can be checked at a time.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<RadioGroup>
					<div className="shrink flex flex-col gap-2">
						<div className="flex gap-1 items-center">
							<RadioButton id="sample-radio-button-1" value="1" />
							<Label htmlFor="sample-radio-button-1">
								Sample Item 1
							</Label>
						</div>
						<div className="flex gap-1 items-center">
							<RadioButton id="sample-radio-button-2" value="2" />
							<Label htmlFor="sample-radio-button-2">
								Sample Item 2
							</Label>
						</div>
						<div className="flex gap-1 items-center">
							<RadioButton id="sample-radio-button-3" value="3" />
							<Label htmlFor="sample-radio-button-3">
								Sample Item 3
							</Label>
						</div>
					</div>
				</RadioGroup>
			</CardContent>
		</CardWrapper>
	)
}

export {
	RadioGroupCard
}
