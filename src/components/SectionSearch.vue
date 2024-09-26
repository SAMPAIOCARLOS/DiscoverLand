<script>
import { GetData } from '../api/fetchData';
    export default {
        name: 'SectionSearch',
        data() {
            return {
                list_continent: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
                data_api: [],
                array_mod: [],
                selectedOption: ''
            }
        },
        async created() {
            try {
                this.data_api = await GetData()
            } catch (error) {
                console.log(`Erro ao carregar os dados`)
            }
        },
        methods: {
            filter_data() {
                this.array_mod = this.data_api.filter(data => this.selectedOption === data.region)

                console.log(this.array_mod)
            },

        }
    }
</script>


<template>
    <div id="container_bottom_header">
        <div id="container_group_search">
            <div id="container_input_search">
                <ion-icon name="search-outline"></ion-icon>
                <input type="text" id="input_search" placeholder="Search for a country">
            </div>

            <select name="select_continent" id="select_continent" @change="filter_data()" v-model="selectedOption">
                <option selected disabled>Select your continent</option>
                <option :value="item" v-for="(item, index) in list_continent" :key="index"> {{ item }} </option>
            </select>

        </div>
    </div>
</template>


<style scoped>

#container_bottom_header {
    width: 100vw;
    height: 20vh;
    background-color: var(--background-main);
    /* display: flex; */
}
#container_group_search {
    /* border: 1px solid red; */
    width: 85%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#container_input_search {
    background-color: var(--background-top);
    width: 25%;
    height: 6vh;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1.2vw;
    padding-left: 1.2vw;
    color: var(--color-text);
    transition: all 0.5s;
}

#container_input_search:focus-within {
    border: 2px solid white;
}

#container_input_search > ion-icon {
    font-size: 1.1vw;
}
#input_search {
    background-color: transparent;
    border: none;
    font-size: 1.1vw;
    outline: none;
    color: var(--color-text);
}
#input_search::placeholder{
    color: var(--color-text);
}

#select_continent {
    background-color: var(--background-top);
    width: 25%;
    height: 6vh;
    border-radius: 8px;
    color: var(--color-text);
    border: 2px solid transparent;
    padding-left: 1vw;
    font-size: 1.1vw;
    transition: all 0.5s;
}
#select_continent:focus {
    border: 2px solid white;
}
</style>