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
            }
        },
       
    }

</script>


<template>
    
    <main>

        <SectionSearch :DataApi="data_api" @eventFilter="updateFilteredData" @open_country="update_country" />

        <CardCountry :array_data="All_country ? data_api : filteredData"/>

    </main>

</template>

<style scoped>
main {
    width: 100vw;
    background-color: var(--background-main);
}

</style>