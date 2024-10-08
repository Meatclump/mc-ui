import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../Command"


const CommandCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Command Card
				</CardTitle>
				<CardDescription>
					Fast, composable, command menu for React by pacocoursey.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Command>
					<CommandInput placeholder="Type a command" />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Section 1">
							<CommandItem>Item 1</CommandItem>
							<CommandItem>Thing 1</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Section 2">
							<CommandItem disabled>
								Disabled Item
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</CardContent>
		</CardWrapper>
	)
}

export {
	CommandCard
}