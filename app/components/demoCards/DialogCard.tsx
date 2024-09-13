import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "../Dialog"
import { Button } from "../Button"

const DialogCard = () => {
	const [checked, setChecked] = useState(false)
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Dialog
				</CardTitle>
				<CardDescription>
					Accessible dialog modal with trapped focus.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Dialog>
					<DialogTrigger asChild>
						<Button>
							Sample Dialog
						</Button>
					</DialogTrigger>
					<DialogPortal>
						<DialogOverlay />
						<DialogContent>
							<DialogTitle>
								Sample Dialog
							</DialogTitle>
							<DialogDescription>
								This is a sample description for the dialog.
							</DialogDescription>
							<div className="pt-3 flex justify-end">
								<DialogClose asChild>
									<Button variant="contrast" className="focus:outline-slate-400 outline-1 focus-within:ring-2 ring-offset-1 ring-indigo-200 dark:ring-indigo-950 ring-offset-transparent">
										Close
									</Button>
								</DialogClose>
							</div>
						</DialogContent>
					</DialogPortal>
				</Dialog>
			</CardContent>
		</CardWrapper>
	)
}

export {
	DialogCard
}