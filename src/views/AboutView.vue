<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button icon="pi pi-check" label="Submit" />
  </div>
</template>

<style scoped>
.p-button {
  border: 5px solid red;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
