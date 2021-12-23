<template>
    
    <div class="container--full">
        <div class="container">
            <div class="container__left">
                <h2 class="container__left__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dicta maxime magni?</h2>
                <p class="container__left__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt optio at possimus atque doloremque harum corporis nihil voluptatibus quisquam. Eos, natus.</p>
            </div>
            <div class="container__right">
                <img src="https://i.imgur.com/XKaFYjM.png" alt="Image" loading="lazy" />
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

.container--full{
    width: 100%;
    margin: 340px 0 150px 0;
}

.container{
    width: 100%;
}

@media(min-width: 992px){
    .container{
        align-items: center;
        display: flex;
    }

    .container__left{
        flex-basis: 50%;
    }

    .container__left__title{
        color: #000;
        font-size: 35px;
        font-family: 'RNSSanz-Bold';
    }

    .container__left__text{
        color: #000;
        font-size: 20px;
        font-family: 'RNSSanz-SemiBold';
        line-height: 1.5;
    }

    .container__right{
        flex-basis: 50%;
    }

}

@media(min-width: 1200px){
    .container{
        margin: 0 auto;
        width: 1200px;
    }
}

</style>