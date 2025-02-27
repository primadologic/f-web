
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import { useGetOTPCloseStore, useVerifyNumCloseStore } from "./state"
import { API_BASE_URL, API_KEY } from "@/lib/env_vars"




export const useGetOTPCode = () => {


     const setOpen = useGetOTPCloseStore((state) => state.setOpen)
     const setVerifyNumIsOpen = useVerifyNumCloseStore((state) => state.setVerifyNumIsOpen)

    const getOTP = useMutation({
        mutationKey: ['getOTP'],
        mutationFn: async (reporterNumber: string) => {
            const response = await axios.get(`${API_BASE_URL}` + `/otp/${reporterNumber}`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${API_KEY}`
                }
            })
            
            return response.data
        },
        onSuccess: () => {
            toast.success("The OTP code has been sent. It will expire in five minutes.")
            setTimeout(() => {
                setOpen(false)
            }, 1000)
            setVerifyNumIsOpen(true)

        },
        
        onError: (err) => {
            if (axios.isAxiosError(err)) {
                const code = err.response?.status ?? null

                if (code === 400) {
                    toast.error("Phone number must be a valid phone number. Make sure it starts with dial code e.g., +233.")
                }
            }
        }
    })
    
    return getOTP

};