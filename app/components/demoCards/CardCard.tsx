import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardWrapper } from "../Card"

const CardCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Card
				</CardTitle>
				<CardDescription>
					Design element for organizing content.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center p-4">
				<CardWrapper className="max-w-[300px]">
					<CardHeader>
						<CardTitle>
							Sample Card
						</CardTitle>
						<CardDescription>
							Sample Card Description
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>
							Multiple content sections can be used and will be border separated.
						</p>
					</CardContent>
					<CardFooter>
						Sample Footer
					</CardFooter>
				</CardWrapper>
			</CardContent>
		</CardWrapper>
	)
}

export {
	CardCard
}