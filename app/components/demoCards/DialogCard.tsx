import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import {Switch} from "../Switch"

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
				
			</CardContent>
		</CardWrapper>
	)
}

export {
	DialogCard
}