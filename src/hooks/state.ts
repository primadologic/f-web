import { create } from "zustand"

interface DialogState {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
  }


interface NotifyMeDialogState {
  notifyMeIsOpen: boolean;
  setNotifyMeIsOpen: (isOpen: boolean) => void;
}

interface VerifyDialogState {
    VerifyNumIsOpen: boolean;
    setVerifyNumIsOpen: (open: boolean) => void;
  }

interface OTPDialogState {
    isOTPDialogOpen: boolean;
    setIsOTPDialogOpen: (open: boolean) => void;
  }


interface OTPDialogMsgState200 {
  isOTPMsgOpen200: boolean;
  setIsOTPMsgOpen200: (open: boolean) => void;
}


interface OTPDialogMsgState400 {
  isOTPMsgOpen400: boolean;
  setIsOTPMsgOpen400: (open: boolean) => void;
}


interface VerifyNumDialogOpen201 {
  isVerifyNumOpen201: boolean;
  SetIsVerifyNumOpen201: (open: boolean) => void;
}

interface VerifyNumDialogOpen401 {
  isVerifyNumOpen401: boolean;
  SetIsVerifyNumOpen401: (open: boolean) => void;
}


interface OTPCodeToastMsg {
  isOTPMsg: string;
  setIsOTPMsg: (msg: string) => void;
}


interface VerifyNumberToastMsgState {
  isVerifyNumMsg: string;
  setVerifyNumMsg: (msg: string) => void;
}


export const useNotifyMeCloseStore = create<NotifyMeDialogState>((set) => ({
    notifyMeIsOpen: false,
    setNotifyMeIsOpen: (open: boolean) => set({notifyMeIsOpen: open})
}))


export const useGetOTPCloseStore = create<DialogState>((set) => ({
    isOpen: false,
    setOpen: (open: boolean) => set({isOpen: open})
}))

export const useVerifyNumCloseStore = create<VerifyDialogState>((set) => ({
    VerifyNumIsOpen: false,
    setVerifyNumIsOpen: (open: boolean) => set({VerifyNumIsOpen: open})
}))


export const useOTPDialogStore = create<OTPDialogState>((set) => ({
    isOTPDialogOpen: false,
    setIsOTPDialogOpen: (open: boolean) => set({isOTPDialogOpen: open})
}))


export const useOTPDialogMsgStore200 = create<OTPDialogMsgState200>((set) => ({
    isOTPMsgOpen200: false,
    setIsOTPMsgOpen200: (open: boolean) => set({isOTPMsgOpen200: open})
}))


export const useOTPDialogMsgStore400 = create<OTPDialogMsgState400>((set) => ({
    isOTPMsgOpen400: false,
    setIsOTPMsgOpen400: (open: boolean) => set({isOTPMsgOpen400: open})
}))


export const useOTPToastMsgStore = create<OTPCodeToastMsg>((set) => ({
    isOTPMsg: '',
    setIsOTPMsg: (msg: string) => set({isOTPMsg: msg})
}))


export const useVerifyNumMsgStore = create<VerifyNumberToastMsgState>((set) => ({
    isVerifyNumMsg: '',
    setVerifyNumMsg: (msg: string) => set({isVerifyNumMsg: msg})
}))


export const useVerifyNumToastStore201 = create<VerifyNumDialogOpen201>((set) => ({
  isVerifyNumOpen201: false,
  SetIsVerifyNumOpen201: (open: boolean) => set({isVerifyNumOpen201: open})
}))


export const useVerifyNumToastStore401 = create<VerifyNumDialogOpen401>((set) => ({
  isVerifyNumOpen401: false,
  SetIsVerifyNumOpen401: (open: boolean) => set({isVerifyNumOpen401: open})
}))
