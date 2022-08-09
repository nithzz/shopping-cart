import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { IonGrid, IonRow, IonCol, IonItem } from "@ionic/react";
import "./MenuList.css";

const MenuList = () => {
  const list = useSelector((state) => state.cart.cart);
  return (
    <>
      <IonGrid className="bg-gray-200 ">
        <IonRow className="font-bold text-gray-400  uppercase text-2xl w-50%">
          <IonCol>NAME</IonCol>
          <IonCol>PRICE</IonCol>
          <IonCol>QUANTITY</IonCol>
          <IonCol>TOTAL</IonCol>
        </IonRow>
        {list.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </IonGrid>
    </>
  );
};
export default MenuList;
