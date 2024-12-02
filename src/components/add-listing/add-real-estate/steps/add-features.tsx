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
import AdvancedCheckbox from "@/components/ui/form-fields/advanced-checkbox";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";

// Config Import
import { SERVER_BASE_URL } from "@/config/backend-routes";

const FeaturesSchema = z.object({
    featureIds: z
        .array(z.string())
        .nonempty("Please select at least one feature"),
});

type FeaturesSchemaType = z.infer<typeof FeaturesSchema>;

// ! Dummy data picked from server
const featuresData = [
    {
        id: 1,
        name: "Beachfront",
        imageUrl: "/icons/vacations.png",
        category: "Lot",
    },
    {
        id: 2,
        name: "Water View",
        imageUrl: "/icons/water-view.png",
        category: "Lot",
    },
    {
        id: 3,
        name: "Renovated",
        imageUrl: "/icons/renovated.png",
        category: "Lot",
    },
    {
        id: 4,
        name: "Office",
        imageUrl: "/icons/office.png",
        category: "Indoor",
    },
    {
        id: 5,
        name: "Fitness Center",
        imageUrl: "/icons/gym.png",
        category: "Indoor",
    },
    {
        id: 6,
        name: "Library",
        imageUrl: "/icons/library.png",
        category: "Indoor",
    },
    {
        id: 7,
        name: "Terrace",
        imageUrl: "/icons/terrace.png",
        category: "Outdoor",
    },
    {
        id: 8,
        name: "Pool",
        imageUrl: "/icons/pool.png",
        category: "Outdoor",
    },
];

export default function AddFeatures() {
    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FeaturesSchemaType>({
        defaultValues: {
            featureIds: store.featureIds.map((id) => id.toString()),
        },
        resolver: zodResolver(FeaturesSchema),
    });

    function handleFeatures(data: FeaturesSchemaType) {
        const featureIds = data.featureIds.map((id) => parseInt(id));

        console.log(featureIds);

        setStore({
            ...store,
            featureIds,
        });

        setStep(5);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Real Estate Features
            </Text>
            <form
                noValidate
                onSubmit={handleSubmit((data) => handleFeatures(data))}
            >
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                    {featuresData.map((item) => (
                        <AdvancedCheckbox
                            key={item.id}
                            value={item.id as number}
                            className="card-gradient w-full cursor-pointer rounded-lg border border-gray-lighter py-4 text-center lg:rounded-xl xl:p-6 xl:text-left"
                            inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-gray-lighter [&:checked:enabled~span]:border [&:checked:enabled~span]:border-gray-dark"
                            {...register("featureIds")}
                        >
                            <div className="relative inline-block h-8 w-8">
                                <img
                                    src={`${SERVER_BASE_URL}${item.imageUrl}`}
                                    alt={item.name}
                                    className="absolute inset-0 object-cover w-full h-full"
                                />
                            </div>
                            <p className="mt-4 text-sm font-bold xl:text-base">
                                {item.name}
                            </p>
                        </AdvancedCheckbox>
                    ))}
                </div>

                <FieldHelperText className="text-xs font-normal text-red">
                    {errors.featureIds?.message}
                </FieldHelperText>

                <CreateListingFooter onBack={() => setStep(3)} />
            </form>
        </div>
    );
}
