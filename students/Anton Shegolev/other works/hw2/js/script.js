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

class GoodsItem {
    constructor(title, price, img = "img/None.jpg") {
        this.title = title;
        this.price = price;
        this.img = img
    }
    render() {
        return `<div class="goods-item">
<img src="${this.img}" alt="${this.title}">
<h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = goods;
    }
    render() {
        let listHtml = '';
        //перебираем элементы goods
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    summ() {
        let summGL = 0;
        this.goods.forEach(good => {
            summGL += good.price;
        });
        return summGL;
    }
}

//const cart = [{
//   title:"", price:0, total:0
//}];

class CartList {
    constructor() {
        this.carts = [];
    }

    addCart(title, price) {
        if (this.carts.length > 0) {
            this.carts.forEach(cart => {
                if (title == cart.title && price == cart.price) {
                    cart.total++;
                }
            });
        } else {
            this.carts.push({
                title: title,
                price: price,
                total: 1
            });
        }
    }

    delCart(title, price) {
        if (this.carts.length > 0) {
            this.carts.forEach(function(item, index, carts) {
                if (title == item.title && price == item.price) {
                    if (item.total > 0) item.total--;
                    if (item.total == 0) this.carts.splice(index,1);
                }
            });
        } 
    }
}



const gL = new GoodsList();
gL.fetchGoods();
gL.render();

document.querySelector('.totalAll').innerHTML = '<h3>Total for All: ' + gL.summ() + '</h3>';
