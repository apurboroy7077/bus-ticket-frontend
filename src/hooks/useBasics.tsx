import { create } from "zustand";
type userDataType = {
  username: string;
  email: string;
  role: string;
  createdAt: number;
  updatedAt: number;
  _id: string;
};
type useBasicType = {
  userData: null | userDataType;
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
