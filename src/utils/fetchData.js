export const fetchData = (time, data, boolean) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            boolean ? resolve(data) : reject("Error. Boolean is false")
        }, time);
    });
}