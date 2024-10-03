"use client"

import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Lesson, UserWordProgress} from "@/types"
import { User } from "@/types/user"
import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"

interface WordProgressTableProps {
    columns: ColumnDef<UserWordProgress>[]
    data: UserWordProgress[]
    lessons: Lesson[]
    token?: string 
    user: User | null
}

const WordProgressTable = ({
    columns,
    data,
    lessons,
    user,
    token
}: WordProgressTableProps) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [tableData, setTableData] = useState<UserWordProgress[]>(data);
    
    const handleGetUserWordProgressesByLessonId = async (lessonId: number) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userWordProgresses/${lessonId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': `token=${token}`
                },
                cache: 'no-cache',
                credentials: 'include'
            })
            if (response.ok) {
                const userWordProgress = await response.json()
                setTableData(userWordProgress);
            } else {
                setTableData([]);
            }
        } catch {
            setTableData([]);
        }
    }

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    })

    return (
      <div>
        <div className="rounded-md border shadow-sm">
            <div className="flex items-center px-4 pt-4">
                <label htmlFor="lesson-select" className="mr-2 text-sm">レッスンを選択:</label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="conbobox"
                            aria-expanded={open}
                            className="w-[400px] justify-between"
                        >
                            {value
                                ? lessons.find((lesson) => lesson.title === value)?.title
                                : "レッスンを選択してください"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[400px] p-0">
                        <Command>
                            <CommandList>
                                <CommandGroup>
                                    {lessons.map((lesson) => (
                                        <CommandItem
                                            key={lesson.id}
                                            value={lesson.title}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                                handleGetUserWordProgressesByLessonId(lesson.id)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === lesson.title ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {lesson.title}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {!user ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                ログインで学習記録を残すことができます。
                            </TableCell>
                        </TableRow>
                    ): (
                        table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                                </TableRow>
                            ))
                            ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    学習記録がありません
                                </TableCell>
                            </TableRow>
                        )
                    )}

                </TableBody>
            </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-1">
            <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            >
            前へ
            </Button>
            <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            >
            次へ
            </Button>
        </div>
      </div>
    );
}
 
export default WordProgressTable;