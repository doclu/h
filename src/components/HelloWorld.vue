<template>
  <div class="hello">
     <h1>ToDoList</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.foo
  &__bar
    &_baz
      width: 10px

      ^[-1]:hover &
        width: 20px

</style>

