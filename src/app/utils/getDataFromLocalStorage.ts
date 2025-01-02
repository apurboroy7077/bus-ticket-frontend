import { localStorageKeyname } from "@/data/environmentVariables";

export const getDataFromLocalStorage = () => {
  const savedData = localStorage.getItem(localStorageKeyname);
  if (!savedData) {
    const myData2 = JSON.stringify({});
    localStorage.setItem(localStorageKeyname, myData2);
    return {};
  } else {
    const myData = JSON.parse(savedData);
    return myData;
  }
};

export const saveDataToLocalStorage = (data: any) => {
  const myData = JSON.stringify(data);
  localStorage.setItem(localStorageKeyname, myData);
};
