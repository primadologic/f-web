import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner"
import { API_BASE_URL, API_KEY } from "@/lib/env_vars";
import { ContactFormType } from "@/common/contact.type";



export const useContactFeedback = () => {


    const useContact = useMutation({
        mutationKey: ['contact'],
        mutationFn: async (newContactData: ContactFormType) => {
            const response = await axios.post(`${API_BASE_URL}/feedback`, newContactData, {
                headers: {
                    "Content-Type": "application/json",
                    'x-api-key': `${API_KEY}`
                }
            })

            return response.data;
        },
        onSuccess: () => {
            toast.success('Message sent successfully')
        },

        onError: (error) => {

            if (axios.isAxiosError(error)) {
                const code = error.response?.status ?? null
                const messages = error.response?.data.message;

                if (code === 400) {
                    if (Array.isArray(messages)) {
                        messages.forEach((message) => {
                            toast.error(message)
                        })
                    } 
                    
                } else {
                    toast.error("An unexpected error occurred. Please try again.")
                } 
            } else {
                toast.error("An unexpected error occurred. Please try again.")
            }
        }
    })

    return useContact;
}