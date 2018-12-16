var app = new Vue({
    el: '#app',
    data: {
        href:'http://www.baidu.com', 
        klass:'btn btn-default',
        foodList: ['apple', 'banana', 'orange'],
        isActive:0,
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