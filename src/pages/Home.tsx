import React, { useState } from "react";
import "@ionic/react/css/core.css";
import MenuList from "../components/MenuList";
import { IonPage, IonContent, IonButton, IonRow, IonCol } from "@ionic/react";
import Cart from "../components/Cart";
// import { GrCart } from "react-icons/gr";

function Home() {
  const [showModal, setShowModal] = useState(false);
  function dismiss() {
    setShowModal(false);
  }

  return (
    <IonPage className="bg-gray-800">
      <div className="w-full flex items-center">
        <h1 className="font-bold m-3 justify-self-start text-stone-100 uppercase text-8xl inline-block	">
          CAFE
        </h1>
        <IonButton
          className="ml-auto mr-4 text-center"
          onClick={() => setShowModal(true)}
        >
          CART
        </IonButton>
      </div>
      <IonContent>
        <div className="bg-slate-700 w-[60%] rounded-xl overflow-auto overflow-invisible outline outline-slate-500">
          <MenuList />
        </div>
        <Cart showModal={showModal} onDismiss={dismiss} />
      </IonContent>
    </IonPage>
  );
}

export default Home;
