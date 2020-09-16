import React from 'react'
import './settings-page.css'
import {MainSettingsModelProps} from "../settings-controller";


export const SettingsPageComponent: React.FC<MainSettingsModelProps> = (model: MainSettingsModelProps) => {
    return (
        <div>
            <div className="container">
                <h2>Setting:</h2>
                <ul className="setting-bar">
                    <li><a href="#" onClick={model.defaultState}>Exit</a></li>
                </ul>
            </div>
        </div>
    )
}
