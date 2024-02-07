<template>
  <nav class="custom-header navbar navbar-expand-lg p-0">
    <div class="container-fluid p-2 bg-transparent mx-3">
      <a class="navbar-brand text-white" href="javascript:void(0)">
        <slot/>
      </a>
    </div>
  </nav>
</template>



<style lang="css" scoped>
.custom-header {
  background-color: rgb(135, 35, 255);
}
</style>
