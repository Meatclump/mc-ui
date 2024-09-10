import * as Switch from "@radix-ui/react-switch"
import { useId, useState } from "react"
import { cn } from "~/lib/cn"

type Switch = {
	id?: string
	name?: string
	checked?: boolean
	defaultChecked?: boolean
	onCheckedChange?: React.Dispatch<React.SetStateAction<boolean>>
	disabled?: boolean
	required?: boolean
	value?: string
}

export default ({
	id,
	name,
	checked,
	onCheckedChange,
	defaultChecked,
	disabled,
	required,
	value
}: Switch) => {
	const [isChecked, setIsChecked] = useState(checked ?? false)
	const switchId = id ?? useId()
	return (
		<Switch.Root
			id={switchId}
			name={name}
			checked={checked ?? isChecked}
			defaultChecked={defaultChecked}
			onCheckedChange={onCheckedChange ?? setIsChecked}
			disabled={disabled}
			required={required}
			value={value}
			className={cn("rounded-full bg-slate-400 dark:bg-slate-500 w-12 h-5 relative transition-colors duration-300 group-focus-within:ring-2 ring-blue-500 dark:ring-blue-300 ring-offset-1 self-center", (checked ?? isChecked) && "bg-blue-500 dark:bg-slate-100")}
		>
			<Switch.Thumb className={cn("bg-white dark:bg-slate-800 top-[.15rem] left-[.15rem] transition-[left] w-4 h-4 absolute rounded-full", (checked ?? isChecked) && "left-[1.85rem] duration-300")} />
		</Switch.Root>
	)
}