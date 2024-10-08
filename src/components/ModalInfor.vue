<script>
import CardBorderCountry from './CardBorderCountry.vue';
    export default {
        name: 'ModalInfor',
        data() {
            return {
                showModal: false
            }
        },
        components: {
            CardBorderCountry
        },
        props: {
            data_modal: { type: Array, required: true }
        },
        methods: {
            btn_back() {
                this.$emit('closeModal')
            }
        }

    }
</script>


<template>
    
    <div id="modal" v-for="data in data_modal" :key="data.name">
        <div id="container_btn_back">
            
            <button @click="btn_back" id="button_back">
                <ion-icon name="arrow-undo-outline"></ion-icon>
                Back
            </button>
        </div>

        <div id="container_flag_infor">
            <div id="container_flag">
                <img :src="data.flags.png" alt="">
            </div>

            <div id="container_infor">
                <h1>{{ data.name }}</h1>

                <div id="container_lists">
                    <ul class="group_list">
                        <li><strong>Native name:</strong> {{ data.nativeName }} </li>
                        <li><strong>Population:</strong> {{ data.population }} </li>
                        <li><strong>Region:</strong> {{ data.region }} </li>
                        <li><strong>Sub Region:</strong> {{ data.subregion }} </li>
                        <li><strong>Capital:</strong> {{ data.capital }} </li>
                    </ul>

                    <ul class="group_list">
                        <li class="flex">
                            <strong>Top Level Domain:</strong>
                                <p v-for="(Item_Level_Domain, index) in data.topLevelDomain" :key="index">
                                {{ Item_Level_Domain }}
                                </p>  
                        </li>

                        <li class="flex">
                            <strong>Currencies:</strong>
                            <p v-for="(Currencies, index) in data.currencies" :key="index">
                                {{ Currencies.name }}
                            </p>
                        </li>

                        <li class="flex">
                            <strong>Languages:</strong>
                            <p v-for="(Languages, index) in data.languages" :key="index">
                                {{ Languages.name }}
                            </p>
                        </li>
                    </ul>
                </div>


                <CardBorderCountry :data_border_country="data.borders"/>
            </div>
        </div>


        
    </div>

    

</template>

<style scoped>
    #modal {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        height: 90vh;
        background-color: var(--background-top);
        color: var(--color-text);
        border-radius: 12px;
    }

    #container_btn_back {
        border: 1px solid rgb(123, 255, 0);
        width: 95%;
        margin: auto;
        margin-bottom: 11vh;
    }

    #button_back {
        margin: 2vw 0 2vw 0;
        background-color: var(--background-main);
        color: var(--color-text);
        width: 10vw;
        border: none;
        padding: 1vw;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        gap: 15px; 
        transition: all 0.5s;
        font-size: 1.2vw;      
    }
    #button_back:hover {
        scale: 1.1;
    }
    #container_flag_infor {
        border: 1px solid red;
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    #container_flag {
        border: 2px solid blue;
        width: 40%;
    }
    #container_flag > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    #container_infor {
        border: 2px solid white;
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 3vw;
    }

    #container_lists {
        display: flex;
        border: 1px solid red;
        justify-content: space-between
        
    }
    .group_list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    .flex {
        display: flex;
        gap: 5px;
    }
</style>