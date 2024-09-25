<script>
    export default{
        name: "TopPage",
        data() {
            return {
                btn_theme: this.value_btn_theme
            }
        },
        props: {
            functionCick: {type: Function, required: true},
            value_btn_theme: {type: Boolean, required: true}
        }
    }
</script>


<template>
    
    <div id="container_top_header">
        <div id="container_group_top">
            <h1>
                Where in the world?
            </h1>
            <button @click="functionCick">
                <ion-icon name="sunny-outline" v-if="value_btn_theme"></ion-icon>
                <ion-icon name="moon-outline" v-else></ion-icon>
                
                <p v-if="value_btn_theme">Light Mode</p>
                <p v-else>Dark Mode</p>
            </button>

        </div>
    </div>

</template>


<style scoped>

#container_top_header {
    width: 100vw;
    height: 10vh;
    background-color: var(--background-top);
    display: flex;
}

#container_group_top {
    width: 85vw;
    height: 100%;
    border: 1px solid red;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

h1 {
    font-size: 2vw;
    color: var(--color-text);
}

button {
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    gap: 0.7vw;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-text);
    cursor: pointer;
}

</style>