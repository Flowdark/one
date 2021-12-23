<template>
    <section class="transition">
        <section class="transition__container">
            <h2 class="transition__container-title">
                Fusionamos tecnologia y marketing digital para ayudarte a
                <span class="transition__container-animation" style="color: red">
                    <p class="transition-container-title-transition transition-container-title-transition-one"> captar </p>
                    <p class="transition-container-title-transition transition-container-title-transition-two"> distracted </p>
                    <p class="transition-container-title-transition transition-container-title-transition-three"> distracted </p>
                    <p class="transition-container-title-transition transition-container-title-transition-four"> distracted </p>
                </span>
                a tus clientes.
            </h2>

            <p class="transition__text">
                Un equipo dedicado al crecimiento digital de tu negocio sin los desaciertos
                de una agencia.
            </p>

            <p class="transition__footer-text">
                No venimos con cuentos raros, ni trucos de magia
            </p>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Transition',
}
</script>

<style lang="scss" scoped>

/* $orange-color: #f8D4BC;
$white: #ffffff ; */
$main-color: #F7D2B3;

.transition{
    min-height: 100vh;
    /* background: linear-gradient(180deg, $white, $orange-color); */
    display: flex;
    align-items: center;
    font-family: 'RNSSanz';
}

.transition__container{
    max-width: 90%;
    margin: auto;
}

.transition__container-title{
    text-align: left;
    font-size: 50px;
    font-weight: 600;
    line-height: 1.4;
    color: black;
}

.transition__text{
    font-size: 25px;
}

.transition__footer-text{
    font-size: 30px;
    font-weight: 900;
}

.transition__explore{
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 40%;
}

.transition__explore-link{
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
}

.transition__explore-around{
    color: #ffffff;
    border-radius: 50%;
    display: inline-block;
    text-transform: uppercase;
    background-color: blue;
    width: 10%;
    /* padding: 1px; */
}

.transition__container-animation{
    display: flex;
    flex-direction: column;
    max-height: 70px !important;
    overflow-y: hidden;
    display: inline-block;

}

.transition-container-title-transition{
    margin: 0;
    animation-name: transitionSmall;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    color: $main-color;
}

.transition-container-title-transition-one{
    background-color: #1BC67A;
}

.transition-container-title-transition-two{
    background-color: #049ED0;
}

.transition-container-title-transition-three{
    background-color: #666B49;
}

.transition-container-title-transition-four{
    background-color: #725BA2;
}

.transition__footer-text-around{
    border-radius: 50%;
    max-width: 20px;
    background-color: blue;
    padding: 2px;
    /* margin: 0 5px; */
}


@media screen and (min-width: 576px){
    .transition__explore{
        max-width: 160px;
    }
}

@media screen and (min-width: 768px){

    .transition__container{
        max-width: 80%;
        height: 600px;
        
    }

    .transition__container-title{
        font-size: 70px;
    }

    
    
    .transition-container-title-transition{
        animation-name: transitionbig;
        transform: translateY(-25%);
        font-size: 70px;
        padding: 1rem 0;
    }

}

@media screen and (min-width: 992px){
    .transition__container{
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
    }
}

@media(min-width: 1200px){
    .transition{
        width: 1200px;
        margin: 0 auto;
    }
}


@keyframes transitionSmall {
    0%{
        transform: translateY(0);
    }   

    25%{
        transform: translateY( -100%);
    }

    50%{
        transform: translateY(-200%);
    }

    75%{
        transform: translateY(-300%);
    }

    /* 100%{
        transform: translateY(-240px);
    } */
}

@keyframes transitionbig{

    0%{
        transform: translateY(0);
    }   

    25%{
        transform: translateY(-125%);
    }

    50%{
        transform: translateY(-225%);
    }

    75%{
        transform: translateY(-325%);
    }

}


</style>