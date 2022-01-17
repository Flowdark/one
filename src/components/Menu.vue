<template>
    <div class="animation">
        <div class="aniamtion__image">
            <img :src="image" alt="Transition image" id="animation-scale">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            image: 'https://i.imgur.com/GzLFepv.png',
        }
    },
    mounted(){
        // const element = document.getElementById("animation-scale");
        // setTimeout( () => {
        //     this.image = 'https://i.imgur.com/Tv6P7zw.png'
                   
        //     setTimeout( () => {
        //         this.image = 'https://i.imgur.com/TyP7SUh.png'
                    
                      
        //         setTimeout( () => {
        //             this.image = 'https://i.imgur.com/lqBA2PX.png'
                        
                             
        //             setTimeout( () => {
        //                 this.image = 'https://i.imgur.com/H9hvMB9.png'
                            
                                           
        //                 setTimeout( () => {
        //                     this.image = 'https://i.imgur.com/ck3KUAY.png'
                                
                                                      
        //                     setTimeout( () => {
        //                         this.image = 'https://i.imgur.com/9W7uc09.png'
                                    
                                                          
        //                         setTimeout(() => {                   
        //                             element.classList.add("animation__zoom")
        //                             setTimeout(() => {
        //                                 element.parentElement.parentElement.remove();
        //                             }, 1000);
        //                         }, 1000);
        //                     }, 1000 );
        //                 }, 1000 );
        //             }, 1000 );
        //         }, 1000 );
        //     }, 1000 );
        // }, 1000 );
    }
}
</script>
<style scoped>

@keyframes fade-in{0%{opacity:0}100%{opacity:1}}

.fade-in{animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1.000) both}

    .animation{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url('https://i.imgur.com/wbsjaHl.jpg');;
        z-index: 1000;
    }

    .aniamtion__image{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .animation__zoom{
        transform: scale(6);
        opacity: 0;
        transition: all 1s;
    }
