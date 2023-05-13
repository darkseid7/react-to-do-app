import { useState } from "react";
const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedITem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedITem = initialValue;
  } else {
    parsedITem = JSON.parse(localStorageItem);
  }

  const [item, setItems] = useState(parsedITem);

  const saveITem = (newTodos) => {
    const stringTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringTodos);
    setItems(newTodos);
  };

  return [item, saveITem];
};

export default useLocalStorage;
