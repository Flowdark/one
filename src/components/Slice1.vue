<template>
    <div class="transition--background">
        <section class="transition">
            <section class="transition__container">
                <h2 class="transition__container-title">
                    Te ayudamos a 
                    <span class="transition__container-animation" style="color: red">
                        <p class="transition-container-title-transition transition-container-title-transition-one"> gestionar </p>
                        <p class="transition-container-title-transition transition-container-title-transition-two"> distracted </p>
                        <p class="transition-container-title-transition transition-container-title-transition-three"> distracted </p>
                        <p class="transition-container-title-transition transition-container-title-transition-four"> distracted </p>
                    </span>
                    tus clientes con tecnologia y marketing.
                </h2>
    
                <p class="transition__text">
                    Incrementa tus ganancias y digitaliza tus procesos con un equipo especializado en el crecimiento de tu negocio.
                </p>
    
                <p class="transition__footer-text">
                    Preparate para activar el turbo de tu estrategia en los próximos 12 meses.
                </p>
            </section>
        </section>
    </div>
</template>
 
<script>
export default {
    name: 'Transition',
}
</script>
 
<style scoped>
 
/* $orange-color: #f8D4BC;
$white: #ffffff ; */

.transition--background{

    /* background: linear-gradient(180deg, rgba(8,117,157,1) 0%, rgba(14,101,141,1) 30%, rgba(32,60,102,1) 50%, rgba(36,49,92,1) 65%, rgba(32,30,66,1) 90%, rgba(16,22,44,1) 100%);  */
    background-image: url('https://i.imgur.com/fy0c5PR.png');
    background-repeat: no-repeat;
    background-size: cover;

}
 
.transition{
    min-height: 100vh;
    /* background: linear-gradient(180deg, $white, $orange-color); */
    /* background-color: #F7D2B3; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    /* background-image: url('https://i.imgur.com/pPZr3Jz.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
    background-size: 60%; */

    padding: 40px 0;
}
 
.transition__container{
    max-width: 100%;
    margin: auto;
    
}
 
.transition__container-title{
    text-align: left;
    font-size: 24px;
    line-height: 1.4;
    font-family: 'VisbyCF-Bold';
    color: #ffffff;
    padding: 0px 10px;
    margin: 0;
}
 
.transition__text{
    font-family: 'RNSSanz-Medium' !important;
    font-size: 19px;
    padding: 10px;
    color: #ffffff;
}
 
.transition__footer-text{
    font-size: 20px;
    /* font-weight: 700; */
    font-family: 'RNSSanz-Bold' !important;
    padding: 10px;
    color: #ffffff;
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
    color: #1B1B3A;
}
 
.transition-container-title-transition-one{
    background-color: #00EB73;
}
 
.transition-container-title-transition-two{
    background-color: #00E9FF;
}
 
.transition-container-title-transition-three{
    background-color: #FDBD67;
}
 
.transition-container-title-transition-four{
    background-color: #FF85CC;
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

    .transition__container-title{
        text-align: left;
        font-size: 35px;
        line-height: 1.4;
        font-family: 'VisbyCF-Bold';
        color: #ffffff;
        padding: 0px 10px;
    }
    
    .transition__text{
        font-family: 'RNSSanz-Medium' !important;
        font-size: 25px;
        padding: 10px;
        color: #ffffff;
    }
    
    .transition__footer-text{
        font-size: 25px;
        /* font-weight: 700; */
        font-family: 'RNSSanz-Bold' !important;
        padding: 10px;
        color: #ffffff;
    }
}
 
@media screen and (min-width: 768px){
 
    .transition__container{
        max-width: 80%;
        height: 600px;
 
    }
 
    .transition__container-title{
        font-size: 50px;
    }
 
 
 
    .transition-container-title-transition{
        animation-name: transitionbig;
        transform: translateY(-25%);
        padding: 1rem 0;
    }

    .transition{
        background-size: 40%;
    }
 
}
 
@media screen and (min-width: 992px){
    .transition__container{
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
    }

    .transition{
        background-size: 40%;
    }
}

@media (min-width: 1200px){
    .transition__container-title{
        font-size: 70px;
    }

    .transition__text{
        font-size: 32px;
    }
    
    .transition__footer-text{
        font-size: 32px;
    }

    .transition__container{
        width: 1200px;
    }

    .transition{
        background-size: 30%;
    }
    
}

@media (min-width: 1400px){
    .transition__container-title{
        font-size: 80px;
        width: 75%;
    }

    .transition__text{
        font-size: 32px;
        width: 60%;
    }
    
    .transition__footer-text{
        font-size: 32px;
        width: 60%;
    }

    .transition__container{
        width: 1400px;
    }

    .transition{
        background-size: 30%;
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