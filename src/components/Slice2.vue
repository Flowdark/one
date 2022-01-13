<template>

    <div class="container--full">
        <div class="container--background">
            <div class="container">
                <div class="container__left">
                    <h2 class="container__left__title">Creamos un sistema integrado con lo mejor de la tecnología y el marketing para optimizar los resultados de tu centro</h2>
                </div>
                <div class="container__right">
                    <img src="https://i.imgur.com/CLFE3OA.png" alt="Image" loading="lazy" />
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

@keyframes float {
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-20px);
	}
	100% {
		
		transform: translatey(0px);
	}
}

img{
    width: 100%;
    animation: float 6s ease-in-out infinite;
}

.container--background{
    /* background-image: url('https://i.imgur.com/0MkxB2R.png'); */
    /* background-image: url('https://i.imgur.com/3KHT2Up.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top left; */
}

.container--full{
    width: 100%;
    /* background: linear-gradient(180deg, rgba(16,22,44,1) 0%, rgba(36,32,71,1) 30%, rgba(31,62,105,1) 50%, rgba(22,82,124,1) 70%, rgba(4,125,165,1) 100%); */
}

.container{
    width: 100%;
    padding: 10px;
    color: #ffffff;
}

.container__left__title{
    color: #ffffff;
    line-height: 1.4;
    font-size: 24px;
    font-family: 'VisbyCF-Bold' !important;
}

.container__left{
    padding-bottom: 30px;
}

@media(min-width: 576px){
    .container__left__title{
        font-size: 35px;
        font-family: 'VisbyCF-Bold' !important;
        width: 90%;
        margin: 0 auto;
    }
}


@media(min-width: 992px){
    .container{
        align-items: center;
        display: flex;
        padding: 80px 0;
    }

    .container__left{
        flex-basis: 50%;
    }

    .container__left__title{
        font-size: 40px;
        font-family: 'VisbyCF-Bold' !important;
    }

    .container__left__text{
        font-size: 20px;
        font-family: 'RNSSanz-SemiBold' !important;
        line-height: 1.5;
    }

    .container__right{
        flex-basis: 50%;
    }

}

@media(min-width: 1200px){

}

@media(min-width: 1400px){
    .container{
        margin: 0 auto;
        width: 1400px;
    }
}

</style>