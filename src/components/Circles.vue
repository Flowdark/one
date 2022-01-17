<template>

    <section class="bonus" id="images">
        <div class="bonus__content">

            <div class="bonus__content-text">

                <div class="bonus__content-image">
                    <img src="https://i.imgur.com/mCg28GJ.png" alt="Buho">
                </div>

                <h2 class="bonus_content-text-title" > 
                    ¡Tendrás acceso a un espacio exclusivo para que no pare de aprender!
                </h2>

                <div class="bonus__content-text-contenttext">


                    <div class="bonus__content-text-contentext-text">
                        <p class="bonus__content-text-contentext-text-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo pariatur ratione delectus adipisci dicta ab accusantium ipsum illo! Expedita perferendis assumenda nostrum voluptas at placeat beatae temporibus animi maiores?
                        </p>
                    </div>

                </div>

            </div>

            <div class="bonus__content-banner">
                <figure class="figure figure1" id="figure1">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/qmTJdh2.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure2" id="figure2">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/eECTdJ6.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure3" id="figure3">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/6xSe95O.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure4" id="figure4">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/9GYxePo.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure5" id="figure5">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/NvuUYdL.png" alt="Discord Bewe Tv">
                </figure>
                <figure class="figure figure6" id="figure6">
                    <img class="bonus__content-banner-img" src="https://i.imgur.com/ok0ahHR.png" alt="Discord Bewe Tv">
                </figure>
            </div>

        </div>
    </section>    
</template>

<script>
export default {
    data(){
        return{
            imageOne: false,
            imageTwo: false,
            imageThree: false,
            imageFour: false,
            imageFive: false,
            imageSix: false,
        }
    },
    mounted(){
        // const imagesContainer = document.getElementById("images");
        // const imagesAnimation = new IntersectionObserver( (entries) => {
        //     if(entries[0].isIntersecting){
        //         imagesContainer.classList.add("fade-in");
        //     }

        //     imagesContainer.addEventListener("wheel", (evt) => {
        //         evt.preventDefault();
                
        //         if(evt.x > 500){
        //             document.getElementById("figure1").style.display = "block";
        //         }else{
        //             document.getElementById("figure1").style.display = "none";
        //         }

        //         if(evt.x > 550){
        //             document.getElementById("figure2").style.display = "block";
        //         }else{
        //             document.getElementById("figure2").style.display = "none";
        //         }

        //         if(evt.x > 600){
        //             document.getElementById("figure3").style.display = "block";
        //         }else{
        //             document.getElementById("figure3").style.display = "none";
        //         }

        //         if(evt.x > 650){
        //             document.getElementById("figure4").style.display = "block";
        //         }else{
        //             document.getElementById("figure4").style.display = "none";
        //         }

        //         if(evt.x > 700){
        //             document.getElementById("figure5").style.display = "block";
        //         }else{
        //             document.getElementById("figure5").style.display = "none";
        //         }

        //         if(evt.x > 750){
        //             document.getElementById("figure6").style.display = "block";
        //         }else{
        //             document.getElementById("figure6").style.display = "block";
        //         }

        //         console.log(evt);

        //     });
            
        // } );

        // imagesAnimation.observe(imagesContainer);

        const imageOne = document.getElementById("figure1");
        const imageTwo = document.getElementById("figure2");
        const imageThree = document.getElementById("figure3");
        const imageFour = document.getElementById("figure4");
        const imageFive = document.getElementById("figure5");
        const imageSix = document.getElementById("figure6");

        const imageOneInter = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !this.imageOne){
                entries[0].target.classList.add("figure--animation")
                this.imageOne = true;
            }
        });
        const imageTwoInter = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !this.imageTwo){
                entries[0].target.classList.add("figure--animation")
                this.imageTwo = true;
            }
        });
        const imageThreeInter = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !this.imageThree){
                entries[0].target.classList.add("figure--animation")
                this.imageThree = true;
            }
        });
        const imageFourInter = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !this.imageFour){
                entries[0].target.classList.add("figure--animation")
                this.imageFour = true;
            }
        });
        const imageFiveInter = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !this.imageFive){
                entries[0].target.classList.add("figure--animation")
                this.imageFive = true;
            }
        });
        const imageSixInter = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && !this.imageSix){
                entries[0].target.classList.add("figure--animation")
                this.imageSix = true;
            }
        });

        imageOneInter.observe(imageOne)
        imageTwoInter.observe(imageTwo)
        imageThreeInter.observe(imageThree)
        imageFourInter.observe(imageFour)
        imageFiveInter.observe(imageFive)
        imageSixInter.observe(imageSix)
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
        position: relative;
        opacity: 0;
    }
.figure--animation{
    opacity: 1;
    transition: all .5s;
}

    .figure1{
        top: unset;
        left: unset;
    }

    .figure2{
        top: unset;
        right: unset;
    }

    .figure3{
        top: unset;
        left: unset;
    }

    .figure4{
        top: unset;
        left: unset;
    }

    .figure5{
        top: unset;
        right: unset;
    }

    .figure6{
        top: unset;
        left: unset;
    }


@media(min-width: 992px){
    
    .figure{
        position: absolute;
        width: 200px;
        display: block;
    }
    .figure1{
        top: 0px;
        left: -133px;
    }
    
    .figure2{
        top: -117px;
        right: 5px;
    }
    
    .figure3{
        top: -130px;
        left: -6px;
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
}


$primary-color: #FFF3EB;

h2{
    margin: 0;
}

.bonus{
    width:100%;
    
    display: flex;
    align-items: center;
    padding:  100px 10px;

    /* background-image: url('https://i.imgur.com/0MkxB2R.png'); */
    background-image: url('https://i.imgur.com/9c2Kw2L.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.bonus__content{
    max-width: 100%;
    margin: 0 auto;
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

.bonus__content-image{
    width: 50%;
}



.bonus_content-text-title{
    font-size: 24px;
    font-weight: 700;
    font-family: 'RNSSanz-Bold', 'Poppins' !important;
    color: #FFFFFF;
    margin-bottom: 30px;
}



.bonus__content-text-contentext-text{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    margin-bottom: 30px;
    font-family: 'RNSSanz-SemiBold', 'Poppins' !important;
    color: #FFFFFF;
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


    .bonus__content-banner-img{
        max-height: auto;
    }

    .bonus_content-text-title{
        font-size: 34px;
    }

    .bonus__content-text-contentext-text{
        font-size: 22px;
    }

}


@media screen and (min-width: 1200px) {
    
    .bonus{
        
    }

    .bonus__content{
        width: 1200px;
        flex-direction: row-reverse;
    }

}

@media screen and (min-width: 1400px) {
    
    .bonus__content{
        width: 1400px;
    }

}

</style>