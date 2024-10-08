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
    border: 1px solid red;
    display: flex;
    gap: 5px;
    align-items: center;
}
#container_cards_border_country {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.card_border_country {
    background-color: var(--background-main);
    padding: 10px 20px 10px 20px;
    width: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>