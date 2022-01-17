<template>
    <div class="container--background">
        <div 
            class="container my-4 "
        >
            <div 
                class="collapses" 
                id="collapses-videos"
            >
    
                <div 
                    class="collapses__content"
                >

                    <div 
                        class="left"
                    >
                        <!-- <div class="left__box">
                            <h2 class="box__subtitle mb-2" v-html="mainTitle"/>
                            <p class="box__text mb-2" v-html="mainText"/>
                        </div> -->
                        <div 
                            class="left__items" 
                            v-for="(collapsesde, index) in collapsesdev && collapsesdev.repeat" 
                            :key="index"
                        >

                            <div 
                                :class="index === 0 ? `items p-3 bg-darkLight` : `items p-3 `"
                                :id="index"
                                @click="clickItem($event, collapsesde)"
                            >
                                <div 
                                    class="items__title"
                                >

                                    <span 
                                        class="items__icon"
                                    >

                                        <img 
                                            :src="collapsesde.icon" 
                                            :alt="collapsesde.title" 
                                            loading="lazy" 
                                        />

                                    </span> 
                                    
                                    <p 
                                        v-html="collapsesde.title"
                                    />

                                    <span 
                                        class="items__arrow"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" :class="`h-6 w-6 ${ index === 0 ? `items__arrow--animation` : ''  }`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>

                                <div 
                                    class="items__content"
                                >
                                    <p 
                                        :class="index === 0 
                                            ? `content__text content__text--block` 
                                            : `content__text content__text`" v-html="collapsesde.text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right__content">
                            <video 
                                ref="video" 
                                height="auto" 
                                width="100%" 
                                autoplay 
                                playsinline 
                                muted 
                                loop  
                            >
                                <source ref="source"  type="video/webm" />
                                <source ref="source2"  type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'Collapses',
    data(){
        return{
            refElement: '0',
            currentPoster: '',
            currentVideoWemb: '',
            currentVideoMp4: '',
 
            mainTitle: '',
            mainText: '',

            collapsesdev: {
                repeat: [
                    { icon: 'https://images.prismic.io/beweio/0df2db3f-de45-4fc8-a02c-7a24ac7a27aa_Bewe+essential.svg?auto=compress,format', title: 'Automatiza tareas repetitivas y gana tiempo ', text: 'Gestiona las tareas operativas de tu negocio más fácil y controla desde cualquier lugar lo que pasa con tus reservas, pagos, inventarios y cifras más importantes.', maintitle: 'Te ayudamos a mejorar los resultados de tu negocio', mainText: 'Con nuestras funcionalidades puedes descubrir necesidades, darles solución y ser más competitivo.', videowebm: 'https://beweio.cdn.prismic.io/beweio/73a1cbff-24a9-4fe0-bb87-e808a0b2a006_Acciones+automaticas_ES_Estetica.webm', videomp4: 'https://beweio.cdn.prismic.io/beweio/5fe11147-0a66-4c2d-a450-bc718b808766_Acciones+automaticas_ES_Estetica.mp4', poster: 'https://images.prismic.io/beweio/5feb4078-75e1-44a5-bcd8-36192fa42b32_Acciones+automaticas_ES_Estetica.png?auto=compress,format' },
                    { icon: 'https://images.prismic.io/beweio/0df2db3f-de45-4fc8-a02c-7a24ac7a27aa_Bewe+essential.svg?auto=compress,format', title: 'Automatiza tareas repetitivas y gana tiempo ', text: 'Gestiona las tareas operativas de tu negocio más fácil y controla desde cualquier lugar lo que pasa con tus reservas, pagos, inventarios y cifras más importantes.', maintitle: 'Te ayudamos a mejorar los resultados de tu negocio', mainText: 'Con nuestras funcionalidades puedes descubrir necesidades, darles solución y ser más competitivo.', videowebm: 'https://beweio.cdn.prismic.io/beweio/73a1cbff-24a9-4fe0-bb87-e808a0b2a006_Acciones+automaticas_ES_Estetica.webm', videomp4: 'https://beweio.cdn.prismic.io/beweio/5fe11147-0a66-4c2d-a450-bc718b808766_Acciones+automaticas_ES_Estetica.mp4', poster: 'https://images.prismic.io/beweio/5feb4078-75e1-44a5-bcd8-36192fa42b32_Acciones+automaticas_ES_Estetica.png?auto=compress,format' },
                    { icon: 'https://images.prismic.io/beweio/0df2db3f-de45-4fc8-a02c-7a24ac7a27aa_Bewe+essential.svg?auto=compress,format', title: 'Automatiza tareas repetitivas y gana tiempo ', text: 'Gestiona las tareas operativas de tu negocio más fácil y controla desde cualquier lugar lo que pasa con tus reservas, pagos, inventarios y cifras más importantes.', maintitle: 'Te ayudamos a mejorar los resultados de tu negocio', mainText: 'Con nuestras funcionalidades puedes descubrir necesidades, darles solución y ser más competitivo.', videowebm: 'https://beweio.cdn.prismic.io/beweio/73a1cbff-24a9-4fe0-bb87-e808a0b2a006_Acciones+automaticas_ES_Estetica.webm', videomp4: 'https://beweio.cdn.prismic.io/beweio/5fe11147-0a66-4c2d-a450-bc718b808766_Acciones+automaticas_ES_Estetica.mp4', poster: 'https://images.prismic.io/beweio/5feb4078-75e1-44a5-bcd8-36192fa42b32_Acciones+automaticas_ES_Estetica.png?auto=compress,format' },
                    { icon: 'https://images.prismic.io/beweio/0df2db3f-de45-4fc8-a02c-7a24ac7a27aa_Bewe+essential.svg?auto=compress,format', title: 'Automatiza tareas repetitivas y gana tiempo ', text: 'Gestiona las tareas operativas de tu negocio más fácil y controla desde cualquier lugar lo que pasa con tus reservas, pagos, inventarios y cifras más importantes.', maintitle: 'Te ayudamos a mejorar los resultados de tu negocio', mainText: 'Con nuestras funcionalidades puedes descubrir necesidades, darles solución y ser más competitivo.', videowebm: 'https://beweio.cdn.prismic.io/beweio/73a1cbff-24a9-4fe0-bb87-e808a0b2a006_Acciones+automaticas_ES_Estetica.webm', videomp4: 'https://beweio.cdn.prismic.io/beweio/5fe11147-0a66-4c2d-a450-bc718b808766_Acciones+automaticas_ES_Estetica.mp4', poster: 'https://images.prismic.io/beweio/5feb4078-75e1-44a5-bcd8-36192fa42b32_Acciones+automaticas_ES_Estetica.png?auto=compress,format' },
                    { icon: 'https://images.prismic.io/beweio/0df2db3f-de45-4fc8-a02c-7a24ac7a27aa_Bewe+essential.svg?auto=compress,format', title: 'Automatiza tareas repetitivas y gana tiempo ', text: 'Gestiona las tareas operativas de tu negocio más fácil y controla desde cualquier lugar lo que pasa con tus reservas, pagos, inventarios y cifras más importantes.', maintitle: 'Te ayudamos a mejorar los resultados de tu negocio', mainText: 'Con nuestras funcionalidades puedes descubrir necesidades, darles solución y ser más competitivo.', videowebm: 'https://beweio.cdn.prismic.io/beweio/73a1cbff-24a9-4fe0-bb87-e808a0b2a006_Acciones+automaticas_ES_Estetica.webm', videomp4: 'https://beweio.cdn.prismic.io/beweio/5fe11147-0a66-4c2d-a450-bc718b808766_Acciones+automaticas_ES_Estetica.mp4', poster: 'https://images.prismic.io/beweio/5feb4078-75e1-44a5-bcd8-36192fa42b32_Acciones+automaticas_ES_Estetica.png?auto=compress,format' },
                ]
            }
        }
    },
    methods: {
        clickItem(e, collapse){
            const element = e.target;
 
            if(element.classList.contains('items__title') ){
 
                //Remove classes last ref
                this.removeClassesItem(element.parentElement.parentElement.parentElement, parseInt(this.refElement));

                if(this.refElement !== element.parentElement.id){
                    this.$refs.video.setAttribute("poster", collapse.poster);
                    this.$refs.source.setAttribute("src", collapse.videowebm);
                    this.$refs.source2.setAttribute("src", collapse.videomp4);
                    this.$refs.video.load();
                    this.loadNewVideo(collapse.poster, collapse.videowebm, collapse.videomp4);
                }
 
                this.refElement = element.parentElement.id;
 
                element.lastChild.children[0].classList.toggle('items__arrow--animation');
                element.parentElement.lastChild.firstChild.classList.toggle('content__text--block');
                element.parentElement.classList.toggle('bg-darkLight');
            }
        },
 
        removeClassesItem(pElement, lastRef){
            
            pElement.children[lastRef].children[0].classList.remove('bg-darkLight');
            pElement.children[lastRef].children[0].children[0].lastChild.children[0].classList.remove('items__arrow--animation');
            pElement.children[lastRef].children[0].children[1].lastChild.classList.remove('content__text--block'); 
                      
        },

        loadNewVideo(poster, webm, mp4){
            this.$refs.video.setAttribute("poster", poster);
            this.$refs.source.setAttribute("src", webm);
            this.$refs.source2.setAttribute("src", mp4);
            this.$refs.video.load();
        }
    },
    mounted(){
        this.mainTitle = this.collapsesdev.repeat[0].maintitle;
        this.mainText = this.collapsesdev.repeat[0].mainText;

        const observer = new IntersectionObserver( entry => {

            if(entry[0].isIntersecting && this.$refs.source.getAttribute("src") === null && this.$refs.source2.getAttribute("src") === null){
                this.loadNewVideo(this.collapsesdev.repeat[0].poster, this.collapsesdev.repeat[0].videowebm, this.collapsesdev.repeat[0].videomp4);
            }

        } );

        observer.observe(document.getElementById("collapses-videos"));
    }
}
</script>
 
