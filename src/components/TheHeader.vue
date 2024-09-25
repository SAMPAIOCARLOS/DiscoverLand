<script>
import TopPage from './TopPage.vue'

    export default{
        name: "TheHeader",
        components: {
            TopPage
        },
        props: {
            functionCick: {type: Function, required: true},
            value_btn_theme: {type: Boolean, required: true}
        }
    }
</script>


<template>
    
    <header>
        <TopPage :functionCick="functionCick" :value_btn_theme="value_btn_theme"/>
    </header>

</template>


<style>


</style>