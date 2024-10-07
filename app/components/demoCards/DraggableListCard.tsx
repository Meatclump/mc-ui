import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle, CardWrapper } from "../Card"
import { DragAndDropList, DragAndDropListItem } from "../DragAndDropList"
import { FaBars } from "react-icons/fa6"

const DraggableListCard = () => {
	const [items, setItems] = useState([{id: 1, name: "item 1"}, {id: 2, name: "item 2"}, {id: 3, name: "item 3"}])
	const [draggedItem, setDraggedItem] = useState<null|string>(null)
	return (
		<CardWrapper>
			<CardHeader>
				<CardTitle>
					Draggable List
				</CardTitle>
				<CardDescription>
					Drag and Drop sort functionality for list items.
				</CardDescription>
			</CardHeader>
			<CardContent className="items-center justify-center">
				<DragAndDropList>
					{items.map((item, index) =>
						<DragAndDropListItem key={item.id} index={index} items={items} setItems={setItems} draggedItem={draggedItem} setDraggedItem={setDraggedItem}>
							{item.name}
						</DragAndDropListItem>
					)}
				</DragAndDropList>
			</CardContent>
		</CardWrapper>
	)
}

export default DraggableListCard