import { Button } from "../Button"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Popover, PopoverContent, PopoverTrigger } from "../Popover"

const PopoverCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Popover Card
				</CardTitle>
				<CardDescription>
					Displays rich content in a portal, triggered by a button. 
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Popover>
					<PopoverTrigger asChild>
						<Button>
							Open
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						Sample popover content here.
					</PopoverContent>
				</Popover>
			</CardContent>
		</CardWrapper>
	)
}

export {
	PopoverCard
}