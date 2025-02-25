// import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { OTPType } from "../../common/home.types";


export default function GetOTPForm() {

    const { formState: {errors,}, control } = useForm<OTPType>({
        criteriaMode: 'all',
        defaultValues: {
            reporterNumber: ''
        }
    })

    return (
        <div className="">
            <form  className="flex flex-col gap-y-5 w-full">
                <div className="flex flex-col w-full gap-y-2">
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

                <button 
                    type="submit"
                    // disabled={getOTP.isPending}
                    aria-label="get otp code form button"
                    className={` flex px-3 py-3 w-full justify-center rounded-md text-lg bg-black   font-semibold text-white focus:ring-2 focus:ring-white   right-[0rem] sm-425:p-3  `}
                >
                
                    Get Code
                </button>
           
            </form>
        </div>
    )
    
};
