<template>
  <div class="container-fluid px-0">
    <div class="start-learning">
      <div class="row-wrapper content-div">
            <div class="row">
                <div class="offset-xl-2 col-xl-8 offset-md-1 col-md-10">
                  <div v-if="flag===0">
                    <add-material-content ></add-material-content>
                  
                  </div>
                  <div v-if="flag===1">
                    <WhereDoIFindTheCode></WhereDoIFindTheCode>
                  
                  </div>
                </div>
            </div>
      </div>
  </div>
</div>
</template>


<script setup>


const flag=useState('navigation-State',() => 0);

definePageMeta({
  layout:'start-learning'
})

</script>
