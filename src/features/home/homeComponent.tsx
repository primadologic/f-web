
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { CheckNumberType } from '@/common/home.types'
import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from '@tanstack/react-router'
import axios from 'axios'
import { useRouter } from '@tanstack/react-router'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog" 
import { platforms, platformsWarning } from '@/common/platforms.type'

// images
import ntoboa from "/trusted/Ntoboa-logo.png"
import health from "/trusted/omini_health_logo_high_res.png"
import stream from "/trusted/omini_stream_360.png"
import tickets from "/trusted/omini_tickets.png"
import { toast } from 'sonner'
import people_celebrate from "/assets/people-celebrate.png"
import woman_screaming from "/assets/woman-screaming.png"
import alert_fraud from "/assets/alert-fraud.png"
import Loader from '@/components/loader'
import { ErrorMessage } from '@hookform/error-message'
import VerifyNumbyOTPOCodeDialog from '@/components/dialogs/verifyNumberAlertDialogbyOTP'
import { useGetOTPCloseStore } from '@/hooks/state'
import { API_BASE_URL, API_KEY } from '@/lib/env_vars'
import GetOTPAlertDialog from '@/components/dialogs/getOTPAlertDialog'





export default function HomeComponent() {

    const { handleSubmit, control, reset, formState: { errors }} = useForm<CheckNumberType>({
        criteriaMode: 'all',
        defaultValues: {
            phoneNumber: '',
        }
    })

    const router = useRouter();
    const navigate = useNavigate()

    const refreshPage = () => {
        router.invalidate() // Invalidates the current route and refetches data
    }


    // STATE
    const [openNumber, setOpenNumber] = useState<string>('')   // For storing phone number
    const [validateMsg, setValidateMsg] = useState<string>('')

    const { isOpen, setOpen} = useGetOTPCloseStore()
    const [isDialogCloseNotFound, setIsDialogCloseNotFound] = useState<boolean>(false)  // Number not fraudulent
    const [isDialogCloseConfirmed, setIsDialogCloseConfirmed] = useState<boolean>(false) 
    const [isDialogCloseWarning, setIsDialogCloseWarning] = useState<boolean>(false)
   


    const handleFraudDialog302 = () => {
        setOpen(true)
     }
 
     const handleFraudDialog200 = () => {
       setOpen(true)
     }

       
    useEffect(() => {
        if(isOpen === true && isDialogCloseConfirmed === true) {
            setTimeout(() => {
                setIsDialogCloseConfirmed(false)
            }, 1000)
        };
        if(isOpen === true && isDialogCloseNotFound === true) {
            setTimeout(() => {
                setIsDialogCloseNotFound(false)
            }, 1000)
        };
        if(isOpen === true && isDialogCloseWarning === true) {
            setTimeout(() => {
                setIsDialogCloseWarning(false)
            }, 1000)
        };
    }, [isDialogCloseNotFound, isDialogCloseConfirmed, isOpen, isDialogCloseWarning])


    const verifyNumber = useMutation({
        mutationKey: ['verifyNumber'],
        mutationFn: async (data: CheckNumberType) => {
            const origin: string = 'Web';
           
              const response = await axios.get(`${API_BASE_URL}` + `/fraud-number/validate/${data.phoneNumber}?origin=${origin}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': `${API_KEY}`
                }
              });

              if(response.data?.statusCode === 4004) {
                    setValidateMsg(`We don't have any reports on ${openNumber} involved in any fraudulent activities!`);
                    setIsDialogCloseNotFound(true)
              };

              if(response.data?.statusCode === 4006) {
                    setValidateMsg(`${openNumber} has been identified as Fraudulent and reported on the following platforms: `)
                    setIsDialogCloseConfirmed(true)
              };

              if (response.data?.statusCode === 4005) {
                    setValidateMsg(`We have received reports on ${openNumber} involved in some fraudulent activities and is undergoing investigations on the following platforms:`)
                    setIsDialogCloseWarning(true)
              }

              return response.data;
          },

        onSuccess: () => {
            setTimeout(() => {
                refreshPage()
                reset()
            }, 2000)
        },

        onError: (error) => {
            if (axios.isAxiosError(error)) {
                const code = error.response?.status;
                switch (code) {
                    case 400:
                        toast.error('Phone number must be valid.', {
                            
                        })
                        // setIsDialogClose400(true);
                        break;
                    default:
                        toast.error('An error occurred while validating the number.')
                        break;
                }
                // throw new Error('')
            } else {
                // setValidateMsg('An unexpected error occurred.');
                toast.error('An unexpected error occurred.')
            }
        
        }
    }) 


    
    const onSubmit = async (data: CheckNumberType ) => {
        setOpenNumber(data.phoneNumber)
        // console.log("verify number", data);
        verifyNumber.mutateAsync(data)
    };



    

    return (
        <div className="flex flex-col">
            <section className="bg-custom-primary-400 flex flex-col justify-center items-center py-7 px-5">
                <div className="space-y-4 " >
                    <h2 className="sm:text-base sm:text-white sm:font-medium sm:text-center text-center text-white text-base font-medium">
                        Verify if a number is fraudulent
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="sm:w-full flex flex-col gap-y-6 w-[100vw] justify-center items-center">
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
                                            disabled={verifyNumber.isPending}
                                            aria-label="validate number"
                                            className={` w-full sm:w-[7rem] text-base md:w-[7rem] md-767:w-[6rem] md-736:!w-full flex flex-row justify-center items-center sm:text-center text-center sm:!rounded-tr-md md:!rounded-tr-md sm:!rounded-br-md md:!rounded-br-md md-600:!rounded-s-md md-767:!rounded-s-md sm:text-lg sm:h-full lowercase sm:font-semibold sm:text-white text-white bg-black py-3 font-semibold focus:ring-2 focus:ring-white md-667:!rounded-md md-540:rounded-md sm-430:rounded-md`}
                                        >
                                           {verifyNumber.isPending ? (
                                                <>
                                                    <Loader />
                                                </>
                                           ): (
                                                <span>Verify</span>
                                           )}
                                        </button>
                                    </div>
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="phoneNumber"
                                    render={({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <p key={type} className="text-sm font-medium text-center text-primary-foreground mt-2">{message}</p>
                                        ))
                                    }
                                />
                            </div>
                        </div>

                        <GetOTPAlertDialog />
                        <VerifyNumbyOTPOCodeDialog />
                       
                    </form>
                </div>

                <p className='text-center text-sm text-white font-medium mt-2 sm-430:px-6'>Using FraudWall is subject to {'  '}
                    <Link to="/terms" target='_blank'  className='underline font-medium py-3 px-2'>the terms of use</Link>
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
                                loading="lazy"
                            />
                        </div>    
                        <div className="">
                                <img
                                    src={stream}
                                    alt="Fraudwall Logo"
                                    className="object-cover sm:w-[8rem] w-[8rem]"
                                    loading="lazy"
                                /> 
                        </div>    
                        <div className="">
                            <img
                                src={tickets}
                                alt="Fraudwall Logo"
                                className="object-cover sm:w-[8rem] w-[8rem]"
                                loading="lazy"
                            />
                        </div>    
                    </div>
                </div>
            </section>

            <div className="">
                
                <div className="">
                     {/* status 200 */}
                    <Dialog open={isDialogCloseNotFound} onOpenChange={setIsDialogCloseNotFound}>
                        <DialogTrigger className="hidden"></DialogTrigger>
                        <DialogContent className='bg-[#00A341] rounded-md lg:max-w-[32rem] sm:max-w-[32rem] max-w-[93%] flex flex-col justify-center items-center border-[#00A341]'>
                            <div className="flex flex-col justify-center items-center px-8 gap-10">
                                <div className="flex flex-col justify-between items-center gap-y-3">
                                    <div className="">
                                        <img 
                                            src={people_celebrate}
                                            alt='celebrate'
                                            className='object-fill sm:w-[10rem] w-[9rem]'
                                            loading="lazy"
                                        />
                                    </div>
                                    <DialogHeader>
                                        <DialogTitle className='text-white text-2xl text-center font-semibold'>Good News</DialogTitle>
                                        <DialogDescription className='text-white text-center font-normal text-sm break-words'>{validateMsg}</DialogDescription>
                                    </DialogHeader>
                                </div>
                                <div className="space-y-5 flex flex-col justify-center items-center">
                                    <div className="flex flex-row w-full justify-between items-center gap-5 sm-430:flex-col">
                                        <button onClick={handleFraudDialog302} className="text-base text-black font-medium bg-white px-5 py-2 w-[12rem] hover:bg-opacity-80 rounded-md">Report Number</button>
                                        <button onClick={() => navigate({ to: "/faqs" })} className="text-base text-black font-medium bg-white px-5 py-2 w-[12rem] hover:bg-opacity-80 rounded-md">Safety Tips</button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="">
                    {/* status 404 */}
                    <Dialog open={isDialogCloseConfirmed} onOpenChange={setIsDialogCloseConfirmed}>
                        <DialogTrigger aria-label='Number is fraudulent dialog' className="hidden"></DialogTrigger>
                        <DialogContent className='bg-[#EB0000] rounded-md lg:max-w-[32rem] sm:max-w-[32rem] max-w-[93%] flex flex-col justify-center items-center border-[#EB0000]'>
                            <div className="flex flex-col justify-center items-center px-7 gap-10">
                                <div className="flex flex-col justify-between items-center ">
                                    <div className="">
                                        <img
                                            src={alert_fraud}
                                            alt="Fraud alert"
                                            className='object-fill sm:w-[10rem] w-[9rem]'
                                            loading="lazy"
                                        />
                                    </div>
                                    <DialogHeader className="">
                                        <DialogTitle className='text-white text-2xl text-center font-semibold'>Caution</DialogTitle>
                                        <DialogDescription className='text-white text-center font-normal text-sm w-full break-words'>{validateMsg}</DialogDescription>
                                    </DialogHeader>
                                    <div className="py-2 flex flex-row gap-3">
                                       {verifyNumber.data?.data?.reportCountByPlatform && verifyNumber.data?.data?.reportCountByPlatform.length > 0 ? (
                                            verifyNumber.data?.data?.reportCountByPlatform.map((platform: string) => (
                                                <div className="" key={platform}>
                                                    {platforms[platform] || null}
                                                </div>
                                            ))
                                       ): (
                                            <div className="text-white text-sm">No platforms available</div>
                                       )}
                                    </div>
                                </div>
                                <div className=" flex flex-col w-full justify-between items-center ">
                                    <div className="flex flex-row w-full justify-between items-center gap-y-5 gap-x-5 sm-430:flex-col">
                                        <button onClick={handleFraudDialog200} className="text-base text-white font-medium bg-black px-5 py-2 w-[13rem] hover:bg-opacity-80 rounded-md">
                                            Report This Number
                                        </button>
                                        <button onClick={() => navigate({ to: '/faqs' })} className="text-base text-white font-medium bg-black px-5 py-2 w-[13rem] hover:bg-opacity-80 rounded-md">
                                            Safety Tips
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="">
                        <Dialog open={isDialogCloseWarning} onOpenChange={setIsDialogCloseWarning}>
                            <DialogTrigger className="hidden">Open Dialog</DialogTrigger> 
                            <DialogContent className="rounded-md bg-[#E9DF00] lg:max-w-[32rem] sm:max-w-[32rem] max-w-[93%] flex flex-col justify-center items-center ">
                                <div className="flex flex-col justify-center items-center px-8 gap-2">
                                    <div className="flex flex-col justify-between items-center gap-y-3">
                                        <img
                                            src={woman_screaming}
                                            alt='Woman screaming illustration'
                                            className="object-fill sm:w-[10rem] w-[9rem]"
                                            loading="lazy"
                                        />
                                        <DialogHeader className="">
                                            <DialogTitle className='text-black text-center text-2xl font-semibold'>Stay Alert</DialogTitle>
                                            <DialogDescription className="text-black text-center font-normal text-sm w-full break-words">{validateMsg}</DialogDescription>
                                        </DialogHeader>
                                        <div className="flex flex-row items-center justify-center gap-3 py-2">
                                            {verifyNumber.data?.data?.reportCountByPlatform && verifyNumber.data?.data?.reportCountByPlatform.length > 0 ? (
                                                 verifyNumber.data?.data?.reportCountByPlatform.map((platform: string) => (
                                                     <div className="" key={platform}>
                                                         {platformsWarning[platform] || null}
                                                     </div>
                                                 ))
                                            ): (
                                                 <div className="text-white text-sm">No platforms available</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-5 flex flex-col justify-center items-center">
                                        <div className="flex flex-row w-full justify-between items-center gap-5 sm-430:flex-col">
                                            <button onClick={handleFraudDialog302} className="text-base text-white font-medium bg-black px-5 py-2 w-[12rem] hover:bg-opacity-90 rounded-md">Report Number</button>
                                            <button onClick={() => navigate({ to: '/faqs' })} className="text-base text-white font-medium bg-black px-5 py-2 w-[12rem] hover:bg-opacity-90 rounded-md">Safety Tips</button>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>           
                        </Dialog>
                    </div> 


            </div>
        </div>

        
    )
    
};
