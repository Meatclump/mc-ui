import { useId, useState } from "react"
import { FaBars } from "react-icons/fa6"

interface DragAndDropList {
	children?: React.ReactNode
}
interface DragAndDropListItem {
	children?: React.ReactNode,
	index: number,
	items: {id:number, name:string}[],
	setItems: React.Dispatch<React.SetStateAction<{id:number, name:string}[]>>
	draggedItem: string | null,
	setDraggedItem: React.Dispatch<React.SetStateAction<string|null>>
}

const DragAndDropList = ({children}: DragAndDropList) => {
	return (
		<ul className="flex flex-col gap-1">
			{children}
		</ul>
	)
}

const DragAndDropListItem = ({children, index, items, setItems, draggedItem, setDraggedItem}: DragAndDropListItem) => {
	const listItemId = useId()

	const handleDragStart = (e: React.DragEvent) => {
		const dragElement = e.target as HTMLDivElement
		const parentElement = dragElement.parentElement as HTMLLIElement
		e.dataTransfer.effectAllowed = "move"
		e.dataTransfer.setData("text/html", listItemId)
		e.dataTransfer.setDragImage(parentElement, 20, 20)
		if (parentElement && parentElement.dataset.index) {
			setDraggedItem(parentElement.dataset.index)
		}
	}

	const handleDragOver = (index: number) => {
		console.log(items)
		const draggedOverItem = items[index]
		// if (Number(draggedItem) === ) return
		console.log("dragged over item",draggedOverItem)
		console.log("dragged item",draggedItem)
		setItems(prevItems => {
			if (draggedItem) {
				const itemToMove = prevItems[Number(draggedItem)]
				const newItems = [...prevItems].filter((item, index) => index !== Number(draggedItem))
				newItems.splice(index, 0, itemToMove)
				return newItems
			}
			return prevItems
		})
	}

	return (
		<li 
			id={listItemId}
			data-index={index}
			className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800 border border-slate-400"
			onDragOver={(e) => handleDragOver(index)}
		>
			<div
				className="cursor-move"
				draggable={true}
				onDragStart={(e) => handleDragStart(e)}
			>
				<FaBars />
			</div>
			{children}
		</li>
	)
}

export {
	DragAndDropList,
	DragAndDropListItem
}