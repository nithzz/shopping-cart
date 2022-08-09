import React, { useRef } from "react";
import {
  IonGrid,
  IonModal,
  IonRow,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
} from "@ionic/react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = ({ onDismiss, showModal }) => {
  const items = useSelector((state) => state.cart.cart);
  const cart = items.filter((item) => item.quantity > 0);
  const modal = useRef(null);

  //const [tprice, setTPrice] = useState(0);
  var tprice = 0;
  function calctotal(val) {
    tprice += val;
  }
  return (
    <>
      <IonModal
        id="example-modal"
        isOpen={showModal}
        ref={modal}
        backdropDismiss={true}
        onDidDismiss={onDismiss}
        className="text-black items-center px-3 object-right-top"
      >
        <IonGrid className="p-3 m-0 w-full">
          <IonRow>
            <IonText className="text-3xl ml-3">Cart</IonText>
          </IonRow>
          <IonRow>
            <IonList>
              {cart.map((i) => (
                <IonItem>
                  <IonLabel>
                    {i.name} {i.quantity} {i.quantity * i.price}
                  </IonLabel>
                  {calctotal(i.quantity * i.price)}
                </IonItem>
              ))}
            </IonList>
          </IonRow>
          <IonRow>
            <IonLabel className="ml-auto">TOTAL ---------- {tprice}</IonLabel>
          </IonRow>

          {/* <IonRow className="items-center self-center"> */}
          {/* </IonRow> */}
        </IonGrid>
        <IonButton className="m-3" onClick={onDismiss}>
          CLOSE
        </IonButton>
      </IonModal>
    </>
  );
};
export default Cart;
