<template>
    
    <section class="travel">

        <div class="travel__content">

            <div class="travel__media">
                <div class="travel__media-figure">
                    <img class="travel__media-img" src="https://i.imgur.com/IUTo05i.png" alt="">
                </div>
            </div>

            <div class="travel__content-text">
                <h2 class="travel__content-text-title">
                    ¿Estás listo para empezar un viaje de crecimiento?
                </h2>

                <p class="travel__content-text-contenttext">
                    Conoce los precios que ninguna otra agencia podra igualar
                    y empieza a escalar tu negocio hoy mismo
                </p>

                <a class="container__boxes__box__buttons__button container__boxes__box__buttons__button--blue" href="" >
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
    
    width: 100%;
    display: flex;
    align-items: center;

    /* background-image: url('https://i.imgur.com/0MkxB2R.png'); */
    /* background-image: url('https://i.imgur.com/3KHT2Up.jpg');
    background-size: cover;
    background-repeat: no-repeat; */
    padding: 10px;
}

.travel__content{
    width: 100%;
    padding: 50px 0;
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
    font-size: 24px;
    font-weight: 700;
    font-family: 'VisbyCF-Bold', 'Poppins' !important;
    color: #FFF;
}

.travel__content-text-link{
    color: $purple-color;
    font-size: 20px;
    text-decoration: none;
    font-family: 'RNSSanz-Medium', 'Poppins' !important;
    font-weight: 700;
    display: block;
}

.travel__content-text-contenttext{
    font-size: 16px;
    color: #FFF;
}

.travel__media-figure img{
    display: block;
}

.container__boxes__box__buttons__button{
    border-radius: 20px;
    font-size: 16px;
    text-decoration: none;
    padding: 2px 20px;
    color: #10162C;
    font-weight: 600;
    margin-top: 30px;
}

.container__boxes__box__buttons__button--green{
    background-color: #00EB73;
    border: 2px solid #00EB73;
}

.container__boxes__box__buttons__button--green:hover{
    background-color: transparent;
    color: #00EB73;
}

.container__boxes__box__buttons__button--blue{
    background-color: #00E9FF;
    border: 2px solid #00E9FF;
}

.container__boxes__box__buttons__button--blue:hover{
    background-color: transparent;
    color: #00E9FF;
}

@media screen and (min-width: 768px) {
    
    .travel__content{
        display:  grid;
        grid-template-columns: repeat(2, 1fr);
        
        align-items: center;
        margin: 0 auto;
    }

    
    .container__boxes__box__buttons__button{
        font-size: 20px;
    }

}

@media screen and (min-width: 992px) {

    .travel__content-text-contenttext{
        font-size: 20px;
        color: #FFF;
        width: 80%;
        margin-bottom: 35px;
    }

    .travel__content-text-link{
        font-size: 20px;
    }

    .travel{
        margin-bottom: 130px;
    }

}

@media screen and (min-width: 1200px) {
    
    .travel__content{
        max-width: 1200px;
    }

    .travel__content-text-title{
        font-size: 38px;
        color: #FFF;
        width: 70%;
    }

}

@media screen and (min-width: 1400px) {
    
    .travel__content{
        max-width: 1400px;
    }

}

</style>