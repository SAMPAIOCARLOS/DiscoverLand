<script>

    export default {
        name: 'SectionSearch',
        data() {
            return {
                list_continent: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
                selectedOption: '',
                filter: ''
            }
        },
        methods: {
            filter_data() {
                const filteredByRegion  = this.DataApi.filter(data => this.selectedOption === data.region)

                this.$emit('eventFilter', filteredByRegion);
                this.$emit('open_country') //esse evento "eventFilter" é utilizado duas vezes tanto quando é digitado alguma coisa no input e o valor do select é ativado
            },
            new_value_country() {
                const filteredByName = this.DataApi.filter(card => card.name.toLowerCase().startsWith(this.filter.toLowerCase()))
                
                this.$emit('eventFilter', filteredByName);
                this.$emit('open_country');
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
    width: 100%;
    height: 100%;
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
@media(max-width: 950px) {
    #input_search::placeholder {
        font-size: 1.7vw;
    }
    #input_search {
        font-size: 1.7vw;
    }
    #container_input_search > ion-icon {
        font-size: 1.7vw;
    }

    #select_continent {
        font-size: 1.7vw;
    }
}

@media(max-width: 750px) {
    #container_input_search{
        width: 30vw;
    }

    #select_continent {
        width: 30vw;
    }
}
@media(max-width: 600px) {
    #input_search::placeholder {
        font-size: 2.5vw;
    }
    #input_search {
        font-size: 2.5vw;
    }
    #container_input_search > ion-icon {
        font-size: 2.5vw;
    }

    #select_continent {
        font-size: 2.5vw;
    }

}

@media(max-width: 500px) {
    #container_input_search{
        width: 40vw;
        min-width: 200px;
    }

    #select_continent {
        width: 40vw;
        min-width: 200px;
    }
    
    #container_group_search {
        flex-wrap: wrap;
        gap: 5px;
    }
}

@media(max-width: 484px) {
    #select_continent {
        width: 100%;
    }

    #container_input_search {
        width: 100%;
    }

    #input_search::placeholder {
        font-size: 3.5vw;
    }
    #input_search {
        font-size: 3.5vw;
    }
    #container_input_search > ion-icon {
        font-size: 3.5vw;
    }

    #select_continent {
        font-size: 3.5vw;
    }
}
</style>