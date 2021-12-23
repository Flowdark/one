<template>

    <section class="bonus">
        <div class="bonus__content">

            <div class="bonus__content-banner">
                <figure>
                    <img class="bonus__content-banner-img" src="./../assets/Discord_BeweTV.png" alt="Discord Bewe Tv">
                </figure>

            </div>

            <div class="bonus__content-text">

                <h2 class="bonus_content-text-title" > 
                    ¡Tendras Acceso a un espacio exclusivo para que no pare de aprender!
                </h2>

                <div class="bonus__content-text-contenttext">


                    <div class="bonus__content-text-contentext-text">
                        <svg class="bonus__content-text-contentext-text-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                            </svg>
                        <p class="bonus__content-text-contentext-text-paragraph">
                            Te ayudamos a crear un ecosistema integrado
                            y de crecimiento continuo para tu negocio
                        </p>
                    </div>
                   

                   <div class="bonus__content-text-contentext-text">
                        <svg class="bonus__content-text-contentext-text-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                            </svg>
                        <p class="bonus__content-text-contentext-text-paragraph">
                            Te ayudamos a crear un ecosistema integrado
                            y de crecimiento continuo para tu negocio
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </section>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

$primary-color: #FFF3EB;

h2{
    margin: 0;
}

.bonus{
    background-color: $primary-color;
    max-width: 100vw;
    width:100%;
    height: 200vh;
    display: flex;
    align-items: center;
}

.bonus__content{
    max-width: 90%;
    margin: 0 auto;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.bonus__content-banner{
    max-width: 100%;
    
}


.bonus__content-banner-img{
    max-width: 100%;
    max-height: 320px;
}



.bonus_content-text-title{
    font-size: 35px;
    font-weight: 900;
}

.bonus__content-text-contenttext{
    margin: 16px 0 0 32px;
}

.bonus__content-text-contentext-text{
    font-size: 25px;
    font-weight: 400;
    line-height: 1.5;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;

}

.bonus__content-text-contentext-text-svg{
    width: 40px;
    margin-top: 5px;
}

.bonus__content-text-contentext-text-paragraph{
    margin: 0;
}


@media screen and ( min-width: 576px ){
    .bonus__content-text{
        margin: 30px;
    }
}

@media screen and (min-width: 768px){

    .bonus{
        height: 180vh;
    }    

    .bonus__content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-items: center;
        gap: 20px;
    }

    .bonus__content-text{
        margin: 0px;
    }

    .bonus__content-text-contenttext{
        margin-left: 32px;
    }


    .bonus__content-banner-img{
        max-height: auto;
    }

}


@media screen and (min-width: 1200px) {
    
    .bonus{
        height: 100vh;
    }

}

@media screen and (min-width: 1400px) {
    
    .bonus__content{
        max-width: 1200px;
    }

}

</style>