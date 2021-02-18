export const changeTitle = (apipath) => {
    if (apipath === "catalog") {
        return "Каталог";
    } else if (apipath === "health") {
        return "Здоровье";
    } else if (apipath === "beauty") {
        return "Красота";
    } else if (apipath === "entertaiment") {
        return "Развлечения";
    } else if (apipath === "car") {
        return "Авто";
    } else {
        return "Каталог";
    }
};
