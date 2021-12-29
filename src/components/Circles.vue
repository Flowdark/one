<template>

    <section class="bonus" id="images">
        <div class="bonus__content">

            <div class="bonus__content-banner">
                <figure class="figure figure1" id="figure1">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/w37qqMl.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure2" id="figure2">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/VxCEu2E.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure3" id="figure3">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/8zUf8gH.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure4" id="figure4">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/FlDgpyn.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure5" id="figure5">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/fxWv4wp.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure6" id="figure6">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/c2iJRMu.png" alt="Discord Bewe Tv">
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
    mounted(){
        const imagesContainer = document.getElementById("images");
        const imagesAnimation = new IntersectionObserver( (entries) => {
            if(entries[0].isIntersecting){
                imagesContainer.classList.add("fade-in");
            }

            imagesContainer.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                
                if(evt.x > 500){
                    document.getElementById("figure1").style.display = "block";
                }else{
                    document.getElementById("figure1").style.display = "none";
                }

                if(evt.x > 550){
                    document.getElementById("figure2").style.display = "block";
                }else{
                    document.getElementById("figure2").style.display = "none";
                }

                if(evt.x > 600){
                    document.getElementById("figure3").style.display = "block";
                }else{
                    document.getElementById("figure3").style.display = "none";
                }

                if(evt.x > 650){
                    document.getElementById("figure4").style.display = "block";
                }else{
                    document.getElementById("figure4").style.display = "none";
                }

                if(evt.x > 700){
                    document.getElementById("figure5").style.display = "block";
                }else{
                    document.getElementById("figure5").style.display = "none";
                }

                if(evt.x > 750){
                    document.getElementById("figure6").style.display = "block";
                }else{
                    document.getElementById("figure6").style.display = "block";
                }

                console.log(evt);

            });
            
        } );

        imagesAnimation.observe(imagesContainer);
    }
}
</script>

<style lang="scss" scoped>

.fade-in {
	-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-12-28 14:12:50
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


img{
    width: 100%;
}

.bonus__content-banner{
    position: relative;
}

.figure{
    position: absolute;
    width: 200px;
    display: none;
}

.figure1{
    top: -200px;
    left: -133px;
}

.figure2{
    top: -117px;
    right: 70px;
}

.figure3{
    top: -117px;
    left: 70px;
}

.figure4{
    top: 100px;
    left: 50px;
}

.figure5{
    top: 100px;
    right: 50px;
}

.figure6{
    top: 200px;
    left: -133px;
}

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
    font-family: 'RNSSanz-Bold', 'Poppins';
    width: 70%;
    color: #000000;
    margin-bottom: 30px;
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
    font-family: 'RNSSanz-SemiBold', 'Poppins';
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