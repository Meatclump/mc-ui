import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import {Switch} from "../Switch"

export const SwitchCard = () => {
	const [checked, setChecked] = useState(false)
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Switch
				</CardTitle>
				<CardDescription>
					Toggle switch with transition animation.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<Switch checked={checked} onCheckedChange={() => setChecked(prevState => !prevState)} />
			</CardContent>
		</CardWrapper>
	)
}