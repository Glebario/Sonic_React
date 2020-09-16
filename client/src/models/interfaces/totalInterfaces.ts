export interface SharedState {
    isLoading: boolean
}

export interface user {
    localId: string
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

export interface userPreview {
    followers?: number
    avatar: string
    userName: string
    localId: string
}
