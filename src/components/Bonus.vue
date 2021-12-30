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
                    ¡Tendrás acceso a un espacio exclusivo para que no pare de aprender!
                </h2>

                <div class="bonus__content-text-contenttext">


                    <div class="bonus__content-text-contentext-text">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 bonus__content-text-contentext-text-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="bonus__content-text-contentext-text-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo pariatur ratione delectus adipisci dicta ab accusantium ipsum illo! Expedita perferendis assumenda nostrum voluptas at placeat beatae temporibus animi maiores?
                        </p>
                    </div>
                   

                   <div class="bonus__content-text-contentext-text">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 bonus__content-text-contentext-text-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="bonus__content-text-contentext-text-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo pariatur ratione delectus adipisci dicta ab accusantium ipsum illo! Expedita perferendis assumenda nostrum voluptas at placeat beatae temporibus animi maiores?
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
    max-width: 100vw;
    width:100%;
    height: 200vh;
    display: flex;
    align-items: center;
}

.bonus__content{
    max-width: 100%;
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
    
}



.bonus_content-text-title{
    font-size: 35px;
    font-weight: 700;
    width: 70%;
    color: #000000;
    margin-bottom: 30px;
    font-family: 'VisbyCF-Bold' !important;
}

.bonus__content-text-contenttext{
    margin: 16px 0 0 32px;
}

.bonus__content-text-contentext-text{
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin-bottom: 30px;
    font-family: 'RNSSanz-Medium' !important;
    color: black;
    width: 70%;
}

.bonus__content-text-contentext-text-svg{
    width: 20px;
    margin-top: 5px;
    stroke: #725BA2;
    stroke-width: 2px;
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

    .bonus__content{
        width: 1200px;
    }

}

@media screen and (min-width: 1400px) {
    
    .bonus__content{
        width: 1400px;
    }

}

</style>