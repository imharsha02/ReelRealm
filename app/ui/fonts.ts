import { Lato } from "next/font/google"
import { Kanit } from "next/font/google"

export const kanit = Kanit({
    subsets:['latin'],
    weight:[
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ]
})
export const lato = Lato({
    subsets:['latin'],
    weight:[
        "100",
        "300",
        "400",
        "700",
        "900",
    ]
})