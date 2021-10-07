<template>
    <div>
        <button @click="createTodo">추가</button>
        <input  
          :value="title" 
          :placeholder="placeholder"
          type="text"
          @input="title = $event.target.value" 
          @keypress.enter="createTodo"        
        />
    </div>    
</template>

<script>
export default {
    data () {
        return {
            title: '',
            placeholder: '할 일을 추가하세요!'
        }
    },
    methods: {
      createTodo(){
        console.log(this.title)
        //생성
        this.$emit('create-todo', this.title)
      }
    }
}
</script>


