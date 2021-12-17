import { ADDCART, ADD_MORE, DECREASE, REMOVE_CART } from "../types/CartType"
import listShoes from '../../data/shoes.json'

let choosing = [];
if (localStorage.getItem("cartItems")) {
    choosing = JSON.parse(localStorage.getItem("cartItems"))
}
let lstShoes = listShoes.shoes
let idChoosing = []
choosing.map((item) => {
    idChoosing.push(item.id)
})

lstShoes.map((item) => {
    idChoosing.map((id) => {
        if (item.id === id) {
            item.clicked = "clicked"
        }
    })

})

const stateDefault = {
    shoesDefault: lstShoes,
    shoeChoosing: choosing
}

export const CartReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ADDCART: {

            state.shoeChoosing.push(action.shoeChoosing)

            return { ...state }
        }
        case ADD_MORE: {
            state.shoeChoosing[action.addIndex].quantily++

            return { ...state }
        }
        case DECREASE: {
            state.shoeChoosing[action.DEIndex].quantily--
            if (state.shoeChoosing[action.DEIndex].quantily === 0) {
                state.shoeChoosing.splice(action.DEIndex, 1)
                state.shoesDefault[action.rmID - 1].clicked = ""
            }

            return { ...state }
        }
        case REMOVE_CART: {
            state.shoeChoosing.splice(action.rmIndex, 1)

            state.shoesDefault[action.rmID - 1].clicked = ""

            return { ...state }
        }
        default: return { ...state }
    }
}