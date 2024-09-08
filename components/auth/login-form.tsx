"use client"

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { useMutateAuth } from "@/hooks/useMutateAuth";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loginMutation } = useMutateAuth()

    const submitLoginHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginMutation.mutate({
            email: email,
            password: password
        })
    }
    return (
        <CardWrapper
            headerLabel="おかえりなさい！"
            backButtonLabel="アカウントをお持ちではありませんか？"
            backButtonHref="/auth/register"
        >
            <form 
                onSubmit={submitLoginHandler}
                className="flex flex-col gap-y-4"
            >
                <div>
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoFocus
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
                    disabled={!email || !password}
                    type="submit"
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-700"
                >
                    ログイン
                </Button>
            </form>
        </CardWrapper>
    )
}

export default LoginForm;