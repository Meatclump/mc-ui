import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Accordion"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"

const AccordionCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Accordion
				</CardTitle>
				<CardDescription>
					Collapsed content sections expandable by trigger button headings.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<div>
					<Accordion
						type="single"
						defaultValue="item-1"
						collapsible
						className="w-[300px]"
					>
						<AccordionItem value="item-1">
							<AccordionTrigger>Accordion Item 1</AccordionTrigger>
							<AccordionContent>
								Content for accordion item 1.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Accordion Item 2</AccordionTrigger>
							<AccordionContent>
								Content for accordion item 2.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Accordion Item 3</AccordionTrigger>
							<AccordionContent>
								Content for accordion item 3.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</CardContent>
		</CardWrapper>
	)
}

export {
	AccordionCard
}