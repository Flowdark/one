<template>
    
    <div id="container__full" class="container__full">
        <h2 class="container__full__title">Presentamos Bewe One</h2>
        <img src="https://i.imgur.com/bzssuN2.png" alt="XD" loading="lazy" class="container__full__image"/>
        <div class="container__full__clip">
            <p class="container__full__clip__title">ONE</p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Slice2',
    data(){
        return{
            initialValue: 0,
            isIntersectElement: false
        }
    },
    mounted(){
        window.addEventListener('scroll', function () {
            const intersectContainer = new IntersectionObserver((entries) => {
                if(entries[0].intersectionRatio > 0.5311042070388794){
                    if(!this.isIntersectElement){
                        this.initialValue = window.scrollY;
                        this.isIntersectElement = true;
                    }
                    let value = (window.scrollY - this.initialValue) * 1.6;
                    document.querySelector('.container__full__clip').style.clipPath = " circle( "+ (value) +"px at center 30% )";
                    console.log(entries[0]);
                }
            });
            // document.querySelector('.text').style.left = 100 - value / 5 + '%';
            // document.querySelector('.innerText').style.left = 100 - value / 5 + '%';
            intersectContainer.observe(document.getElementById("container__full"), {rootMargin: "0px 0px 200px 0px"});
        })
    }
}
</script>

<style scoped>

    *{
        margin: 0;
        padding: 0;
    }

    .container__full{
        position: relative;
        
    }

    .container__full__image{
        max-width: 100%;
    }

    .container__full__clip{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(233,144,98,1);

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 90px;
        font-weight: 700;
        color: white;
    }

    .container__full__clip__title{
        position: absolute;
        top: 26%;
        left: 45%;
        bottom: 0;
        right: 0;
        font-family: 'Neon', 'Poppins';
    }

    .container__full__title{
        font-size: 30px;
        text-align: center;
        color: rgba(233,144,98,1);
        font-weight: 600;
    }

    h3{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, 50%);
    margin-top: -100px;
    color: #0e112e;
    font-size: 4em;
}

section{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0e112e;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: circle(0px at center center);
} 

.innerText{
    position: relative;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    white-space: nowrap;
    z-index: 1;
    font-size: 10vw;
    color: #fff;
    text-align: center;
    width: 100%;
}

.text{
    position: relative;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    white-space: nowrap;
    z-index: 1;
    font-size: 10vw;
    color: transparent;
    -webkit-text-stroke: 2px #0e112e;
    text-align: center;
    width: 100%;
}

.container{
    position: relative;
    margin-top: 200vh;
    background: #0e112e;
    padding: 100px;
    color: #fff;
}

.container h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
}


</style>