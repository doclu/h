<template>
    
    <div :class="['todo-item',todo.completed? 'completed':'']">
        <input 
            type="checkbox"
            v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button @click="deleteTodo">X</button>
    </div>
</template>


<script>
export default {
    props:{
        todo:{ 
            type:Object,
            required:true
        }
    },
    methods:{
        deleteTodo(){
            this.$emit('del',this.todo.id);
        }
    }
}
</script>
