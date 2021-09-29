const vm = new Vue({
    el:'#app',
    data: {
        msg: 'Hello Vue!'
    },
    computed:{
        reversedMsg: {
            // Getter
           get: function(){
            return this.msg.split('').reverse().join('')
           },
           // Setter
           set: function(value){
                this.msg = value
           }
           
        }
    }
})