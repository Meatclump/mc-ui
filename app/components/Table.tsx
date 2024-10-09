import { createContext, useContext } from "react"
import { cn } from "~/lib/cn"

interface ResponsiveTableContext { breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" }
const responsiveTableContext = createContext<ResponsiveTableContext>({breakpoint: "lg"})

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement>, ResponsiveTableContext {}
const Table = ({breakpoint, className, children, ...props}: TableProps) => {
	return (
		<responsiveTableContext.Provider value={{breakpoint}}>
		<table
			role="table"
			className={cn(
				"w-full",
				className
			)}
			{...props}
		>
			{children}
		</table>
		</responsiveTableContext.Provider>
	)
}

interface TableHeaderProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {}
const TableHeader = ({className, children, ...props}: TableHeaderProps) => {
	const { breakpoint } = useContext(responsiveTableContext)
	const breakpoints = {
		"xs" : "xs:table-header-group",
		"sm" : "sm:table-header-group",
		"md" : "md:table-header-group",
		"lg" : "lg:table-header-group",
		"xl" : "xl:table-header-group",
		"2xl" : "2xl:table-header-group",
	}

	return (
		<thead
			role="rowgroup"
			className={cn(
				"hidden",
				breakpoints[breakpoint],
				className
			)}
			{...props}
		>
			{children}
		</thead>
	)
}

interface TableRowProps extends React.TableHTMLAttributes<HTMLTableRowElement> {}
const TableRow = ({className, children, ...props}: TableRowProps) => {
	const { breakpoint } = useContext(responsiveTableContext)
	const breakpoints = {
		"xs" : "xs:table-row",
		"sm" : "sm:table-row",
		"md" : "md:table-row",
		"lg" : "lg:table-row",
		"xl" : "xl:table-row",
		"2xl" : "2xl:table-row",
	}

	return (
		<tr
			role="row"
			className={cn(
				"block group border-b last-of-type:border-b-0 py-2",
				"hover:bg-slate-300/40 border-slate-400/50",
				"dark:hover:bg-slate-600/50 dark:border-slate-500/50",
				breakpoints[breakpoint],
				className
			)}
			{...props}
		>
			{children}
		</tr>
	)
}

interface TableHeadProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
	direction: "col" | "row"
}
const TableHead = ({direction, className, children, ...props}: TableHeadProps) => {
	const { breakpoint } = useContext(responsiveTableContext)
	const breakpoints = {
		"xs" : "xs:table-cell",
		"sm" : "sm:table-cell",
		"md" : "md:table-cell",
		"lg" : "lg:table-cell",
		"xl" : "xl:table-cell",
		"2xl" : "2xl:table-cell",
	}

	return (
		<th
			scope={direction}
			role={direction && direction === "row" ? "rowheader" : "columnheader"}
			className={cn(
				"text-start hidden border-b p-2 text-sm",
				"border-slate-400/50 text-slate-600",
				"dark:border-slate-500/50 dark:text-slate-400",
				breakpoints[breakpoint],
				className
			)}
			{...props}
		>
			{children}
		</th>
	)
}

interface TableBodyProps extends React.TableHTMLAttributes<HTMLTableSectionElement> {}
const TableBody = ({className, children, ...props}: TableBodyProps) => {
	return (
		<tbody
			role="rowgroup"
			className={cn(
				"",
				className
			)}
			{...props}
		>
			{children}
		</tbody>
	)
}

interface TableCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
	dataHeading?: string
}
const TableCell = ({dataHeading, className, children, ...props}: TableCellProps) => {
	const { breakpoint } = useContext(responsiveTableContext)
	const breakpoints = {
		"xs" : "xs:table-cell xs:text-base xs:py-2 xs:before:content-[unset]",
		"sm" : "sm:table-cell sm:text-base sm:py-2 sm:before:content-[unset]",
		"md" : "md:table-cell md:text-base md:py-2 md:before:content-[unset]",
		"lg" : "lg:table-cell lg:text-base lg:py-2 lg:before:content-[unset]",
		"xl" : "xl:table-cell xl:text-base xl:py-2 xl:before:content-[unset]",
		"2xl" : "2xl:table-cell 2xl:text-base 2xl:py-2 2xl:before:content-[unset]",
	}

	return (
		<td
			role="cell"
			data-heading={dataHeading}
			className={cn(
				"grid text-xs grid-cols-[16ch_auto] gap-2 px-2 capitalize before:content-[attr(data-heading)_':_'] before:font-bold before:text-light",
				"text-slate-700",
				"dark:text-slate-300",
				breakpoints[breakpoint],
				className
			)}
			{...props}
		>
			{children}
		</td>
	)
}

export {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
}