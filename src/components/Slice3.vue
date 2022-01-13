<template>
<!-- https://i.imgur.com/SlxhM49.png -->
    <div class="element--background">
        <main>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">
                            <img src="https://i.imgur.com/XL7TWIX.png" alt="">
                        </div>
                        <h2 class="element__left__title">Consultoria de marca y acompañamiento de un experto en marketing.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/mkF8fUw.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <!-- <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">
                            <img src="https://i.imgur.com/XL7TWIX.png" alt="">
                        </div>
                        <h2 class="element__left__title">Consultoria de marca y acompañamiento de un experto en marketing.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/mkF8fUw.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">
                            <img src="https://i.imgur.com/XL7TWIX.png" alt="">
                        </div>
                        <h2 class="element__left__title">Consultoria de marca y acompañamiento de un experto en marketing.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/mkF8fUw.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">
                            <img src="https://i.imgur.com/XL7TWIX.png" alt="">
                        </div>
                        <h2 class="element__left__title">Consultoria de marca y acompañamiento de un experto en marketing.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/mkF8fUw.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">
                            <img src="https://i.imgur.com/XL7TWIX.png" alt="">
                        </div>
                        <h2 class="element__left__title">Consultoria de marca y acompañamiento de un experto en marketing.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/mkF8fUw.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">
                            <img src="https://i.imgur.com/XL7TWIX.png" alt="">
                        </div>
                        <h2 class="element__left__title">Consultoria de marca y acompañamiento de un experto en marketing.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/mkF8fUw.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section> -->
        </main>
    </div>
</template>

<script>
export default {
    name: 'Slice3',
    mounted(){
        const scrollContainer = document.querySelector("main");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    }
}
</script>

<style scoped>

.element--background{
    /* background: linear-gradient(180deg, rgba(4,126,166,1) 0%, rgba(13,105,145,1) 30%, rgba(26,74,116,1) 50%, rgba(39,40,85,1) 70%, rgba(17,22,44,1) 100%); */
    padding: 60px 0;
    min-height: 100vh;
}

main {
    overflow-x: hidden;
    display: flex;
    padding: 100px 0;
    background-image: url(https://i.imgur.com/1ql4kCq.png);
    background-repeat: no-repeat;
    background-size: contain;
    /* background-position: top center; */
    background-position-y: top;
}

h1 {
  margin: 0;
  padding: 0;
}

section {
  /* min-width: 70vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* margin: 0 15vw; */
  padding: 10px;
}

.element{
    width: 100%;
}
.element__left{}
/* .element__left__circle{
    align-items: center;
    background-color: black;
    border-radius: 100%;
    color: white;
    display: flex;
    font-size: 60px;
    height: 100px;
    justify-content: center;
    width: 100px;
    position: relative;
    z-index: 100;
    font-family: 'VisbyCF-Bold' !important;
} */
.element__left__circle{
    width: 80px;
}
.element__left__title{
    font-size: 24px;
    font-family: 'VisbyCF-Bold' !important;
    color: #fff;
    line-height: 1.4;
}
.element__left__text{
    font-size: 16px;
    line-height: 1.4;
    font-family: 'RNSSanz-Medium' !important;
    color: #fff;
}

@media(min-width: 992px){
    .element{
        align-items: center;
        display: flex;
        margin: 0 auto;
    }
    .element__left{
        flex-basis: 50%;
    }
    .element__right{
        flex-basis: 50%;
    }
}

</style>