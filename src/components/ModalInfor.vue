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
        overflow-y: scroll;
        background-color: var(--background-top);
        color: var(--color-text);
        border-radius: 12px;
        z-index: 200;
    }

    #container_btn_back {
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
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    #container_flag {
        width: 45%;
        height: 50vh !important;
    }
    #container_flag > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    #container_infor {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 3vw;
    }

    h1 {
        font-size: 2.3vw;
    }
    #container_lists {
        display: flex;
        justify-content: space-between  
    }
    .group_list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 7px;
        font-size: 1vw;
    }
    .flex {
        display: flex;
        gap: 5px;
    }

    ::-webkit-scrollbar {
    width: 8px; /* Largura da barra */
}

::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do fundo da barra */
    border-radius: 10px; /* Borda arredondada */
}

::-webkit-scrollbar-thumb {
    background: #acacac; /* Cor da barra */
    border-radius: 10px; /* Borda arredondada */
}

::-webkit-scrollbar-thumb:hover {
    background: #636363; /* Cor da barra ao passar o mouse */
}

    @media(max-width: 1000px) {
        #button_back {
            font-size: 2vw;
            width: 20vw;
        }
        h1 {
        font-size: 3.3vw;
        }

        .group_list {
            font-size: 1.5vw;
        }

        #container_flag_infor {
            flex-wrap: wrap;
        }

        #container_infor {
            width: 100%;
        }

        #container_flag {
            width: 100%;
        }

        #container_flag > img {
            object-fit: contain;

        }
    }

    @media(max-width: 800px) {
        h1 {
        font-size: 4.3vw;
        }

        .group_list {
            font-size: 2.2vw;
        }
    }

    @media(max-width: 587px) {
        #modal {
            width: 100vw;
            height: 100vh;
        }
        #container_lists {
            flex-wrap: wrap;
            gap: 5vw;
        }
        h1 {
            font-size: 6.3vw;
        }
        .group_list {
            width: 100%;
            font-size: 3vw;
        }

        #button_back {
            font-size: 3vw;
            width: 30vw;
        }

    }

    @media(max-width: 400px) {
        h1 {
            font-size: 8.3vw;
        }
        .group_list {
            font-size: 4vw;
        }
    }

</style>