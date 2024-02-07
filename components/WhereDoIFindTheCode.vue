<template>
    <div class="offset-xl-2 col-xl-8 offset-md-1 col-md-10">
        <section class="product-activation-code">
            <i class="nemo-font nemo-book-help page-icon fa fa-file" aria-hidden="true"></i>
            <h2 class="heading2"> Where do i find the code </h2>
            <div class="content-div-body">
                <p>You can find a 16-digit activation code on the inner cover of your Book or get it from your teacher </p>
                <a href="/" class="btn btn-lg btn-icon btn-white-bg mb-5 mt-3" >
                    Activate later
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            </div>
        </section>
        <section class="product-activation-later">
            <h2 class="heading2"> <a @click="() => flag=0">OK, I found the activation code</a></h2>
        </section>
    </div>
</template>

<script setup>
const flag=useState('navigation-State');
</script>

<style lang="scss" scoped>

 .content-div-body{
     margin : 0px 20px;
    @include media-breakpoint-up(sm){
        width : 70%;
        margin: 0 auto;
     }

     @include media-breakpoint-up(lg){
        width : 50%;
     }
 }

 .heading2{
     margin: 15px 0 30px 0;
 }

 .product-activation-code .page-icon{
     margin : 0 0 24px; 
     @include media-breakpoint-up(lg){
         margin : 40px 0;
     }
}

</style>