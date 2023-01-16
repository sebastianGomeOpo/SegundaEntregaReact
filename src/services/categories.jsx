const categoriesDB = [
    {
        id: 1,
        category:'adultos' 
    },
    { 
        id: 2,
        category:'niños'
    },
    {
        id: 3,
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
