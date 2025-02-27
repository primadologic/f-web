// import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { OTPType } from "../../common/home.types";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../ui/alert-dialog"
import { useGetOTPCode } from "../../hooks/useGetOTPCode";
import { useReporterNumStore } from "../../hooks/modalState";
import { useEffect } from "react";
import { useGetOTPCloseStore } from "../../hooks/state";
import { Button } from "../ui/button";
import Loader from "../loader";





export default function GetOTPAlertDialog() {

    const { reset, handleSubmit, formState: { errors }, control } = useForm<OTPType>({
        criteriaMode: 'all',
        defaultValues: {
            reporterNumber: ''
        }
    })


    // API Hook(s)
    const getOTPCode = useGetOTPCode();


    const { isOpen, setOpen} = useGetOTPCloseStore()
    const setReporterNum = useReporterNumStore((state) => state.setReportNum)

    const onSubmit = async (data: OTPType) => {
        setReporterNum(data.reporterNumber)
        getOTPCode.mutateAsync(data.reporterNumber)
    }
    
    useEffect(() => {
        if (getOTPCode.isSuccess) {
            reset()
        }
    },[getOTPCode.isSuccess, reset])
  

    return (
        <div className="w-full sm:w-full md-736:w-[80%]">
            <div className="">
               <AlertDialog  open={isOpen} onOpenChange={setOpen}>
                   <AlertDialogTrigger 
                       className="border-[#eff4f8] w-full border-2 bg-custom-periwinkle sm:text-lg text-lg font-semibold text-zinc-900  px-5 py-3 rounded-md hover:transition-all hover:bg-[#dbe0e3] hover:delay-150 hover:ease-in-out hover:duration-150 focus:bg-[#e2eaf1] focus:text-zinc-800 "
                   >
                       Report a number
                   </AlertDialogTrigger>
                   <AlertDialogContent className="rounded-md lg:max-w-[30rem] sm:max-w-[27rem] max-w-[90%] flex flex-col gap-y-5 ">
                       <AlertDialogHeader className="w-full flex !justify-start !items-start !space-y-1">
                           <AlertDialogTitle className="font-semibold text-base">
                               Get OTP Code
                           </AlertDialogTitle>
                           <AlertDialogDescription className="text-sm font-semibold text-start text-custom-dark-gray-active">
                               Verify your phone number to report a fraudulent number
                           </AlertDialogDescription>
                       </AlertDialogHeader>
                        <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col gap-y-5 ">
                            <div className="w-full flex flex-col gap-y-2">
                                <label htmlFor="phoneNumber" className="text-base font-medium">Phone Number</label>
                                <PhoneInputWithCountry 
                                    // countries={['GH', 'NG']}
                                    name="reporterNumber"
                                    defaultCountry={'GH'}
                                    control={control}
                                    placeholder="Enter phone number"
                                    defaultValue={''}
                                    addInternationalOption={false}
                                    rules={{ required: {
                                        value: true,
                                        message: "Phone number is required"
                                    }, maxLength: {
                                        value: 15,
                                        message: "Maximum length of 15 characters exceeded"
                                    }}}
                                    className="custom-phone-input py-2 px-5 text-base font-medium text-black border-slate-400 border-2 rounded-md focus:border-none outline-none bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 sm-425:text-base  sm-430:rounded-md"
                                />
                            </div>
                            <ErrorMessage 
                                errors={errors}
                                name="reporterNumber"
                                render={({ messages }) => 
                                    messages && 
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className='text-sm font-medium text-red-500 '>{message}</p>
                                    ))
                                }
                            />
                            <AlertDialogFooter className="flex flex-row gap-3 justify-end items-end">
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                
                                <Button 
                                    type="submit"
                                    disabled={getOTPCode.isPending}
                                    aria-label="get otp code form button"
                                    className={` ${ getOTPCode.isPending ? 'cursor-not-allowed' : 'cursor-pointer'} flex flex-row justify-center items-center `}
                                >
                                   {getOTPCode.isPending ? (
                                        <>
                                            <Loader />
                                        </>
                                   ): (
                                        <span>Get Code</span>
                                   )}
                                </Button>
                               
                            </AlertDialogFooter>
                        </form>
                   </AlertDialogContent>
               </AlertDialog>
            </div>
            
        </div>
    )
    
};
