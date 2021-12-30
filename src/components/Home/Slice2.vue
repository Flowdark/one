<template>  
    
        <section 
            class="sixdates"
            
        >
            <div 
                class="sixdates__container"
            >

                <h2 
                    class="sixdates__container-content-title" 
                    
                >
                Potencia tu negocio con un software que impulsa tu presente y futuro
                </h2>

                <div class="sixdates__container-content">

                    <figure class="sixdates__leafone-figure">
                        <img 
                            class="sixdates__leafone-img" 
                            src="https://images.prismic.io/beweio/12cb2770-2c6b-4aff-a928-fbf2a4e075a7_hoja-1.png?auto=compress,format" title="leafone" 
                        />
                    </figure>

                    <figure class="sixdates__leaftwo-figure">
                        <img 
                            class="sixdates__leaftwo-img" 
                            src="https://images.prismic.io/beweio/49590b3a-2e43-4bc0-b4da-ac622d691d03_hoja.png?auto=compress,format" title="leaftwo" 
                        />
                    </figure>

                    <figure class="sixdates__birdone-figure">
                        <img 
                            class="sixdates__birdone-img" 
                            src="https://images.prismic.io/beweio/073ebef0-c973-4ee0-b93e-4e6bc6f07821_colibri+1.png?auto=compress,format" title="birdone" 
                        />
                    </figure>

                    <figure class="sixdates__birdtwo-figure">
                        <img 
                            class="sixdates__birdtwo-img" 
                            src="https://images.prismic.io/beweio/f6792be6-a5df-474c-b536-941d855db764_colibri.png?auto=compress,format" title="birdtwo" 
                        />
                    </figure>

                    

                    <div class="six-dates__container-grid">
                        <article class="sixdates__container-card">
                            <h2 
                                class="sixdates__container-card-title" 
                                
                            >
                            Presencia en más de
                            </h2>

                            <hr class="sixdate__container-card-line">
                            <p 
                                class="sixdates__container-card-price" 
                                
                            >
                            20<span class="sixdates__container-card-price-text">países</span> 
                            </p>
                        </article>

                        <article class="sixdates__container-card">
                            <h2 
                                class="sixdates__container-card-title" 
                                
                            >
                            Confían en nosotros más de
                            </h2>
                            <hr class="sixdate__container-card-line">
                            <p 
                                class="sixdates__container-card-price"
                                
                            >
                            3.000<span class="sixdates__container-card-price-text">clientes</span> 
                            </p>
                        </article>

                        <article class="sixdates__container-card">
                            <h2 
                                class="sixdates__container-card-title" 
                                
                            >
                            Satisfacción de nuestros clientes
                            </h2>

                            <hr class="sixdate__container-card-line">
                            <p 
                                class="sixdates__container-card-price" 
                                
                            >
                            91 <span class="porcentaje">%</span>
                            </p>

                        </article>

                        <article class="sixdates__container-card">
                            <h2 
                                class="sixdates__container-card-title" 
                                
                            >
                            Crecimiento en facturación entre el
                            </h2>

                            <hr class="sixdate__container-card-line">
                            <p 
                                class="sixdates__container-card-price" 
                                
                            >
                            12 <span class="porcentaje">%</span> <span class="sixdates__container-card-price-text"> y </span>21<span class="porcentaje">%</span>
                            </p>
                        </article>

                        <article class="sixdates__container-card">
                            <h2 
                                class="sixdates__container-card-title" 
                                
                            >
                            Aumento en el número de reservas online del
                            </h2>

                            <hr class="sixdate__container-card-line">
                            <p 
                                class="sixdates__container-card-price" 
                            
                            >
                            43<span class="porcentaje">%</span>
                            </p>
                        </article>

                        <article class="sixdates__container-card">
                            <h2 
                                class="sixdates__container-card-title" 
                                
                            >
                            Incremento en la retención de usuarios del
                            </h2>

                            <hr class="sixdate__container-card-line">
                            <p 
                                class="sixdates__container-card-price" 
                            
                            >
                            16<span class="porcentaje">%</span>
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    
</template>

<script>
export default {
    name: 'Sixdates',
    props:['sixdates'],
    data(){
        return{
            IntersectionObserver: {},
            window: {},
            document: {},
            element: null,
        }
    },
    mounted(){
        this.IntersectionObserver = IntersectionObserver;
        this.window = window;
        this.document = document;
        this.element = document.querySelector('.sixdates');
        this.implementIntersectionObserver();
        console.log({ sixdates: this.sixdates });
    },
    updated(){
        this.implementIntersectionObserver();
    },
    methods: {
        implementIntersectionObserver(){

            const intersectionObserverOptions = {
                // rootMargin: "-250px",
                threshold: 0.4
            }
            
            const cbIntersectionObserver = (entries) => {
                console.log({ entries });

                entries.forEach( entry => {
                    if(entry.isIntersecting){
                        
                        console.log('me estoy viendo');
                        const $element = document.querySelector('.sixdates__container-content');
                        $element.classList.add( 'visible' );
                        document.querySelector('.six-dates__container-grid').classList.add('translatenull');
                    }else{
                        const $element = document.querySelector('.sixdates__container-content');
                        $element.classList.remove( 'visible' );
                        document.querySelector('.six-dates__container-grid').classList.remove('translatenull');
                    }


                });

            }

            const observer = new IntersectionObserver( cbIntersectionObserver, intersectionObserverOptions );

            observer.observe( this.element );
        }
    }
}

