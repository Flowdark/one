<template>
    <div class="container">
        <div class="container__image">
            <h2 class="container__image__title">Cambia la forma de llevar tu gestión y marketing con ONE y empieza a ver resultados desde hoy</h2>
        </div>
    </div>
</template>

<style scoped>
    img{
        max-width: 100%;
    }

    .container{
        width: 100%;
    }

    .container__image{
        background-image: url('https://i.imgur.com/CednLEr.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: -300px;
        height: 1080px;
        width: 100%;
    }

    .container__image__title{
        text-align: center;
        font-family: 'VisbyCF-Bold' !important;
        font-weight: 700;
        color: black;
        font-size: 30px;
        margin: 0;
    }

    @media(min-width: 992px){
        .container__image{
            background-position-x: center;
        }

        .container__image__title{
            width: 60%;
            margin: 0 auto;
        }
    }

    @media(min-width: 1200px){
        .container__image__title{
            width: 900px;
            margin: 0 auto;
        }
    }
</style>