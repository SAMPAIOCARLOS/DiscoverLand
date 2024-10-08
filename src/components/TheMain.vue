<script>
import { GetData } from '../api/fetchData';
import CardCountry from './CardCountry.vue';
import SectionSearch from './SectionSearch.vue';

    export default {
        name: 'TheMain',
        components: {
            CardCountry, SectionSearch
        },
        data() {
            return {
                data_api: [],
                filteredData: [],
                All_country: true,
                input_filter: []
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
            updateFilteredData(filteredData) {
                // Atualize a propriedade filteredData com os dados filtrados
                this.filteredData = filteredData;
                console.log(this.filteredData);
            },
            update_country() {
                this.All_country = false
            },
            metodo_teste(valor) {
                this.input_filter.push(valor)
                console.log(this.input_filter)
            }
        },
       
    }

</script>


<template>
    
    <main>

        <SectionSearch :DataApi="data_api" @eventFilter="updateFilteredData" @open_country="update_country" @teste="metodo_teste"/>


        <CardCountry :array_data="data_api" v-if="All_country"/>
        <CardCountry :array_data="filteredData" v-else/>

        <!-- <CardCountry :array_data="input_filter"/> -->

    </main>

</template>

<style scoped>
main {
    width: 100vw;
    background-color: var(--background-main);
}

</style>