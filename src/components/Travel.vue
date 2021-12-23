<template>
    
    <section class="travel">

        <div class="travel__content">

            <div class="travel__media">
                <figure class="travel__media-figure">
                    <img class="travel__media-img" src="./../assets/Princing_landingone.png" alt="">
                </figure>
            </div>

            <div class="travel__content-text">
                <h2 class="travel__content-text-title">
                    ¿Estas listo para empezar un viaje de crecimiento?
                </h2>

                <p class="travel__content-text-contenttext">
                    Conoce los precios que ninguna otra agencia podra igualar
                    y empieza a escalar tu negocio hoy mismo
                </p>

                <a class="travel__content-text-link" href="" >
                    Escoge tu plan
                </a>

            </div>

        </div>

    </section>


</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

$primary-color: #FFD5B8;
$purple-color: #725BA2 ;

.travel{
    min-height: 100vh;
    height: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
}

.travel__content{
    margin: 0 auto;
    max-width: 80%;
}

.travel__media{
    max-width: 80%;
    margin: 0 auto;
}

.travel__media-img{
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
}

.travel__content-text-title{
    font-size: 30px;
    font-weight: 900;
}

.travel__content-text-link{
    color: $purple-color;
    font-size: 20px;
    text-decoration: none;
    font-weight: 700;
}

.travel__content-text-contenttext{
    font-size: 20px;
}

@media screen and (min-width: 768px) {
    
    .travel__content{
        display:  grid;
        grid-template-columns: repeat(2, 1fr);
        height: 500px;
        align-items: center;
    }

    


}

@media screen and (min-width: 1200px) {
    
    .travel__content{
        max-width: 1200px;
    }

    .travel__content-text-title{
        font-size: 40px;
    }

    .travel__content-text-contenttext{
        font-size: 30px;
    }

    .travel__content-text-link{
        font-size: 30px;
    }

}

@media screen and (min-width: 1400px) {
    
    .travel__content{
        max-width: 1400px;
    }

}

</style>