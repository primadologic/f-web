import { useForm } from "react-hook-form";
import { NotifyMeType } from "../../common/notifyMe.type";
import { useNotifyMeCloseStore } from "../../hooks/modalState"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "../ui/alert-dialog"
  import { yupResolver } from "@hookform/resolvers/yup"
  import * as yup from "yup"
import { API_BASE_URL, API_KEY } from "../../lib/env_vars";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import Loader from "../loader";
import { Button } from "../ui/button";


// Resolvers

const NotifyMeSchema = yup 
    .object({
        phoneNumber: yup.string().required("Phone number is required ").max(15, "Maximum length of 15 characters exceeded"),
        email: yup.string().email('Email is invalid').required("Email is required")
    }).required()


export default function NotifyMeAlertDialog() {

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm<NotifyMeType>({
        criteriaMode: 'all',
        resolver: yupResolver(NotifyMeSchema),
        defaultValues: {
            phoneNumber: '',
            email: ''
        }
    })



    // Hooks
    const {notifyMeIsOpen, setNotifyMeIsOpen} = useNotifyMeCloseStore()



    // API Call
    const notifyMeMutation = useMutation({
        mutationKey: ['notifyMe'], 
        mutationFn:  async (newNotifyMeData: NotifyMeType) => {
        
            const response = await axios.post(`${API_BASE_URL}` + '/notify-me', newNotifyMeData, {
                headers: {
                    'Content-Type': 'application/json',
                   'x-api-key': `${API_KEY}`
                }
            })
            // console.log('Notify me data >>>', response.data);

            return response.data
        },

        onSuccess: () => {
            toast.success("Thank you for subscribing! You'll receive our latest tips on fraud schemes and ways to protect yourself.")
            setTimeout(() => {
                reset()
                setNotifyMeIsOpen(false)
            }, 1000)

        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                const code = error.response?.status ?? null

                if (code === 409) {
                    toast.info(`${error.response?.data?.message}`)
            
                };

                if (code === 400) {
                    toast.error(`${error.response?.data?.message}`)
                }
            }
       }
    })

    const onSubmit = async (data: NotifyMeType) => {
        // console.log(data);
        notifyMeMutation.mutateAsync(data)
    }


    return (
        <>
            <AlertDialog open={notifyMeIsOpen} onOpenChange={setNotifyMeIsOpen}>
                <AlertDialogContent className="rounded-md lg:max-w-[30rem] sm:max-w-[27rem] max-w-[90%] flex flex-col justify-center items-center">
                    <AlertDialogHeader className="w-full flex !justify-start !items-start !space-y-1">
                        <AlertDialogTitle className="font-semibold text-base">Notify me</AlertDialogTitle> 
                        <AlertDialogDescription className="text-sm font-semibold text-start text-custom-dark-gray-active">Get notified when your number is reported.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex flex-col w-full">
                        <form onSubmit={handleSubmit(onSubmit)} action="" className="w-full flex flex-col gap-y-3">
                            <div className="flex flex-col w-full gap-y-2 mt-1">
                                <label htmlFor="Phone number" className="text-base font-medium">Phone Number</label>
                                <PhoneInputWithCountry 
                                    // countries={['GH', 'NG']}
                                    name="phoneNumber"
                                    defaultCountry={'GH'}
                                    placeholder="Enter phone number"
                                    control={control}
                                    defaultValue={''}
                                    addInternationalOption={false}
                                    className="py-2 px-5 w-full text-base font-medium text-black border-slate-400 border-2 rounded-md focus:border-none outline-none bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-black sm-425:text-base  sm-430:rounded-md md-540:w-full md-768:!w-full"
                                />
                               
                                <p className="font-normal text-base text-red-500">{errors.phoneNumber?.message}</p>
                            </div>
                            <div className="flex flex-col w-full gap-y-2 text-base font-medium">
                                <label htmlFor="Email" className="text-base font-medium">Email</label>
                                <input 
                                    type="text" 
                                    {...register("email")}
                                    placeholder="Enter email address"

                                    className="font-medium text-base w-full  py-2 px-5 border-slate-400 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <p className="font-normal text-base text-red-500">{errors.email?.message}</p>
                            </div>

                            <div className="w-full flex flex-row gap-3 justify-end items-end">
                                <AlertDialogFooter className="flex flex-row gap-3 justify-center items-center">
                                    <AlertDialogCancel>Canel</AlertDialogCancel>
                                    <Button
                                        type="submit"
                                        size={'sm'}
                                        variant={'default'}
                                        disabled={notifyMeMutation.isPending}
                                        aria-label="notify me form button"
                                        className={`${notifyMeMutation.isPending ? 'cursor-not-allowed ' : 'cursor-pointer'} w-[3rem] flex flex-row justify-center items-center`}
                                    >
                                        {notifyMeMutation.isPending ? (
                                            <>
                                                <Loader />
                                            </>
                                        ): (
                                            <span>Submit</span>
                                        )}
                                        </Button>
                                </AlertDialogFooter>
                            </div>
                        </form>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
    
};
