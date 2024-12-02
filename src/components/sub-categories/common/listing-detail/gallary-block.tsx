import { useAtom } from "jotai";

// Components Import
import { drawerStateAtom } from "@/components/drawers/drawer-state-atom";
import Button from "@/components/ui/button";

// Icons Import
import { GridIcon } from "@/components/icons/grid";

interface GallaryBlockProps {
    images: string[];
}

export default function GallaryBlock({ images }: GallaryBlockProps) {
    const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);

    function handleClick() {
        setDrawerState({
            ...drawerSate,
            isOpen: true,
            placement: "bottom",
            view: "PHOTO_GALLERY",
            customSize: "100%",
            data: images,
        });
    }

    return (
        <div className="relative -mx-4 mb-8 sm:-mx-6 md:-mx-0 md:mt-4 lg:mb-14 lg:mt-6">
            <div className="grid h-[260px] grid-cols-1 grid-rows-2 gap-0 overflow-hidden transition-all duration-300 sm:h-[320px] md:h-[400px] md:grid-cols-[1fr_0.5fr] md:gap-1 md:rounded-xl lg:h-[500px] xl:h-[600px] xl:gap-2 3xl:h-[700px] 3xl:gap-3">
                {images.length === 1 && (
                    <div
                        className="relative h-full col-span-3 row-span-3 cursor-pointer"
                        onClick={handleClick}
                    >
                        <img
                            src={images[0]}
                            alt="pic"
                            className="object-cover absolute inset-0 w-full h-full"
                        />
                    </div>
                )}

                {images.length === 2 && (
                    <>
                        <div
                            className="relative row-span-3 h-full cursor-pointer"
                            onClick={handleClick}
                        >
                            <img
                                src={images[0]}
                                alt="pic"
                                className="object-cover absolute inset-0 w-full h-full"
                            />
                        </div>
                        <div
                            className="relative row-span-3 h-full cursor-pointer"
                            onClick={handleClick}
                        >
                            <img
                                src={images[1]}
                                alt="pic"
                                className="object-cover absolute inset-0 w-full h-full"
                            />
                        </div>
                    </>
                )}

                {images.length > 2 && (
                    <>
                        <div
                            className="relative row-start-1 row-end-3 h-full cursor-pointer"
                            onClick={handleClick}
                        >
                            <img
                                src={images[0]}
                                alt="pic"
                                className="object-cover absolute inset-0 w-full h-full"
                            />
                        </div>
                        <div
                            className="relative hidden h-full cursor-pointer md:block"
                            onClick={handleClick}
                        >
                            <img
                                src={images[1]}
                                alt="pic"
                                className="object-cover absolute inset-0 w-full h-full"
                            />
                        </div>
                        <div
                            className="relative hidden h-full cursor-pointer md:block"
                            onClick={handleClick}
                        >
                            <img
                                src={images[2]}
                                alt="pic"
                                className="object-cover absolute inset-0 w-full h-full"
                            />
                        </div>
                    </>
                )}
            </div>

            <Button
                size="sm"
                variant="outline"
                onClick={handleClick}
                className="absolute bottom-3 right-3 !bg-white px-2 py-1.5 text-sm !font-bold leading-4 text-gray-dark md:bottom-5 md:right-5 xl:py-2 2xl:px-3 2xl:text-base 3xl:bottom-8 3xl:right-8 3xl:px-4 3xl:leading-6 4xl:px-5 4xl:py-2.5"
            >
                <GridIcon className="mr-2 h-3 w-3" />
                View <span className="hidden px-1 lg:block"> more </span> photos
            </Button>
        </div>
    );
}
