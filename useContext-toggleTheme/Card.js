import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js"

export default function Card(props) {
    const theme = useContext(ThemeContext)
    return <div className={theme.theme}>{props.children}</div>
}