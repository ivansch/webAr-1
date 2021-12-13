import Footer from "./Footer.js";
export default function Productos() {

  return (
    <div>
      <h2 className="title2">PRODUCTOS</h2>
      <hr className="linet" />
      <div id="productos">
      <div className="cardProducto">
          <img className="imgCardProducto" src="images/maiz.jpg" alt="" />
          <h4 className="titCardProductos">PRODUCTO 1</h4>
          <p className="parrCard">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
            mauris conubia odio ient pretium duis laoreet condimentum
          </p>
          <button type="button" name="button" className="btnCardProductos">
            <p className="pBtnCardProduct">VER MÁS</p>
          </button>
      </div>
      <div className="cardProducto">
          <img className="imgCardProducto" src="images/maiz.jpg" alt="" />
          <h4 className="titCardProductos">PRODUCTO 2</h4>
          <p className="parrCard">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
          mauris conubia odio ient pretium duis laoreet condimentum
          </p>
          <button type="button" name="button" className="btnCardProductos">
            <p className="pBtnCardProduct">VER MÁS</p>
          </button>
      </div>
      </div>


      <Footer />
    </div>
  );
}
