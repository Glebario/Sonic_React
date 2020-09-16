import {user} from "./totalInterfaces";


export interface AuthState {
    isAuthenticated: boolean
    token: string
    user: UserLogin | {}
    err: AuthErrorResponse | {}
}

export interface UserLogin {
    email: string
    password: string
}

export interface UserRegister {
    email: string
    password: string
    profile: {
        country?: string
        gender?: string
        userName: string
        avatar?: string
        followers?: string[]
        subscription?: string[]
        posts?: []
        favoritePosts?: string[]
    }
}

export interface AuthResponse {
    token: string
    userResponse: user 
}

export interface AuthErrorResponse {
    message: string
}
