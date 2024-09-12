import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Separator } from "../Separator"

const SeparatorCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Separator
				</CardTitle>
				<CardDescription>
					Decorative element for visually separating sections.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Separator orientation="vertical" />
			</CardContent>
		</CardWrapper>
	)
}

export {
	SeparatorCard
}