"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FilePen } from "lucide-react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import axios from "axios"

interface RenameCardProps {
  username: string
  label: string
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "名前は必須です",
  }),
})

const RenameCard = ({ username, label }: RenameCardProps) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: username,
        },
    })
    const { isSubmitting, isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/update`, values)

            if (!response) {
                toast("ユーザー名が更新できませんでした。")
                setOpen(false)
                router.refresh()
                return
            }

            toast("ユーザー名が更新されました。")
            setOpen(false)
            router.refresh()
        } catch (error) {
            toast("ユーザー名が更新できませんでした。")
            setOpen(false)
            router.refresh()
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Card
                className="w-60 m-2 hover:shadow-md cursor-pointer flex flex-col items-center"
                >
                <FilePen className="m-4" />
                <CardHeader>
                    <CardTitle>{label}</CardTitle>
                </CardHeader>
                </Card>
            </DialogTrigger>
        <DialogContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
                <Label>あなたの名前</Label>
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input
                        disabled={isSubmitting}
                        placeholder="名前を入力してください。"
                        {...field}
                        />
                    </FormControl>
                    </FormItem>
                )}
                />
                <div className="flex items-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type="submit">
                    保存
                </Button>
                </div>
            </form>
            </Form>
        </DialogContent>
        </Dialog>
    );
};

export default RenameCard;
