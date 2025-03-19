import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL, API_KEY } from "../lib/env_vars";
import axios from "axios";



export default function StatisticsComponent() {


    // 1 day = 24 * 60 * 60 * 1000 = 86,400,000 ms  // Stale time for 1 day
    // 3 days = 3 * 86,400,000 = 259,200,000 ms  // Stale time for 3 days

    const getStats = useQuery({
        queryKey: ['getStats'],
        queryFn: async () => {
            const response = await axios.get(`${API_BASE_URL}/api/report/fraud-numbers/statistics`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${API_KEY}`
                }
            })

            return response.data.data
        },
        staleTime: 259200000, // Cache data for 1 day
        refetchOnWindowFocus: false, // Prevent refetching on window focus
        refetchInterval: 86400000, // Refetch every 1 day
    })


    const reportCountByPlatform = getStats.data?.reportCountByPlatform || {}

    // const { reportCountByPlatform } = data.data;

    const isEmpty = Object.keys(reportCountByPlatform).length === 0;
 
    return ( 

        <section className=" w-full sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col py-8 px-5">

            {getStats.isFetching ? (
            <div className="lg:w-full lg:flex lg:flex-row lg:gap-x-10 lg:gap-y-5 xl:w-[80vw] md:w-full md:flex md:flex-wrap xl:gap-x-10 grid grid-cols-2 gap-x-10 gap-y-10 justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6">
                    <div className="px-10 h-[1.8rem] bg-custom-light-gray    rounded-md mb-3"></div>
                    <div className="px-10 h-[1rem] bg-custom-light-gray   rounded-md"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6">
                    <div className="px-10 h-[1.8rem] bg-custom-light-gray  rounded-md mb-3"></div>
                    <div className="px-10 h-[1rem] bg-custom-light-gray    rounded-md"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6">
                    <div className="px-10 h-[1.8rem] bg-custom-light-gray  rounded-md mb-3"></div>
                    <div className="px-10 h-[1rem] bg-custom-light-gray rounded-md"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6">
                    <div className="px-10 h-[1.8rem] bg-custom-light-gray rounded-md mb-3"></div>
                    <div className="px-10 h-[1rem] bg-custom-light-gray  rounded-md"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6">
                    <div className="px-10 h-[1.8rem] bg-custom-light-gray rounded-md mb-3"></div>
                    <div className="px-10 h-[1rem] bg-custom-light-gray  rounded-md"></div>
                </div>
            </div>
            ): getStats.isSuccess ? (
                <div className="flex flex-col gap-y-7 justify-center items-center"
                    // initial={{ y: 25, opacity: 0 }}
                    // animate={{ y: 0, opacity: 1 }}
                    // transition={{type: "string", ease: easeIn, delay: 0.6, duration: 1}}
                >
                    {!isEmpty  && (
                        <h2 className="text-custom-light-gray font-semibold text-center text-2xl">Fraud Number Reports by Platform</h2>
                     )}
                    <div className="lg:w-full lg:flex lg:flex-row lg:gap-x-10 lg:gap-y-5 xl:w-[80vw] md:w-full md:flex md:flex-wrap xl:gap-x-10 grid grid-cols-2 gap-x-10 gap-y-10 justify-center items-center">

                
                    {getStats.data.reportCountByPlatform?.sms ? (
                    <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6 ">
                        <h3 className="text-primary-foreground text-3xl font-semibold sm-425:text-xl">{getStats.data.reportCountByPlatform?.sms}%</h3>
                        <p className="text-custom-light-gray text-base font-medium text-center ">SMS</p>
                    </div>
                    ): (
                        null
                    )}

                
                    {getStats.data.reportCountByPlatform?.phone_call ? (
                    <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6 ">
                        <h3 className="text-primary-foreground text-3xl font-semibold sm-425:text-xl">{getStats.data.reportCountByPlatform?.phone_call}%</h3>
                        <p className="text-custom-light-gray text-base font-medium text-center ">Phone Call</p>
                    </div>
                    ): (
                        null
                    )}
                    {getStats.data.reportCountByPlatform?.whatsapp ? (
                    <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6 ">
                        <h3 className="text-primary-foreground text-3xl font-semibold sm-425:text-xl">{getStats.data.reportCountByPlatform?.whatsapp}%</h3>
                        <p className="text-custom-light-gray text-base font-medium text-center">WhatsApp</p>
                    </div>
                    ): (
                        null
                    )}
                    {getStats.data.reportCountByPlatform?.instagram ? (
                    <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6 ">
                        <h3 className="text-primary-foreground text-3xl font-semibold sm-425:text-xl">{getStats.data.reportCountByPlatform?.instagram}%</h3>
                        <p className="text-custom-light-gray text-base font-medium text-center ">Instagram</p>
                    </div>
                    ): (
                        null
                    )}
                    {getStats.data.reportCountByPlatform?.facebook ? (
                    <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6 ">
                        <h3 className="text-primary-foreground text-3xl font-semibold sm-425:text-xl">{getStats.data.reportCountByPlatform?.facebook}%</h3>
                        <p className="text-custom-light-gray text-base font-medium text-center ">Facebook</p>
                    </div>
                    ): (
                        null
                    )}
                    {getStats.data.reportCountByPlatform?.twitter ? (
                    <div className="flex flex-col justify-center items-center gap-y-2 px-8 sm-425:px-6 ">
                        <h3 className="text-primary-foreground text-3xl font-semibold sm-425:text-xl">{getStats.data.reportCountByPlatform?.twitter}%</h3>
                        <p className="text-custom-light-gray text-base font-medium text-center ">X (Twitter)</p>
                    </div>
                    ): (
                        null
                    )}
                </div>
                </div>

            ): (
                null
            )}    
            
        </section>
    )
    
};
