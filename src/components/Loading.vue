<template>
  <br>
  <img src = "@/assets/logo.png">
  <section class="bouncer">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</template>

<script>
export default {
  name : 'Loading',
}
</script>

<style scoped>
img {
  width: 90px;
  opacity: .65;
}
.bouncer {
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  transform: translateY(-10px);
  width: 60px;
  height: 50px;
}
.bouncer div {
  width: 10px;
  height: 10px;
  background: #6d6d6d;
  border-radius: 50%;
  animation: bouncer 0.25s cubic-bezier(.19,.57,.3,.98) infinite alternate;
}
.bouncer div:nth-child(2) {
  animation-delay: 0.08s;
  opacity: 0.8;
}
.bouncer div:nth-child(3) {
  animation-delay: 0.16s;
  opacity: 0.6;
}
.bouncer div:nth-child(4) {
  animation-delay: 0.24s;
  opacity: 0.4;
}

@keyframes bouncer {
  from { transform: translateY(0) }
  to { transform: translateY(-30px) }
}
</style>