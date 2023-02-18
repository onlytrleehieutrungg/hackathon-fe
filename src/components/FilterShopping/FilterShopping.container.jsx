import { Col } from "antd";
import { useEffect, useState } from "react";
import { getAllDocumentByCollectionNameService } from "../../services/firestore.service";
import { FilterShoppingComponent } from "./FillerShopping.component";

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
    <Col style={{width:"100%"}}>
      <FilterShoppingComponent listAgePet={listAgePet} />
    </Col>
  );
};
