import BannerFilter from "./banner-filter";

export default function HelicopterHeroBanner() {
    return (
        <div className="pb-20">
            <img
                src="/images/categories/helicopter/hero-banner/helicopter-banner.png"
                alt="hero-banner"
                className="w-full object-cover"
            />

            <div className="bg-[#A5C8DB] py-20 flex items-center justify-center lg:-translate-y-16">
                <div className="sm:w-10/12 md:w-9/12 xl:w-6/12">
                    <BannerFilter />
                </div>
            </div>
        </div>
    );
}
