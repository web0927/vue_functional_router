<template>
    <header>
        <section>
            <label for="title">ToDoList</label>
            <input type="text" id="title" name="title" v-model="lineData" @keyup.enter='btn_addClick' placeholder="添加ToDo" autocomplete="off" />
        </section>
    </header>
</template>

<script>
export default {
    data(){
         return {
             lineData:''
         }
     },
     mounted(){

     },
     methods:{
         btn_addClick(){
           if (this.lineData){
                this.$store.commit('todolist/addTodo', {pu:{text:this.lineData}});
                this.lineData = '';
           }
         },
     }
}
</script>
<style scoped>
header {
        height: 50px;
        background: #333;
        background: rgba(47, 47, 47, 0.98);
    }
    section {
        margin: 0 auto;
    }
    
    label {
        float: left;
        width: 100px;
        line-height: 50px;
        color: #DDD;
        font-size: 24px;
        cursor: pointer;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    
    header input {
        float: right;
        width: 60%;
        height: 24px;
        margin-top: 12px;
        text-indent: 10px;
        border-radius: 5px;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24), 0 1px 6px rgba(0, 0, 0, 0.45) inset;
        border: none
    }
    
    input:focus {
        outline-width: 0
    }
    @media screen and (max-device-width: 620px) {
        section {
            width: 96%;
            padding: 0 2%;
        }
    }
    
    @media screen and (min-width: 620px) {
        section {
            width: 600px;
            padding: 0 10px;
        }
    }
</style>


