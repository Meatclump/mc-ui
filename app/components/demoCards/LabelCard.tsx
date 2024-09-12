import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { Label } from "../Label"

const LabelCard = () => {
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Label
				</CardTitle>
				<CardDescription>
					Accessible label associated with control elements.
				</CardDescription>
			</CardHeader>
			<CardContent className="min-h-[200px] max-h-[300px] items-center justify-center">
				<div className="flex gap-3 justify-center items-center">
					<Label htmlFor="sample-label-input">
						Sample Label
					</Label>
					<input
						id="sample-label-input"
						defaultValue="Sample Text"
						className="bg-white text-slate-700 dark:text-slate-300 hover:bg-slate-100 hover:dark:bg-slate-900 transition-colors dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-400 dark:border-slate-500 selection:dark:text-white selection:text-slate-700 selection:bg-slate-300 selection:dark:bg-slate-700 outline-none focus-within:ring-2 ring-offset-1 ring-indigo-200 dark:ring-indigo-950 ring-offset-transparent"
					/>
				</div>
			</CardContent>
		</CardWrapper>
	)
}

export {
	LabelCard
}
