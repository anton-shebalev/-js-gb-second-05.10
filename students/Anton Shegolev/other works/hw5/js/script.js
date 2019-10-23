window.onload = function () {

    const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; //404: Not Found
    const app = new Vue({
        el: '#app',
        data: {
            name: 'Geek',
            goods: [],
            filteredGoods: [],
            searchLine: ''
        },
        methods: {
            makeGETRequest(url, callback) {

                console.log("Get");
                var xhr;

                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        callback(xhr.responseText);
                        console.log("Get ready");
                        console.log(xhr.responseText);
                    }
                }
                xhr.open('GET', url, true);
                xhr.send();
            }
        },

        mounted() {
            this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
                //    this.goods = goods.;// из за этого не работает вывод
                //    this.filteredGoods = goods; //из за этого не работает вывод html через v-for
                var jsonData = JSON.parse(goods);
                for (var i = 0; i < jsonData.goods.length; i++) {
                    var good = jsonData.goods[i];
                    //console.log(counter.counter_name);
                    alert(good.id_product);
                }

                console.log("mounted:")
                console.log(goods);
            });

        }


    });


    //app.mounted;

    const goodsConst = [
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


    console.log("Hello");
    console.log(app);
}
