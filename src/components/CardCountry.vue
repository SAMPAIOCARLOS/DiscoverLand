<script>
import ModalInfor from './ModalInfor.vue';


    export default {
        name: 'CardCountry',
        components: {
            ModalInfor,

        },
        data() {
            return {
                valores: [],
                showModal: false,
                showBackground: false
            }
        },
        props: {
            array_data: {type: Array, Required: true}
        },
        methods: {
            valueModal(valor) {
                this.valores = valor
                this.showModal = true

            },
            closeModal() {
                this.showModal = false
            }
        }
        
    }
</script>


<template>
    
    <div id="container_flags">
        <div class="flag" v-for="country in array_data" :key="country.numericCode" @click="valueModal(country)">
            <div class="top_flag_img">
                <img :src="country.flags.png" alt="">
            </div>

            <div class="text_content_country">
                <h1 class="name_country">{{ country.name }}</h1>
                <ul class="list_info_country_card">
                    <li><strong>Population</strong>: {{ country.population }}</li>
                    <li><strong>Region</strong>: {{ country.region }}</li>
                    <li><strong>Capital</strong>: {{ country.capital }}</li>
                </ul>
            </div>
        </div>
    </div>

    <ModalInfor :data_modal="[valores]" v-if="showModal" @closeModal="closeModal"/>


</template>


<style scoped>
#container_flags {
    width: 85%;
    margin: auto;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1vw;
}


.flag {
    background-color: var(--background-top);
    width: 25vw;
    height: 55vh;
    min-width: 300px;
    border-radius: 0.7vw;
    transition: all 0.5s;
    margin-bottom: 7vh;
}
.flag:hover {
    scale: 1.1;
    box-shadow: 1px 1px 30px #ffffff41;
}
.top_flag_img {
    width: 100%;
    height: 50%;
}
.top_flag_img > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.7vw;
}

.text_content_country {
    width: 85%;
    height: 50%;
    margin: auto;
}

.name_country {
    color: var(--color-text);
    font-size: 1.6vw;
    padding: 1vw 0 2vw 0;
}

.list_info_country_card {
    list-style: none;
    color: var(--color-text);
    display: flex;
    flex-direction: column;
    gap: 0.7vw;
    font-size: 1vw;
}

@media(max-width: 1084px) {
    .flag {
        width: 40vw;
    }
}
@media(max-width: 950px) {
    .name_country {
        font-size: 3vw;
    }
    .list_info_country_card {
        font-size: 1.6vw;
    }
}

@media(max-width: 714px) {
    .flag {
        width: 60vw;
        border-radius: 1.2vw;
    }
    #container_flags {
        justify-content: center;
    }
    .top_flag_img {
        height: 65%;
    }

    .top_flag_img > img {
        border-radius: 1.2vw;
    }
}

@media(max-width: 600px) {
    .flag {
        width: 80vw;
    }

    .name_country {
        font-size: 4.5vw;
    }
    .list_info_country_card {
        font-size: 2.3vw;
    }
}

@media(max-width: 350px) {
    .name_country {
        font-size: 6.5vw;
    }
    .list_info_country_card {
        font-size: 3.3vw;
    }
}
</style>