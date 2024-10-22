// const User = {
//     name:"Shravan",
//     email:"Shravnsuresh@gmail.com",
//     isActive:true
// }

// function createUser({name: string, isPaid: boolean}){}


// let newUser = {name: "Shravan",isPaid: false,email:"s@s.com"}

// createUser(newUser)
// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }




// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }



// function createUser(user: User){
//     return {name: "",email: "",isActive: true}
// }

// createUser({name: "",email: "",isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "h@gmail.com"
// myUser_id = "asa"

export {}