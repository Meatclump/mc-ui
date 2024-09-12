import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Button } from "../Button"

const ButtonCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Button
				</CardTitle>
				<CardDescription>
					A button.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<div className="flex gap-2">
					<Button>
						Default Button
					</Button>
					<Button variant="contrast">
						Contrast Button
					</Button>
				</div>
			</CardContent>
		</CardWrapper>
	)
}

export {
	ButtonCard
}