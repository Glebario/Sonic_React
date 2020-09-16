import React from 'react'
import './user-search-page.css'

export const UserSearchPageComponent: React.FC = ( props) => {
    return (
                <div>
                    <h1>UserSearchPageComponent</h1>
            <main>{ props.children }</main>
        </div>
    )
}
