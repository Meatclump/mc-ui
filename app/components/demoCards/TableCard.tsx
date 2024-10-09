import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Table, TableBody, TableHeader, TableHead, TableCell, TableRow } from "../Table"

const TableCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Table Card
				</CardTitle>
				<CardDescription>
					Responsive table which vertically stacks row cells in small viewports.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Table breakpoint="lg">
					<TableHeader>
						<TableRow>
							<TableHead direction="col">
								Heading 1
							</TableHead>
							<TableHead direction="col">
								Heading 2
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell dataHeading="Data Heading 1">
								Row 1 Item 1
							</TableCell>
							<TableCell dataHeading="Data Heading 2">
								Row 1 Item 2
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell dataHeading="Data Heading 1">
								Row 2 Item 1
							</TableCell>
							<TableCell dataHeading="Data Heading 2">
								Row 2 Item 2
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</CardWrapper>
	)
}

export {
	TableCard
}