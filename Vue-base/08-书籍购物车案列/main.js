const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-3',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2006-5',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2016-9',
                price: 124.00,
                count: 1
            }
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2)
        // }
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            //1、普通的for循环
            // let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // return totalPrice;

            //2、for(let i in this.books)
            // let totalPrice = 0;
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // return totalPrice;

            //3、for (let i of this.books)
            // let totalPrice = 0;
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            //     console.log(item)
            // }
            // return totalPrice;

            //reduce 高阶函数
            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count
            }, 0)


        }
    },
    //使用过滤器，不用以上方法，实现复用
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }




})

