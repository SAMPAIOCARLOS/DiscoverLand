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
                data_api: []
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
            onchange() {
                this.data_api = this.data_api_mod
            }
        },
        props: {
            data_api_mod: {type: Object, required: true}
        }
    }

</script>


<template>
    
    <main>

        <SectionSearch />

        <CardCountry :array_data="data_api"/>

    </main>

</template>

<style scoped>
main {
    width: 100vw;
    background-color: var(--background-main);
}

</style>