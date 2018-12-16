var jubu_alert = {
    template:'<button @click="on_click">弹弹弹</button>',
    methods:{
        on_click:function(){
            alert('Yo.')
        }
    }
};
new Vue({
    el:'#app',
    components:{
        'jubu-alert':jubu_alert
    }
    
})