import { User } from "@/types/user"
import { cookies } from "next/headers"

export const getUser = async (): Promise<User | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            headers: { Cookie: cookies().toString() },
            method: "GET",
            cache: "no-store"
        })
        if (!response.ok) {
          throw new Error("ユーザー情報の取得に失敗しました。");
        }
        const user: User = await response.json();
        return user;
    } catch (err) {
        return null
    }
}
  