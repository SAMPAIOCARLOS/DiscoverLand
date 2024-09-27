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
                filteredData: []
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
        },
       
    }

</script>


<template>
    
    <main>

        <SectionSearch :DataApi="data_api" @dataFiltered="updateFilteredData"/>

        <CardCountry :array_data="filteredData"/>

    </main>

</template>

<style scoped>
main {
    width: 100vw;
    background-color: var(--background-main);
}

</style>