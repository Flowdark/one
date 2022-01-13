<template>
    <div class="container">
        <div class="container__image">
            <h2 class="container__image__title">Prepárate para destacar tu negocio en esta nueva etapa</h2>
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
        background-image: url('https://i.imgur.com/Xkl3Hgb.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: -254px;
        height: 1080px;
        width: 100%;
    }

    .container__image__title{
        color: #fff;
        font-family: 'VisbyCF-Bold' !important;
        font-weight: 700;
        font-size: 24px;
        margin: 0;
        text-align: center;
        padding: 100px 10px;
    }

    @media(min-width: 576px){
        .container__image{
            background-position-x: -138px;
        }
    }

    @media(min-width: 768px){
        .container__image{
            background-position-x: -33px;
        }

        .container__image__title{
            font-size: 34px;
        }
    }

    @media(min-width: 992px){
        .container__image{
            background-position-x: center;
        }

        .container__image__title{
            width: 80%;
            margin: 0 auto;
        }

        .container__image{
            background-position-x: 0px;
        }
    }
</style>