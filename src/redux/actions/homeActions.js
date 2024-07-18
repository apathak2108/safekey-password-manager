import { IS_PASSWORD_MODAL_OPEN, IS_MPIN_MODAL_OPEN } from "../actionTypes";

export const setIsPasswordModalOpen = () => {
  return {
    type: IS_PASSWORD_MODAL_OPEN,
  };
};

export const setIsMpinModalOpen = () => {
  return {
    type: IS_MPIN_MODAL_OPEN,
  };
};
