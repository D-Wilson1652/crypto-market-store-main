import { useAtom, useSetAtom } from "jotai";
import { stepAtom, storeAtom } from "@/components/add-listing/add-car/context";

// Zod Import
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Textarea from "@/components/ui/form-fields/textarea";
import Text from "@/components/ui/typography/text";
import Input from "@/components/ui/form-fields/input";

// Zod Schema
const ListingInfoSchema = z.object({
    name: z
        .string()
        .min(1, "Please enter the name of your car")
        .max(50, "Name is too long"),
    description: z
        .string()
        .min(1, "Please enter the description of your car")
        .max(700, "Description is too long"),
    price: z
        .number({
            required_error: "This field is required!",
            invalid_type_error: "This field is required!",
        })
        .min(1, { message: "This field is required!" }),
});

type ListingInfoSchemaType = z.infer<typeof ListingInfoSchema>;

// JSX Component
export default function ListingInfo() {
    // Jotai
    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);

    // Zod Form
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ListingInfoSchemaType>({
        defaultValues: {
            name: store.name,
            description: store.description,
            price: store.price === 0 ? undefined : store.price,
        },
        resolver: zodResolver(ListingInfoSchema),
    });

    function handleListingDetails(data: ListingInfoSchemaType) {
        // Extracting data from the form
        const { name, description, price } = data;

        // Updating the store
        setStore({
            ...store,
            name,
            description,
            price,
        });
        console.log(data);
        setStep(3);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Car Information
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleListingDetails(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="grid grid-cols-1">
                        <Textarea
                            variant="outline"
                            label={"What's the name of your car?"}
                            labelClassName="!font-semibold lg:text-base"
                            textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
                            maxLength={50}
                            {...register("name")}
                            error={errors.name?.message}
                        />
                        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
                            {watch("name")?.length ?? 0}
                            /50
                        </p>
                    </div>

                    <div className="grid grid-cols-1">
                        <Textarea
                            variant="outline"
                            label={"Describe your listing"}
                            className="mt-6"
                            maxLength={700}
                            labelClassName="!font-semibold lg:text-base"
                            textareaClassName="h-[72px] lg:h-32 xl:h-40 w-full resize-none lg:rounded-xl "
                            {...register("description")}
                            error={errors.description?.message}
                        />
                        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
                            {watch("description")?.length ?? 0}
                            /700
                        </p>
                    </div>

                    <div className="grid grid-cols-1">
                        <Input
                            variant="outline"
                            label="Enter the price of your car"
                            className="mt-6"
                            placeholder="Enter the price"
                            type="number"
                            labelClassName="!font-semibold lg:text-base"
                            {...register("price", {
                                valueAsNumber: true,
                            })}
                            error={errors.price?.message}
                            startIcon={<span className="text-gray">$</span>}
                        />
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(1)} />
            </form>
        </div>
    );
}
