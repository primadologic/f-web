import { create } from "zustand";



interface reportNumStore {
    reporterNum: string;
    setReportNum: (num: string) => void;
}

interface NotifyMeDiallogDTO {
    notifyMeIsOpen: boolean;
    setNotifyMeIsOpen: (open: boolean) => void;
}




export const useReporterNumStore = create<reportNumStore>((set) => ({
    reporterNum: '+2330000000000',
    setReportNum: (num: string) => set({reporterNum: num})
}))


export const useNotifyMeCloseStore = create<NotifyMeDiallogDTO>((set) => ({
    notifyMeIsOpen: false,
    setNotifyMeIsOpen: (open: boolean) => set({notifyMeIsOpen: open})
}))



