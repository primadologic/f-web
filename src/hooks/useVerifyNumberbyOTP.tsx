



import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useVerifyNumCloseStore } from "./state"
import Cookies from "js-cookie"
import { toast } from "sonner"
import { useNavigate } from "@tanstack/react-router"
import { VerifyNumberType } from "../common/home.types"
import { API_BASE_URL, API_KEY } from "../lib/env_vars"



export const useVerifyNumberbyOTPCode = () => {

    const navigate = useNavigate();

    const setVerifyNumIsOpen = useVerifyNumCloseStore((state) => state.setVerifyNumIsOpen)


    const verifyNumber = useMutation({
        mutationKey: ['verifyNumber'],
        mutationFn: async (data: VerifyNumberType) => {
            const response = await axios.post(`${API_BASE_URL}` + '/verify/otp', data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${API_KEY}`
                }
            })
            
            const accessToken = response.data.accessToken          
            if (accessToken) {
                Cookies.set('accessToken', accessToken, {
                    expires: 20/1440,  // Expires after 20 minutes
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production'
                });
            } else {
                // console.error("Access token not found in response:", verifyNumber.data);
            }   
            return response.data
            
        },
        onSuccess: () => {    
            toast.success('Phone number verified successfully')
          
            setTimeout(() => {
                setVerifyNumIsOpen(false)
            }, 1000)
            const accessToken = Cookies.get('accessToken')
            if (accessToken) {
                setTimeout(() => {
                    navigate({ to: '/report' })
                }, 2000)
            }
        },
        onError: (error) => {

            if (axios.isAxiosError(error)) {
                const code = error.response?.status ?? null

                if (code === 401) {
                    toast.error(`${error.response?.data?.message}. Please try again.`)
                    setVerifyNumIsOpen(true)
                }
            }
            // console.error('Error:', error.cause, '<=>', error.message);
            // throw new Error("")
        }
    })
    
    return verifyNumber;

};