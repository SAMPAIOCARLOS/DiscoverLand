<script>

    export default {
        name: 'SectionSearch',
        data() {
            return {
                list_continent: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
                array_mod: [],
                selectedOption: '',
                array_mod_input: [],
                title: null,
                filter: ''
            }
        },
        methods: {
            filter_data() {
                this.array_mod = this.DataApi.filter(data => this.selectedOption === data.region)

                console.log(this.array_mod)

                this.$emit('eventFilter', this.array_mod);
                this.$emit('open_country')
            },
            new_value_country() {
                this.array_mod_input = this.DataApi.forEach(card => {
                    this.title = card.name.toLowerCase()
                    this.filter.toLowerCase()

                    if(this.title.startsWith(this.filter)) {
                        this.$emit('teste', card)

                        // console.log(card)

                        
                        //OS DADOS DESSE FILTRO FEITO COM O IF ESTÁ COM PROBLEMA E POR ISSO O COMPONENTE PAI ESTÁ RECEBENDO OS
                        //DADOS DESSE EMIT QUEBRADO
                    }
                    
                });
            }

        },
        props: {
            DataApi: {type: Array, required: true}
        }
    }
</script>


<template>
    <div id="container_bottom_header">
        <div id="container_group_search">
            <div id="container_input_search">
                <ion-icon name="search-outline"></ion-icon>
                <input type="text" id="input_search" placeholder="Search for a country" v-model="filter" @input="new_value_country">
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