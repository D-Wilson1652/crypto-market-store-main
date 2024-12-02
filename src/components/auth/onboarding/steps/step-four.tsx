// Jotai Import
import { useAtom, useSetAtom } from "jotai";
import {
    onboardingStepAtom,
    onboardingAtom,
} from "@/components/auth/onboarding/context";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Zod Import
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailSchema } from "@/validations/common/email-validation";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";
import Input from "@/components/ui/form-fields/input";
import Radio from "@/components/ui/form-fields/radio";

// Zod
const StepFourSchema = z.object({
    email: EmailSchema.shape.email,
    preferredLanguage: z
        .string()
        .min(1, { message: "This field is required" })
        .max(255, { message: "This field is too long" }),
    referralCode: z.string().optional(),
});

type StepFourSchemaType = z.infer<typeof StepFourSchema>;

// JSX Component
export default function StepFour() {
    // Redux
    const { user } = useSelector((state: RootState) => state.userReducer);

    // Jotai
    const setStep = useSetAtom(onboardingStepAtom);
    const [store, setStore] = useAtom(onboardingAtom);

    // Zod Form
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<StepFourSchemaType>({
        defaultValues: {
            email: user?.email,
            preferredLanguage: store.preferredLanguage
                ? store.preferredLanguage
                : "english",
            referralCode: store.referralCode,
        },
        resolver: zodResolver(StepFourSchema),
    });

    function handleStepFour(data: StepFourSchemaType) {
        setStore((prev) => ({
            ...prev,
            email: data.email,
            preferredLanguage: data.preferredLanguage,
            referralCode: data.referralCode || "",
        }));

        setStep(5);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Account Information
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleStepFour(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="mb-4 grid grid-cols-1 gap-3 md:mb-6 xl:gap-4">
                        <div className="grid grid-cols-1 gap-3">
                            <Input
                                type="email"
                                label="Email"
                                placeholder="Email"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("email")}
                                error={errors.email?.message}
                                readOnly
                            />
                        </div>
                    </div>
                    <Text tag="h6" className="mb-4 !font-semibold">
                        Preferred Language
                    </Text>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        <Radio
                            label="English"
                            labelClassName="!ml-3 !text-gray-dark font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            value="english"
                            {...register("preferredLanguage")}
                        />
                        <Radio
                            label="Arabic"
                            value="arabic"
                            labelClassName="!ml-3 text-gray font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register("preferredLanguage")}
                        />
                        <Radio
                            label="Spanish"
                            value="spanish"
                            labelClassName="!ml-3 text-gray font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register("preferredLanguage")}
                        />
                        <Radio
                            label="Urdu"
                            value="urdu"
                            labelClassName="!ml-3 text-gray font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register("preferredLanguage")}
                        />
                        <Radio
                            label="Other"
                            value="other"
                            labelClassName="!ml-3 text-gray font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register("preferredLanguage")}
                        />
                    </div>

                    <div className="mt-4">
                        <Input
                            type="text"
                            label="Referral Code"
                            placeholder="Referral Code (Optional)"
                            labelClassName="!font-semibold lg:text-base"
                            {...register("referralCode")}
                            error={errors.referralCode?.message}
                        />
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(3)} />
            </form>
        </div>
    );
}
