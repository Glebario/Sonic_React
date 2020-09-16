import {InferableComponentEnhancerWithProps} from "react-redux";


export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _>
    ? Props
    : never
    ;


export type InferValueTypes<T> = T extends { [key: string]: infer U}
    ? U
    : never;


export interface User {
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
