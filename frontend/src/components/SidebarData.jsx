import { title } from "process";
import React from "react";

// главная
// профиль
// контакты
// товары
export const SidebarData = [
    {
        title: "Главная",
        icon: "<HomeIcon/>",
        link: "/"
    },
    {
        title: "Профиль",
        icon: "<AccountCircleIcon/>",
        link: "/profile"
    },
    {
        title: "Товары",
        icon: "<ShoppingCartIcon/>",
        link: "/shop"
    },
    {
        title: "Контакты",
        icon: "<ContactsIcon/>",
        link: "/contacts"
    }
]