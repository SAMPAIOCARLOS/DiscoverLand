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
                Where in the world1?
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
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

h1 {
    font-size: 1.5vw;
    color: var(--color-text);
}

button {
    display: flex;
    align-items: center;
    font-size: 1.2vw;
    gap: 0.7vw;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--color-text);
    cursor: pointer;
}
@media(max-width: 950px) {
    h1 {
        font-size: 2.5vw;
    }

    button {
        font-size: 2vw;
    }
}

@media(max-width: 714px) {
    h1 {
        font-size: 3.5vw;
    }

    button {
        font-size: 3vw;
    }
}

@media(max-width: 350px) {
    h1 {
        font-size: 4.5vw;
    }

    button {
        font-size: 3.5vw;
    }
}
</style>