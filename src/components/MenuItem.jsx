import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../store/cartSlice";
import { IonGrid, IonRow, IonCol, IonCard } from "@ionic/react";
const MenuItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(updateItem({ id: item.id, quantity: quantity + 1 }));
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
    dispatch(updateItem({ id: item.id, quantity: quantity - 1 }));
  };

  return (
    <IonCard className="rounded-2xl">
      <IonGrid className="bg-slate-800 justify-center py-5 outline outline-slate-500">
        <IonRow>
          <IonCol>
            <img
              className="shadow-lg rounded-xl object-cover h-36 w-80 align-middle border-none"
              src={item.image}
              alt="img"
            />
            <p className="text-lg uppercase font-bold text-gray-400">
              {item.name}
            </p>
          </IonCol>
          <IonCol>
            <p className="px-5 text-lg uppercase font-bold text-gray-400">
              {item.price}
            </p>
          </IonCol>
          <IonCol>
            <IonRow>
              <button
                onClick={incrementQuantity}
                className=" add-btn block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                +
              </button>
              <p className="px-5 text-lg uppercase font-bold text-gray-400">
                {quantity}
              </p>
              <button
                className="remove-btn block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={decrementQuantity}
              >
                -
              </button>
            </IonRow>
          </IonCol>
          <IonCol>
            <p className="text-lg uppercase font-medium text-gray-400">
              {item.price * quantity}
            </p>
          </IonCol>
          <br className="text-black"></br>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};
export default MenuItem;
