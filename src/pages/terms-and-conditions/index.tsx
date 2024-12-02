import { useEffect } from "react";

// Components Import
import SharedLayout from "@/components/layout/shared-layout";
import TextCard from "@/components/ui/typography/text-card";

// Data Import
import { termsAndCondition } from "@/data/terms-and-policy";

const TermsAndConditions = () => {
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        };

        scrollToHash();

        console.log("scrollToHash");

        window.addEventListener("hashchange", scrollToHash);

        return () => {
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, []);

    return (
        <SharedLayout>
            <div className="container-fluid mb-12 mt-8 lg:mt-16 lg:mb-16 px-6 lg:px-[15vmax] 2xl:px-[13vmax] 3xl:px-[15vmax]">
                <h1 className="text-3xl font-bold uppercase leading-[48px] text-primary">
                    Terms of sale
                </h1>

                {termsAndCondition.map((item, index) => (
                    <TextCard
                        key={index}
                        title={item.title}
                        id={item.id}
                        text={item.text}
                        text2={item.text2}
                    />
                ))}
            </div>
        </SharedLayout>
    );
};
export default TermsAndConditions;
