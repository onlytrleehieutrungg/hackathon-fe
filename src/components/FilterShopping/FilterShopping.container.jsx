import { getAllDocumentByCollectionNameService } from "../../services/firestore.service";
import { FilterShoppingComponent } from "./FillerShopping.component";
import { useEffect, useState } from "react";

export const FilterShoppingContainer = () => {
  const [listAgePet, setListAgePet] = useState([]);
  useEffect(() => {
    const getAllDocumentByCollectionNameFunc = async () => {
      const data = await getAllDocumentByCollectionNameService("age-pet");
      console.log(data);
      setListAgePet(data);
    };
    console.log(listAgePet);
  }, []);
  return (
    <>
      <FilterShoppingComponent listAgePet={listAgePet} />
    </>
  );
};
