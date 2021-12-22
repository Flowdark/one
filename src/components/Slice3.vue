<template>
    <div class="container--full">
        <div class="container">
            <div class="container__left">
                <div class="container__left__circle">01</div>
                <h2 class="container__left__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p class="container__left__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, asperiores sint temporibus fugit, libero earum blanditiis quasi perspiciatis qui tenetur sed at sunt veritatis. Quam quidem inventore esse ducimus eligendi ut aperiam optio voluptas corrupti!</p>
            </div>
            <div class="container__right">
                <img src="https://i.imgur.com/SlxhM49.png" alt="Image" loading="lazy" />
            </div>
        </div>
    </div>
</template>

<style scoped>

img{
    width: 100%;
}

.container--full{
    width: 100%;
    margin: 100px 0;
}

.container{
    width: 100%;
}

.container__left{}

.container__left__circle{
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



.container__left__title{
    font-size: 34px;
}

.container__left__text{
    font-size: 20px;
    line-height: 1.8;
}

@media(min-width: 992px){
    .container{
        align-items: center;
        display: flex;
    }

    .container__left{
        flex-basis: 50%;
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