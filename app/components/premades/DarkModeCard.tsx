import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { DarkMode } from "../DarkMode"

export const DarkModeCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Dark Mode Toggle
				</CardTitle>
				<CardDescription>
					Dark Mode toggle using context provider.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<DarkMode />
			</CardContent>
		</CardWrapper>
	)
}