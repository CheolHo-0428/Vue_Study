const vm = new Vue({
    el:'#app',
    data: {
        msg: 'Hello Vue!'
    },
    beforeCreate(){
        console.log('beforeCreate!', this.msg)
    },
    created(){
        console.log('created!', this.msg)
    },
    beforeMount(){
        console.log('beforeMount!', this.$refs.div)
    },
    mounted(){
        console.log('mounted!', this.$refs.div)
    },
    beforeUpdate(){
        console.log('beforeUpdate', this.$refs.msg.innerText)
    },
    updated(){
        console.log('updated', this.$refs.msg.innerText)
    },
    beforeDestroy(){
        console.log('beforeDestroy!')
    },
    destroyed(){
        console.log('Destroyed!')
    }
})