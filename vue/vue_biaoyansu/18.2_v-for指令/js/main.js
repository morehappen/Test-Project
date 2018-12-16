var app = new Vue({
    el: '#app',
    data: {
        foodList: ['apple', 'banana', 'orange'],
        foodList1: [{
            name: '葱',
            price: 10,
            discount: .2
        }, {
            name: '韭菜',
            price: 41,
            discount: .5
        }, {
            name: '蒜',
            price: 22

        }]
    }
})