import { create } from "zustand";

type useBasicType = {
  userData: any;
  setUserData: (data: any) => void;
};

const useBasic = create<useBasicType>((set) => ({
  userData: null,
  setUserData: (data) => {
    set((state) => {
      return { ...state, userData: data };
    });
  },
}));

export default useBasic;
