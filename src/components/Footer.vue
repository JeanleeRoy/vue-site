<template>
  <footer>
    <div class="footer-social">
      <p>Mantente en contacto</p>
      <div class="social-links">
        <a href="https://www.facebook.com/revistapiso11" target="_blank" >
          <img src="@/assets/social/facebook.png" alt="">
        </a>
        <a href="https://www.instagram.com/revistapiso11/" target="_blank" >
          <img src="@/assets/social/instagram.png" alt="">
        </a>
        <a href="https://www.linkedin.com/company/piso11/" target="_blank" >
          <img src="@/assets/social/linkedin.png" alt="">
        </a>
        <a href="mailto:revista@utec.edu.pe" target="_blank" >
          <img class="correo" src="@/assets/social/gmail.png" alt="">
        </a>
      </div>
    </div>
    <div class="footer-info">
      <p>&copy; 2020 Piso 11. Todos los derechos reservados</p>
      <a href="#">Política de Privacidad</a>
    </div>
  </footer>
</template>

<script>
export default {
  name : 'Footer',
}
</script>

<style>
footer {
  width: 100%;
  padding: 30px;
  margin-top: 30px;
  background-color: #262626;
}
.footer-social {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: #afafaf;
  font-size: 1.1rem;
}
.social-links {
  color: white;
  font-size: 2em;
}
.social-links a {
  display: inline-block;
  text-decoration: none;
  margin: 20px 10px;
  color: inherit;
}
.social-links img {
  height: 28px;
}
.social-links .correo {
  height: 32px;
  opacity: .9;
  transform: translateY(2.5px) translateX(-2px);
}
.footer-info {
  width: 90%;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #999D97;
  border-top: 1px solid #4e4e4e;
}
.footer-info a {
  display: inline-block;
  color: white;
  text-decoration: none;
  margin-top: 30px;
}

@media only screen and (min-width: 768px) {
  .footer-info {
    flex-direction: row;
  }
  .footer-info a {
    margin-top: 0;
  }
}
</style>