<template>
<!-- https://i.imgur.com/SlxhM49.png -->
    <div>
        <main>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">01</div>
                        <h2 class="element__left__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/SlxhM49.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">02</div>
                        <h2 class="element__left__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/SlxhM49.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">03</div>
                        <h2 class="element__left__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/SlxhM49.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
            <section>
                <div class="element">
                    <div class="element__left">
                        <div class="element__left__circle">04</div>
                        <h2 class="element__left__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p class="element__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
                    </div>
                    <div class="element__right">
                        <img src="https://i.imgur.com/SlxhM49.png" alt="Image" loading="lazy" />
                    </div>
                </div>
            </section>
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

main {
  overflow-x: hidden;
  display: flex;
}

h1 {
  margin: 0;
  padding: 0;
}

section {
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.element{
    width: 100%;
}
.element__left{}
.element__left__circle{
    align-items: center;
    background-color: black;
    border-radius: 100%;
    color: white;
    display: flex;
    font-size: 30px;
    height: 100px;
    justify-content: center;
    width: 100px;
    position: relative;
    z-index: 100;
}
.element__left__title{
    font-size: 34px;
}
.element__left__text{
    font-size: 20px;
    line-height: 1.8;
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