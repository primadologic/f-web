

export default function HomeHeader() {

    return (
        <section>
            <div className="w-full bg-custom-primary-500 px-5">
                <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:py-10 flex flex-col justify-center items-center py-7">
                    <div className="sm:w-[35rem] sm:flex sm:flex-col sm:gap-3 sm-425:w-full sm:pt-5 w-full flex flex-col gap-3">
                        <div className="sm:border-4 sm:text-white sm:bg-white sm:bg-opacity-10 sm:py-[.8rem] sm:px-2 sm:text-4xl sm:text-center sm:font-semibold sm:rounded-3xl bg-white border-4 text-center border-white text-white bg-opacity-10 px-2 text-2xl rounded-3xl font-semibold py-[.5rem]">
                            have I been scammed?
                        </div>
                        <p className="sm:text-xl sm:font-medium sm:w-full sm:text-center w-full text-[15px] text-white font-medium text-center">
                            Search and report suspected numbers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
    
};
