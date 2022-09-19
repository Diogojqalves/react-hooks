import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js"

export default function Button(props) {
    const theme = useContext(ThemeContext)
    return <button className={theme.theme}onClick={props.onClick}>{props.children}</button>;
}