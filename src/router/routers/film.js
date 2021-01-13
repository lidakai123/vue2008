import Films from "@/views/Films/Index";
import Detail from "@/views/Films/Detail";

var film = [
    {
        path: "/films",
        component: Films,
    },
    {
        path: "/film/:filmId",
        component: Detail,
    },
];

export default film;