<style lang="scss" scoped>
 
/* Color Page */
$mainBlue: #21a9af;
$mainDark: #00273b;
$mainWhite: #fff;
$mainLigth: #eee;
$mainDarkLigth: #f2f2f2;

.container--background{
    /* background: linear-gradient(180deg, rgba(21,24,49,1) 0%, rgba(35,32,70,1) 30%, rgba(26,72,114,1) 50%, rgba(5,122,162,1) 70%, rgba(4,126,166,1) 100%); */
    background-image: url('https://i.imgur.com/dYyq629.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.container{
    width: 100%;
    padding: 0 20px;
}

 
.collapses{
 
    position: relative;
 
    &__title{
        text-align: center;
    }
 
    &__content{
 
        .left{
 
            .box{
                &__subtitle{
                    margin-bottom: 50px !important;
                    text-align: center;
                    font-size: 25px;
                    font-weight: 700;
                }
 
                &__text{
                    margin-bottom: 30px !important;
                    text-align: left;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #808080;
                }
            }
 
            @media (min-width: 992px){
                .box__text{
                    padding-right: 40px;
                }
            }

            &__items{
                margin: 10px 0;
            }
 
            .items{
 
                width: 100%;
                min-height: 1rem;
                border-radius: .5rem;
                padding-right: 10px;
 
                cursor: pointer;
                transition: background-color .3s ease;
 
                &__title{
                    font-size: 16px;
 
                    display: flex;
                    align-items: center;
                    position: relative;
 
                    text-overflow: ellipsis;
                    color: #FFFFFF;
 
                    &::before{
                        content: '';
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        position: absolute;
                    }
 
                    p{
                        /* border-bottom: 1px dotted #181818; */
                        margin-left: 1rem;
                    }
                }
 
                &__icon img{
                    width: 40px;
                    margin-left: 10px;
                }
 
                &__arrow svg{
                    width: 20px;
                    margin-left: 10px;
                    stroke-width: 4px;
                    transition: all .3s ease;
                    transform: rotate(0deg);
                    stroke: #00E9FF;
                }
 
                .items__arrow--animation{
                    transition: all .3s ease;
                    transform: rotate(-180deg);
                }
 
                &__content{
 
                    .content__text{
                            /* font-size: 1.4rem; */
                        line-height: 1.6;
                        padding: 0rem 3rem 2rem;
                        display: none;
                        transition: all 0.5s ease;
                        color: #E2E2E5;
                        font-weight: 200;
                    }
 
                    .content__text--block{
                        display: block;
                    }
 
                }
 
                
 
            }
 
        }
 
    }
 
}
 
@media (min-width: 992px){
    .collapses{
        &__content{
            display: flex;
            justify-content: space-between;
            align-items: center;
 
            .left{
                flex-basis: 50%;
 
                .box{
                    &__subtitle{
                        text-align: left;
                    }
 
                    &__text{
                        text-align: left;
                    }
                }

                &__items{
                    width: 95%;
                    padding-right: 0px;
                }
            }
 
            .right{
                flex-basis: 50%;
 
                display: flex;
                justify-content: center;
                align-items: center;
 
 
            }
        }
    }           
}
/*  */

@media(min-width: 1200px){
    .container{
        width: 1200px;
        margin: 0 auto;
        padding: 100px 10px;
    }
}
 
.bg-darkLight{
    background-color: #151832;
 
    &:hover{
        background-color: #151832 !important;
    }
}


video{
    outline: none !important;
    border: none !important;
}
 
</style>