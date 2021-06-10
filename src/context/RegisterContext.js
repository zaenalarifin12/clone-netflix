import React, { useReducer, createContext } from "react"

export const RegisterContext = React.createContext()

const initialState = {
    user: JSON.parse(localStorage.getItem("register")) ?? null,
    card: localStorage.getItem("card") ?? 0
}

const reducer = (state, action) => {

    switch (action.type) {
        case "CARD_1":
            localStorage.setItem("register", JSON.stringify(action.payload.user))
            localStorage.setItem("card", JSON.stringify(action.payload.card))

            return {
                ...state,
                user: action.payload.user,
                card: 1
            }

        case "CARD_2":

            let user = { ...state.user, ...action.payload.user }

            localStorage.setItem("register", JSON.stringify(user))
            localStorage.setItem("card", JSON.stringify(action.payload.card))

            return {
                ...state,
                user: user,
                card: 2
            }
        case "RESET":
            localStorage.setItem("card", JSON.stringify(action.payload.card))

            return {
                ...state,
                card: action.payload.card
            }

        default:
            throw new Error("failed context register");
    }
}

export const RegisterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <RegisterContext.Provider value={[state, dispatch]}>
            {children}
        </RegisterContext.Provider>
    )
}