import api from "../../services/api";
import { addItem, addItens } from "../ducks/item";

export const getAllItens = () => {
  return (dispatch) => {
    api
      .get("/list")
      .then((res) => {
        dispatch(addItens(res.data));
      })
      .catch();
  };
};

export const addItemFetch = (item) => {
  return (dispatch) => {
    api
      .post("/add", item)
      .then((res) => {
        dispatch(addItem(res.data));
      })
      .catch();
  };
};
