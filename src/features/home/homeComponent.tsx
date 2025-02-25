

import { useForm } from 'react-hook-form'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { CheckNumberType } from '../../common/home.types'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../../components/ui/alert-dialog"
// images
import ntoboa from "/trusted/Ntoboa-logo.png"
import health from "/trusted/omini_health_logo_high_res.png"
import stream from "/trusted/omini_stream_360.png"
import tickets from "/trusted/omini_tickets.png"
import GetOTPForm from '../../components/dialogs/getOTPForm'
import { Link } from '@tanstack/react-router'




export default function HomeComponent() {

    const {control} = useForm<CheckNumberType>({
        criteriaMode: 'all',
        defaultValues: {
            phoneNumber: '',
        }
    })

    return (
        <div className="flex flex-col">
            <section className="bg-custom-primary-400 flex flex-col justify-center items-center py-7 px-5">
                <div className="space-y-4 " >
                    <h2 className="sm:text-base sm:text-white sm:font-medium sm:text-center text-center text-white text-base font-medium">
                        Verify if a number is fraudulent
                    </h2>
                    <form className="sm:w-full flex flex-col gap-y-6 w-[100vw] justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-y-5 w-full sm:flex-row sm:justify-center md-736:!flex-col sm:items-center sm:gap-y-2">
                            <div className="w-full flex flex-col gap-y-2 justify-center items-center">
                                <div className="w-full sm:w-full md-736:w-[80%] md-736:flex-col sm:flex sm:flex-row  gap-y-2 flex flex-col md-736:!gap-y-4">
                                    <PhoneInputWithCountry
                                        name="phoneNumber"
                                        defaultCountry={'GH'}
                                        placeholder="Enter phone number"
                                        defaultValue={''}
                                        control={control}
                                        addInternationalOption={false}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Phone number is required"
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: "Maximum length of 15 characters exceeded"
                                            }
                                        }}
                                        className="py-[13.7px] px-4 rounded-s-md sm:w-full focus:ring-2 focus:ring-blue-500 w-full md-736:w-[100%] text-base font-medium md-736:!rounded-md text-gray-700 outline-none bg-white focus:bg-white"
                                    />
                                    <div className="flex sm:w-full w-full md-736:w-[100%] md-736:justify-center md-736:items-center">
                                        <button
                                            type="submit"
                                            aria-label="validate number"
                                            className={` w-full sm:w-[7rem] md:w-[7rem] md-767:w-[6rem] md-736:!w-full sm:text-center sm:!rounded-tr-md md:!rounded-tr-md sm:!rounded-br-md md:!rounded-br-md md-600:!rounded-s-md md-767:!rounded-s-md sm:text-lg sm:h-full lowercase sm:font-semibold sm:text-white text-center text-lg text-white bg-black py-3 font-semibold focus:ring-2 focus:ring-white md-667:!rounded-md md-540:rounded-md sm-430:rounded-md`}
                                        >
                                            verify
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-full md-736:w-[80%]">
                            <AlertDialog>
                                <AlertDialogTrigger 
                                    className="border-[#eff4f8] border-2 bg-custom-periwinkle sm:text-lg text-lg font-semibold text-zinc-900 w-full px-5 py-3 rounded-md hover:font-semibold hover:transition-all hover:bg-[#dbe0e3] hover:delay-150 hover:ease-in-out hover:duration-150 focus:bg-[#e2eaf1] focus:text-zinc-800 "
                                >
                                    Report a number
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="font-semibold text-base">
                                            Get OTP Code
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className="text-sm font-semibold text-start text-gray-600">
                                            Verify your phone number to report a fraudulent number
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <div className="">
                                        <GetOTPForm />
                                    </div>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </form>
                </div>

                <p className='text-center text-sm text-white font-medium mt-6 sm-430:px-6'>Using FraudWall is subject to {'  '}
                    <Link to="/terms" target='_blank'  className='underline font-medium py-2 px-2'>the terms of use</Link>
                </p>

            </section>


            <section className=" bg-gradient-tr from-custom-primary-400 to-custom-primary-500 w-full flex justify-center items-center py-10 px-5 !pr-5">
                <div className="sm:w-[80vw] sm:max-w-[80vw] sm:flex sm:flex-col sm:justify-center sm:items-center  sm:gap-8 lg:w-full lg:px-10 xl:w-[80vw] md:w-full w-full flex flex-col items-center justify-center px-5 gap-y-10 gap-x-10">
                    <h2 className="text-center !font-bold text-2xl text-custom-dark-gray-active">Trusted by</h2>
                    <div className="sm:w-[80vw] lg:w-full lg:px-10 xl:w-[80vw] sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-x-20 sm:gap-y-10 md:w-full flex flex-wrap gap-x-5 gap-y-10 justify-center items-center">
                        <div className="">
                            <img
                                src={ntoboa}
                                alt="Fraudwall Logo"
                                className="object-cover sm:w-[8rem] w-[8rem]"
                            />
                        </div>    
                        <div className="">
                            <img
                                src={health}
                                alt="Fraudwall Logo"
                                className="object-cover sm:w-[8rem] w-[8rem]"
                            />
                        </div>    
                        <div className="">
                                <img
                                    src={stream}
                                    alt="Fraudwall Logo"
                                    className="object-cover sm:w-[8rem] w-[8rem]"
                                /> 
                        </div>    
                        <div className="">
                            <img
                                src={tickets}
                                alt="Fraudwall Logo"
                                className="object-cover sm:w-[8rem] w-[8rem]"
                            />
                        </div>    
                    </div>
                </div>
            </section>
        </div>
    )
    
};
