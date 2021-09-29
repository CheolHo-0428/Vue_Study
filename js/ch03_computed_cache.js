const vm = new Vue({
    el:'#app',
    data:{
        msg:'Hello Vue!'
    },
    methods:{
        reverseMsg(){
           return this.msg.split('').reverse().join('')
        }
    },
    computed:{
        reversedMsg(){
            return this.msg.split('').reverse().join('')
        }

    }
})