import FooterComponent from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import SEO from "@/components/reactHelmet";



export default function Mainlayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SEO
                title="FraudWall | About"
                description="A crowd sourced AI powered platform for reporting and verifying fraudulent numbers, social accounts and stolen devices"
                canonical="https://fraudwall.ai"
                twitter_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/twitter-image_gmmbb1.png"
                og_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/opengraph-image_o7nbj4.png"
                og_url="https://fraudwall.ai/terms"
            />

            <header>
                <NavbarComponent />
            </header>
         

            <div className="">

                {/* Ensure main takes up all remaining space */}
                <main className="flex-grow flex-1">{children}</main>

                {/* Footer should always be at the bottom */}
                <footer className="bg-custom-footer-bg  w-full">
                    <FooterComponent />
                </footer>
            </div>
        </>
    );
};