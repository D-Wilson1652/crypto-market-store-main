import { useAtom, useSetAtom } from "jotai";
import {
    stepAtom,
    storeAtom,
} from "@/components/add-listing/add-real-estate/context";

// Zod Import
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Input from "@/components/ui/form-fields/input";
import Text from "@/components/ui/typography/text";

const FormDataSchema = z.object({
    country: z.string().min(1, "Country is required!"),
    city: z.string().min(1, "City is required!"),
    region: z.string().min(1, "Region is required!"),
    location: z.object({
        latitude: z
            .number({
                required_error: "Latitude is required!",
                invalid_type_error: "Latitude is required!",
            })
            .refine((val) => val >= -90 && val <= 90, {
                message: "Latitude must be between -90 and 90",
            }),

        longitude: z
            .number({
                required_error: "Longitude is required!",
                invalid_type_error: "Longitude is required!",
            })
            .refine((val) => val >= -180 && val <= 180, {
                message: "Longitude must be between -180 and 180",
            }),
    }),
});

type FormDataType = z.infer<typeof FormDataSchema>;

export default function AddLocation() {
    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormDataType>({
        defaultValues: {
            country: store.country,
            city: store.city,
            region: store.region,
            location: {
                latitude:
                    store.location.latitude === 0
                        ? undefined
                        : store.location.latitude,
                longitude:
                    store.location.longitude === 0
                        ? undefined
                        : store.location.longitude,
            },
        },
        resolver: zodResolver(FormDataSchema),
    });

    function handleFormData(data: FormDataType) {
        setStore({
            ...store,
            country: data.country,
            city: data.city,
            region: data.region,
            location: data.location,
        });
        console.log(data);
        setStep(4);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Real Estate Location
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleFormData(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="grid grid-cols-1 gap-6">
                        <Input
                            type="text"
                            labelClassName="!font-semibold lg:text-base"
                            label="In which country is your property located?"
                            placeholder="country..."
                            {...register("country")}
                            error={errors.country?.message}
                        />

                        <Input
                            type="text"
                            labelClassName="!font-semibold lg:text-base"
                            label="What is the city of your property?"
                            placeholder="city..."
                            {...register("city")}
                            error={errors.city?.message}
                        />

                        <Input
                            type="text"
                            labelClassName="!font-semibold lg:text-base"
                            label="What is the region of your property?"
                            placeholder="region..."
                            {...register("region")}
                            error={errors.region?.message}
                        />

                        <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                            <Input
                                type="number"
                                label="Latitude"
                                labelClassName="!font-semibold lg:text-base"
                                placeholder="Latitude"
                                {...register("location.latitude", {
                                    valueAsNumber: true,
                                })}
                                error={errors.location?.latitude?.message}
                            />

                            <Input
                                type="number"
                                label="Longitude"
                                labelClassName="!font-semibold lg:text-base"
                                placeholder="Longitude"
                                {...register("location.longitude", {
                                    valueAsNumber: true,
                                })}
                                error={errors.location?.longitude?.message}
                            />
                        </div>
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(2)} />
            </form>
        </div>
    );
}
