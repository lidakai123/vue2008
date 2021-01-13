import Home from "@/views/home/Shouye";
import Detail from "@/views/Films/Detail";

var film = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/film/:filmId",
        component: Detail,
    },
];

export default film;