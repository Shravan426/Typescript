interface Users {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrial:() =>string
    startTrial():string
    getCoupon(couponname: string, value: number):
    number
}

interface Users {
    githubToken: string
}

interface Admin extends Users {
    role: "admin" | "ta" | "learner"
}

const Shravan: Admin = {dbId: 22, email: "s@s.com", userId: 2211,
role: "admin",
    githubToken: "github",
    startTrial: () => {
    return "Trial Started"
},
getCoupon: (name:"Shravan007",off:10) => {
    return 10
}
}
Shravan.email = "s@t.com"
