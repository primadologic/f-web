

export default function CustomHeader({title, description}: {title: string, description: string}) {

    return (
        <section className="bg-custom-primary-500 text-primary-foreground">
            <div className="flex flex-col sm:py-12 justify-center items-center text-center sm:gap-2 gap-1 py-8" >
                <h1 className="sm:text-5xl font-semibold text-2xl px-5">{title}</h1>
                <div className="sm:text-xl font-medium text-base px-5">{description}</div>
            </div>
        </section>
    )
    
};
