<script>
    export default {
        name: 'CardCountry',
        props: {
            array_data: {type: Object, Required: true}
        }
    }
</script>


<template>
    
    <div id="container_flags">
            <div class="flag" v-for="country in array_data" :key="country.numericCode">
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

</template>


<style scoped>
#container_flags {
    /* border: 1px solid red; */
    width: 85%;
    margin: auto;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    /* border: 1px solid red; */
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
    /* border: 1px solid blue; */
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
</style>