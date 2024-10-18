export type User = {
    id: number
    name: string
    email: string
    image: string
    role: "admin" | "user";
}