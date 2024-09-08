"use client"

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { useMutateAuth } from "@/hooks/useMutateAuth";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { registerMutation } = useMutateAuth()

    const submitLoginHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        registerMutation.mutate({
            name: name,
            email: email,
            password: password
        })
    }
    return (
        <CardWrapper
            headerLabel="ETypeへようこそ"
            backButtonLabel="ログインに戻る"
            backButtonHref="/auth/login"
        >
            <form 
                onSubmit={submitLoginHandler}
                className="flex flex-col gap-y-4"
            >
                <div>
                    <Label htmlFor="name">ユーザー名</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        autoFocus
                        placeholder="ユーザ名"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="etype@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <Label htmlFor="password">パスワード</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="***********"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <Button
                    disabled={!name || !email || !password}
                    type="submit"
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-700"
                >
                    新規作成
                </Button>
            </form>
        </CardWrapper>
    )
}

export default RegisterForm;