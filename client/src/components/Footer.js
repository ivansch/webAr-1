export default function Footer() {
  return (
    <div>
      <div class="footer" id="contacto">
        <div class="contactContainer">
          <h4 class="titFoo">CONTACTO</h4>
          <p class="parrFoo">asistencia_riego@gmail.com</p>
          <p class="parrFoo">Av Hirigoyen 16794</p>
          <div class="divFlex">
            <img class="imgIcon" src="images/email.png" alt="" />
            <img class="imgIcon" src="images/facebook.png" alt="" />
            <img class="imgIcon" src="images/instagram.png" alt="" />
            <img class="imgIcon" src="images/whatsapp.png" alt="" />
          </div>
        </div>
        <article class="form">
          <div class="mb-3 xs-12">
            <input
              type="email"
              class="form-control"
              id="Email1"
              placeholder="EMAIL"
            />
          </div>
          <div class="mb-3 xs-12">
            <textarea
              placeholder="CONSULTA"
              class="form-control"
              id="Textarea1"
              rows="3"
            ></textarea>
          </div>
          <button class="btnFoo" type="button" name="button">
            <p class="parrBtnFoo">ENVIAR</p>
          </button>
        </article>
      </div>
    </div>
  );
}
