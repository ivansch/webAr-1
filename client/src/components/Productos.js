import Footer from "./Footer.js";
export default function Productos() {

  return (
    <div>
      <h2 className="title2">PRODUCTOS</h2>
      <hr className="linet" />
      <div className="card">
        <img className="imgCard" src="images/maiz.jpg" alt="" />
        <div className="boxCard">
          <h4 className="titCardBlue">PRODUCTO 1</h4>
          <p className="parrCard">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
            mauris conubia odio sed montes mollis vehicula, ac curabitur purus
            per porta libero neque. At aptent venenatis risus quam pharetra
            varius vestibulum praesent hac convallis, montes platea sem senectus
            inceptos dapibus parturient pretium duis laoreet condimentum
          </p>
          <button type="button" name="button" className="btnCard">
            <p className="pBtnCard">VER MÁS</p>
          </button>
        </div>
      </div>

     
      <Footer />
    </div>
  );
}

      

