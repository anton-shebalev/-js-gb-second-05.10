{
    const goods = [
        {
            title: 'Shirt',
            price: 150,
            img: "img/Shirt.jpg"
        },
        {
            title: 'Socks',
            price: 50,
            img: "img/Socks.jpg"
        },
        {
            title: 'Jacket',
            price: 350,
            img: "img/Jacket.jpg"
        },
        {
            title: 'Shoes',
            price: 250,
            img: "img/Shoes.jpg"
        },
        {
            title: 'None',
            price: 999
        },
];

    const renderGoodsItem = (title, price, img = "img/None.jpg") => {
        return `<div class="goods-item">
<img src="${img}" alt="${title}">
<h3>${title}</h3><p>${price}</p></div>`;
    };

    const renderGoodsList = (list) => {
        let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));

        document.querySelector('.goods-list').innerHTML = goodsList.join(""); 
        // .join("");   - убираем запятые 
        //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join

        console.log(goodsList)
    }

    renderGoodsList(goods);
    //alert("hello");
}
