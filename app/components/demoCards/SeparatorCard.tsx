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
				<div className="flex flex-col">
					<p>
						Demonstration of separator element.
					</p>
					<Separator />
					<div className="flex">
						<p>
							Here
						</p>
						<Separator orientation="vertical" />
						<p>
							Are
						</p>
						<Separator orientation="vertical" />
						<p>
							Some
						</p>
						<Separator orientation="vertical" />
						<p>
							Words
						</p>
					</div>
				</div>
			</CardContent>
		</CardWrapper>
	)
}

export {
	SeparatorCard
}