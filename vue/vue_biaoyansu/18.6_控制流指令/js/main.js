var app = new Vue({
    el: '#app',
    data: {
        math:88,
        physics:77,
        eglish:45,
    },
    computed:{
        sum:function(){
            return this.math + this.physics + this.eglish;
        },
        average:function(){
            return Math.round(this.sum/3)
        }
    
    }
})