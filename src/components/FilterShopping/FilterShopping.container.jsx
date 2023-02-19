import { Col } from "antd";
import { useEffect, useState } from "react";
import { getAllDocumentByCollectionNameService } from "../../api/firestore.service";
import { FilterShoppingComponent } from "./FillerShopping.component";

export const FilterShoppingContainer = () => {
  const [listAgePet, setListAgePet] = useState([]);
  useEffect(() => {
    const getAllDocumentByCollectionNameFunc = async () => {
      const data = await getAllDocumentByCollectionNameService("age-pet");
      setListAgePet(data);
    };
  }, []);
  return (
    <Col style={{ width: "100%" }}>
      <FilterShoppingComponent listAgePet={listAgePet} />
    </Col>
  );
};
