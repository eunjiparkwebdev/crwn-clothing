import { createContext, useState, useEffect } from "react";
//Below is to just set up database in firebase to retrieve
//import SHOP_DATA from "../shop-data.js";
//import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  /*
  Below is to just set up database in firebase to retrieve
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []); */

  //simply just getcategories
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
