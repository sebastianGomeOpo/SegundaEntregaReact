const databaseItems = [
    {
        id:1,
        productImg:'../../assets/img/pantalones1.webp',
        cardTitle:'Pantalon',
        price:'5000',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        textButton:'Compra',
        category:'adultos}'
    },
    {
        id:2,
        productImg:'../../assets/img/Polos1.webp',
        cardTitle:'Polo',
        price:'4000',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        textButton:'Compra',
        category:'adultos}'
    },
    {
        id:3,
        productImg:'../../assets/img/camisa1.webp',
        cardTitle:'Camisa',
        price:'3000',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        textButton:'Compra',
        category:'adultos}'
    },
    {
        id:4,
        productImg:'../../assets/img/baby3.webp',
        cardTitle:'Buzo',
        price:'2000',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        textButton:'Compra',
        category:'niños}'
    },
    {
        id:5,
        productImg:'../../assets/img/Baby2.webp',
        cardTitle:'Buzo',
        price:'1000',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        textButton:'Compra',
        category:'niños}'
    },
    {
        id:6,
        productImg:'../../assets/img/baby3.webp',
        cardTitle:'Bebes',
        price:'8000',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        textButton:'Compra',
        category:'bebes}'
    },
];

export function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(databaseItems);
        }, 1);
    });
};

export function getSingleItem(itemid) {
    // 3. Usamos find para encontrar el item que coincida con el id que recibimos por parámetro
    let itemReq = databaseItems.find((item) => item.id === parseInt(itemid));
    // 4. Retornamos una promesa que resuelve con el item encontrado
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (itemReq!==undefined) {
            resolve(itemReq)};
        }, 1);
    });
};

export function getItemsByCategoryid(category) {
    // 3. Usamos filter para encontrar los items que coincidan con la categoria que recibimos por parámetro
    let itemCat = databaseItems.filter((item) => item.category === category);
    // 4. Retornamos una promesa que resuelve con el item encontrado
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemCat);
        }, 1);
    });
};

