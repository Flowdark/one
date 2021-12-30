<template>
    <div class="container--full">
        <div class="container">
            <div class="container__left">
                <div class="container__left__titles">
                    <div class="container__left__titles__container">
                        <h2 class="container__left__title__title">
                            Un servicio unico y especializado
                        </h2>
                    </div>
                    <div class="container__left__titles__container">
                        <h2 class="container__left__title__title">
                            de marketing enfocado en el exito.
                        </h2>
                    </div>
                    <div class="container__left__titles__container">
                        <h2 class="container__left__title__title">
                            y la expansion de tu negocio + lo
                        </h2>
                    </div>
                    <div class="container__left__titles__container">
                        <h2 class="container__left__title__title">
                            Ultimo en tecnologia
                        </h2>
                    </div>
                </div>
                <p class="container__left__text"> 
                     Consigue resultados constantes con un Equipo de especialistas
                     y una propuesta de crecimiento unica en el mercado.
                </p>
                <div class="container__left__subtexts">
                    <p class="container__left__subtexts__subtext"> 
                        <span class="container__left__subtexts__subtext__check">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <p class="container__left__subtexts__subtext"> 
                        <span class="container__left__subtexts__subtext__check">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <p class="container__left__subtexts__subtext"> 
                        <span class="container__left__subtexts__subtext__check">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    
                </div>
                <div class="container__left__buttons">
                    <a href="#" class="container__left__button">Button</a>
                </div>
            </div>
            <div class="container__right">
                <img class="container__right__image" src="https://i.imgur.com/Ux0RdUS.png" alt="" loading="lazy" />
            </div>
        </div>
    </div>

</template>

<style scoped>

    *{
        margin: 0;
        padding: 0;
    }

    img{
        width: 100%;
    }

    .container--full{
        padding: 50px 0;
    }

    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px; */

    .container{
        display: flex;
        flex-direction: column;
        max-width: 90%;
        margin: 0 auto;
    }

    .container__left{}

    .container__left__titles__container{
        display: flex;
    }

    .container__left__titles{}

    .container__left__title__title{
        background-color: #725BA2;
        border-radius: 10px;
        color: white;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
        padding: 5px 10px;
        font-family:'VisbyCF-Bold' !important;
    }

    .container__left__text{
        color: #141A10;
        text-align: left;
        font-size: 18px;
        margin: 20px 0;
        font-weight: 500;
        font-family: 'RNSSanz-Medium' !important;
    }

    .container__left__subtexts{
        text-align: left;
    }

    .container__left__subtexts__subtext{
        align-items: center;
        display: flex;
        color: #171C12;
        margin-bottom: 15px;
        font-size: 16px;
        margin-left: 20px;
        font-family: 'RNSSanz-Normal' !important;
    }

    .container__left__subtexts__subtext__check{
        align-items: center;
        display: flex;
    }

    .container__left__subtexts__subtext__check svg{
        width: 25px;
        margin-right: 10px;
        stroke-width: 2px;
        stroke: #725BA2;
    }

    

    .container__left__button{
        border: 2px solid #725BA2;
        border-radius: 20px;
        color: #725BA2;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        margin: 20px 0;
        padding: 2px 25px;
        text-decoration: none;
    }

    @media(min-width: 992px){
        .container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            align-items: center;
        }

        .container__left{
            /* flex-basis: 50%; */
        }

        .container__right{
            flex-basis: 50%;
        }
    }

    @media(min-width: 1400px){
        .container{
            max-width: 1200px;
            margin: 0 auto;
        }
    }

</style>