import { getDataFromLocalStorage } from "@/app/utils/getDataFromLocalStorage";
import { backendAddress } from "@/data/environmentVariables";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useBasic from "./useBasics";

const useCheckAuthToken = (pageName: string) => {
  const setUserData = useBasic((state) => state.setUserData);
  const router = useRouter();
  const startFunction = () => {
    const savedData = getDataFromLocalStorage();
    const authToken = savedData.authToken;
    if (authToken) {
      const dataForServer = { authToken };
      axios
        .post(
          `${backendAddress}/authentication/verify-authtoken`,
          dataForServer
        )
        .then((res) => {
          const userData = res.data;
          setUserData(userData);
          if (pageName === "Home_Page") {
            router.push("buy-tickets");
          }
        })
        .catch((err) => {
          console.log(err);
          router.push("/login");
        });
    } else {
      router.push("/login");
    }
  };
  useEffect(startFunction, []);
};

export default useCheckAuthToken;
