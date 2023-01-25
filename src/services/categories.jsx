const categoriesDB = [
    {
        id: 11,
        category:'adultos' 
    },
    { 
        id: 22,
        category:'niños'
    },
    {
        id: 33,
        category: 'bebes'
},
]
export function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoriesDB);
        }, 1);
    });
};
