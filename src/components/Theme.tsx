import { MoonStar } from "lucide-react"
import { useEffect, useState } from "react"


const Theme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    );

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light")
        } else {
            root.classList.remove("dark");
            root.classList.add("light")
        }
            localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-auto h-auto m-4 fixed z-1 right-0">
            <MoonStar className="w-8 text-(--accent) cursor-pointer h-8"/>
        </button>
    )
}

export default Theme