</script>

<style scoped>



figure{
    margin:0;
}

svg{
    max-width: 100px;
}
.sixdates{
    padding: 7rem 0;
    position:relative; 
}


.sixdates__leafone-figure{
    position:absolute;
    bottom: 15%;
    left:0;
}

.sixdates__leafone-img{
    max-width: 60%;
}

.sixdates__leaftwo-figure{
    position: absolute;
    top: 4%;
    right: 30px;
    max-width: 10%;
}

.sixdates__leaftwo-img{
    max-width: 60%;
}

.sixdates__birdone-figure{
    position:absolute;
    top:3%;
    left:10px;
    max-width: 50%;
}

.sixdates__birdone-img{
    max-width: 50%;
}

.sixdates__birdtwo-figure{
    max-width: 20%;
    position: absolute;
    bottom: 5%;
    right: 5%;
}

.sixdates__birdtwo-img{
    max-width: 100%;
}

.sixdates__container-content-title{
    font-size: 2.5rem;
    font-weight:600;
    text-align: center;
    margin-bottom: 4rem;
    color: #000000;
    font-family: 'VisbyCF-Bold' !important;
}

.sixdates__container{
    max-width: 1200px;
    margin:0 auto;

}

.sixdates__container-content{
    opacity:0;
    pointer-events: none;
    transition: all 1s ease-in-out;
}



.six-dates__container-grid{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    transform: translateY(200px);
}

.visible{
    opacity:1;
    pointer-events: auto ;
}

.translatenull{
    transform:translate(0);
}

.sixdates__container-card{
    text-align: center;
    margin-bottom: 3rem;
}

.sixdates__container-card-title{
    font-size:14px;
    font-weight: 500;
    color: #000000;
    font-family: 'RNSSanz-Medium' !important;
}

.sixdate__container-card-line{
    background-color: #000000;
    width: 80%;
    height: 1px;
    border: none;
    
}

.sixdates__container-card-price{
    font-size: 40px;
    font-weight: 600;
    color: #000000;
    margin: 0;
    font-family: 'VisbyCF-ExtraBold' !important;
}

.porcentaje{
    font-family: 'VisbyCF-DemiBold' !important;
}

.sixdates__container-card-price-text{
    font-size: 20px;
    font-weight: 600;
}

/* .sixdates__container-card-price /deep/ p strong{
    font-size:30px;
    font-weight: 700;
    margin: 0 5px;

} */


@media screen and (min-width: 576px){

    
}


@media screen and (min-width: 768px){

    .six-dates__container-grid{
        grid-template-columns: repeat(3, 1fr);
        max-width: 80%;
        margin: auto;
        height: 500px;
    }

    .sixdates__container-content-title{
            font-size: 30px;
    margin-bottom: 6rem;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 60px;
    }

    .sixdates__birdone-figure{
        top: 170px;
        left: 2rem;
    }

    .sixdates__leafone-figure{
        bottom: 300px;
        left: 3rem;
    }

    .sixdates__leaftwo-figure{
        top:130px;
        right: 12rem;
    }

    .sixdates__birdtwo-figure{
        max-width: 15% ;
        bottom: 330px;
        right: 1rem;
    }

}


@media screen and (min-width: 992px){
    .six-dates__container-grid{
        max-width: 60%;
    }

    .sixdates__birdone-figure{
        left: 15%;
    }

    .sixdates__leafone-figure{
        left: 18%;
    }

    .sixdates__leaftwo-figure{
        right: 23%;
    }

    .sixdates__birdtwo-figure{
        max-width: 10% ;
        right: 18%;
    }

}

@media screen and (min-width: 1400px){
    .sixdates__birdone-figure{
        left: 21%;
    }

    .sixdates__leafone-figure{
        left: 23%;
    }

    .sixdates__leaftwo-figure{
        right: 26%;
    }

    .sixdates__birdtwo-figure{
        max-width: 10% ;
        right: 20%;
    }
}

@media screen and (min-width: 1700px){
    .sixdates__birdone-figure{
        left: 26%;
    }

    .sixdates__leafone-figure{
        left: 28%;
    }

    .sixdates__leaftwo-figure{
        right: 30%;
    }

    .sixdates__birdtwo-figure{
        max-width: 10% ;
        right: 25%;
    }
}


</style>