<template>
    <div>
        <Header />
        <Section />
        <Footer />
    </div>
</template>

<script>
import Header  from './todolist/header.vue';
import Section from './todolist/section.vue';
import Footer from './todolist/footer.vue';

export default {
    data(){
        return {

        }
    },
    components:{
        Header,
        Section,
        Footer
    }
}
</script>

<style>
    
</style>
