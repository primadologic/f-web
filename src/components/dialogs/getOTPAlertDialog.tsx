// import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { OTPType } from "../../common/home.types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../ui/alert-dialog"



  

export default function GetOTPAlertDialog() {

    const { formState: {errors,}, control } = useForm<OTPType>({
        criteriaMode: 'all',
        defaultValues: {
            reporterNumber: ''
        }
    })

    return (
        <div className="w-full sm:w-full md-736:w-[80%]">
            <div className="">
               <AlertDialog>
                   <AlertDialogTrigger 
                       className="border-[#eff4f8] border-2 bg-custom-periwinkle sm:text-lg text-lg font-semibold text-zinc-900 w-full px-5 py-3 rounded-md hover:font-semibold hover:transition-all hover:bg-[#dbe0e3] hover:delay-150 hover:ease-in-out hover:duration-150 focus:bg-[#e2eaf1] focus:text-zinc-800 "
                   >
                       Report a number
                   </AlertDialogTrigger>
                   <AlertDialogContent>
                       <AlertDialogHeader className="w-full flex !justify-start !items-start !space-y-1">
                           <AlertDialogTitle className="font-semibold text-base">
                               Get OTP Code
                           </AlertDialogTitle>
                           <AlertDialogDescription className="text-sm font-semibold text-start text-custom-dark-gray-active">
                               Verify your phone number to report a fraudulent number
                           </AlertDialogDescription>
                       </AlertDialogHeader>
                        <form  className="flex flex-col gap-y-5 ">
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
                            <AlertDialogFooter className="flex justify-end items-end">
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction asChild>
                                    <button 
                                        type="submit"
                                        // disabled={getOTP.isPending}
                                        aria-label="get otp code form button"
                                        className={` w-[8rem] flex px-3 py-3  justify-center rounded-md text-lg bg-black   font-semibold text-white focus:ring-2 focus:ring-white   right-[0rem] sm-425:p-3  `}
                                    >
                                        Get Code
                                    </button>
                                </AlertDialogAction>
                            </AlertDialogFooter>

                        
                        </form>
                   </AlertDialogContent>
               </AlertDialog>
            </div>
            
        </div>
    )
    
};
