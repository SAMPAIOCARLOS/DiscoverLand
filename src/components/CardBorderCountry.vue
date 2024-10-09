<script>
    export default {
        name: 'CardBorderCountry',
        props: {
            data_border_country: {type: Array, required: true}
        }
    }
</script>

<template>
    <div id="container_border_country">
        <h2><strong>border country:</strong></h2>

        <div id="container_cards_border_country">
            <div class="card_border_country" v-for="(border_country, index) in data_border_country" :key="index">
                {{ border_country }}

                
            </div>
        </div>
    </div>
</template>

<style scoped>
#container_border_country {
    display: flex;
    gap: 5px;
    align-items: center;
    margin-bottom: 50px;
}
#container_cards_border_country {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    
}
h2 {
    font-size: 2vw;
}
.card_border_country {
    background-color: var(--background-main);
    padding: 10px 20px 10px 20px;
    width: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    transition: all 0.5s;
}

.card_border_country:hover {
    scale: 1.1;
}

@media(max-width: 1000px) {
    h2 {
        font-size: 3vw;
    }

    .card_border_country {
        font-size: 2vw;
    }
}

@media(max-width: 500px) {
    #container_border_country {
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }
    #container_cards_border_country {
        justify-content: center;
    }

    h2 {
        font-size: 4vw;
        margin-top: 50px;
    }

    .card_border_country {
        font-size: 3vw;
    }
}
</style>