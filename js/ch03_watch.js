const vm = new Vue({
    el:'#app',
    data:{
        msg:'Hello Vue!'
    },
    computed:{
        reversedMsg:{
            get(){
                return this.msg.split('').reverse().join('')
            },
            set(value){
                this.msg = value
            }
        }
    },
    watch:{
        msg(newMsg){
            console.log('New data: ' + newMsg)
        },
        reversedMsg(newMsg){
            console.log('New data: ' + newMsg)
        }
    }
})