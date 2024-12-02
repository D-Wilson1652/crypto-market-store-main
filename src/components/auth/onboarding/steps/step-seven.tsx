import { useNavigate } from "react-router-dom";

// Jotai Import
import { useAtom, useSetAtom } from "jotai";
import {
    onboardingStepAtom,
    onboardingAtom,
} from "@/components/auth/onboarding/context";

// Redux Import
import { useDispatch } from "react-redux";
import { updateUserOnboardingStatus } from "@/redux/reducer/user-reducer";
import { useCreateOnboardingMutation } from "@/redux/api/user-api";

// Zod Import
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NameSchema } from "@/validations/common/name-validation";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";
import Input from "@/components/ui/form-fields/input";
import Radio from "@/components/ui/form-fields/radio";
import Textarea from "@/components/ui/form-fields/textarea";

// Utils Import
import { responseToast } from "@/utils/response-toast";

// Config Import
import { Routes } from "@/config/routes";

// Types Import
import { Onboarding } from "@/components/auth/onboarding/type";

// Zod
const StepSevenSchema = z.object({
    regulatoryCompliance: z.object({
        pep: z.string(),
        residentOrCitizen: z.string(),
        financialCrime: z.string(),
    }),

    hearUsFrom: z.string().optional(),
    commentsOrRequest: z
        .string()
        .max(700, {
            message: "This field is too long",
        })
        .optional(),
    signature: NameSchema.shape.name,
    printName: NameSchema.shape.name,
    dateOfSignature: z.string().optional(),
});

type StepSevenSchemaType = z.infer<typeof StepSevenSchema>;

// JSX Component
export default function StepSeven() {
    const navigate = useNavigate();

    // Redux
    const dispatch = useDispatch();
    const [createOnboarding, { isLoading }] = useCreateOnboardingMutation();

    // Jotai
    const setStep = useSetAtom(onboardingStepAtom);
    const [store] = useAtom(onboardingAtom);

    // Zod Form
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<StepSevenSchemaType>({
        defaultValues: {
            regulatoryCompliance: {
                pep: store.regulatoryCompliance.pep ? "true" : "false",
                residentOrCitizen: store.regulatoryCompliance.residentOrCitizen
                    ? "true"
                    : "false",
                financialCrime: store.regulatoryCompliance.financialCrime
                    ? "true"
                    : "false",
            },
            hearUsFrom: store.hearUsFrom || "other",
            commentsOrRequest: store.commentsOrRequest,
            signature: store.signature,
            printName: store.printName,
            dateOfSignature:
                store.dateOfSignature || new Date().toISOString().split("T")[0],
        },
        resolver: zodResolver(StepSevenSchema),
    });

    async function handleStepSeven(data: StepSevenSchemaType) {
        // Extracting data from form
        const {
            regulatoryCompliance,
            hearUsFrom,
            commentsOrRequest,
            signature,
            printName,
            dateOfSignature,
        } = data;

        // Extracting data from store
        const photoOfGovernmentId =
            store.identityVerification.photoOfGovernmentId.split(",")[1];
        const selfiePhotoWithId =
            store.identityVerification.selfiePhotoWithId.split(",")[1];
        const authenticationCertificate =
            store.itemsInterest.authenticationCertificate;

        // Creating new object
        const newObj: Onboarding = {
            ...store,
            identityVerification: {
                ...store.identityVerification,
                photoOfGovernmentId,
                selfiePhotoWithId,
            },
            itemsInterest: {
                ...store.itemsInterest,
                authenticationCertificate: authenticationCertificate
                    ? authenticationCertificate.split(",")[1]
                    : null,
            },
            regulatoryCompliance: {
                pep: regulatoryCompliance.pep == "true",
                residentOrCitizen:
                    regulatoryCompliance.residentOrCitizen == "true",
                financialCrime: regulatoryCompliance.financialCrime == "true",
            },
            hearUsFrom: hearUsFrom || "",
            commentsOrRequest: commentsOrRequest || "",
            signature,
            printName,
            dateOfSignature: dateOfSignature || "",
        };

        try {
            const response = await createOnboarding(newObj);

            responseToast(response);

            if ("data" in response) {
                dispatch(updateUserOnboardingStatus());

                setTimeout(() => {
                    navigate(Routes.private.onboardingStepEnd);
                }, 0);
            }
        } catch (error) {
            console.error("handleStepSeven Error:", error);
        }
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Regulatory Compliance
            </Text>

            <form
                noValidate
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <Text tag="h6" className="mb-4 !font-semibold">
                        Are you a politically exposed person (PEP)?
                    </Text>
                    <div className="flex items-center gap-8">
                        <Radio
                            label="Yes"
                            labelClassName="!ml-3 !text-gray-dark font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            value="true"
                            {...register("regulatoryCompliance.pep")}
                        />
                        <Radio
                            label="No"
                            value="false"
                            labelClassName="!ml-3 text-gray font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register("regulatoryCompliance.pep")}
                        />
                    </div>
                </div>

                <div>
                    <Text tag="h6" className="mb-4 !font-semibold">
                        Are you a resident or citizen of a country subject to
                        international sanctions?
                    </Text>
                    <div className="flex items-center gap-8">
                        <Radio
                            label="Yes"
                            labelClassName="!ml-3 !text-gray-dark font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            value="true"
                            {...register(
                                "regulatoryCompliance.residentOrCitizen"
                            )}
                        />
                        <Radio
                            label="No"
                            value="false"
                            labelClassName="!ml-3 text-gray font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register(
                                "regulatoryCompliance.residentOrCitizen"
                            )}
                        />
                    </div>
                </div>

                <div>
                    <Text tag="h6" className="mb-4 !font-semibold">
                        Have you been convicted of any financial crime?
                    </Text>
                    <div className="flex items-center gap-8">
                        <Radio
                            label="Yes"
                            labelClassName="!ml-3 !text-gray-dark font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            value="true"
                            {...register("regulatoryCompliance.financialCrime")}
                        />
                        <Radio
                            label="No"
                            value="false"
                            labelClassName="!ml-3 text-gray font-normal"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register("regulatoryCompliance.financialCrime")}
                        />
                    </div>
                </div>
                <div>
                    <Text
                        tag="h3"
                        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                    >
                        Additional Information
                    </Text>
                    <div className="grid grid-cols-1 gap-4">
                        <Text tag="h6" className="mb-4 !font-semibold">
                            How did you hear about us?
                        </Text>
                        <div className="grid max-[500px]:grid-cols-1 grid-cols-2 gap-8">
                            <Radio
                                label="Social media"
                                labelClassName="!ml-3 !text-gray-dark font-normal"
                                inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                value="social media"
                                {...register("hearUsFrom")}
                            />
                            <Radio
                                label="Friend/referral"
                                value="friend/referral"
                                labelClassName="!ml-3 text-gray font-normal"
                                inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                {...register("hearUsFrom")}
                            />
                            <Radio
                                label="Online Advertisement"
                                value="online advertisement"
                                labelClassName="!ml-3 text-gray font-normal"
                                inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                {...register("hearUsFrom")}
                            />
                            <Radio
                                label="Other"
                                value="other"
                                labelClassName="!ml-3 text-gray font-normal"
                                inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                {...register("hearUsFrom")}
                            />
                        </div>

                        <Textarea
                            variant="outline"
                            label={"Comments or Requests"}
                            maxLength={700}
                            labelClassName="!mb-2 !text-base !font-semibold"
                            textareaClassName="h-[72px] lg:h-32 xl:h-40 w-full resize-none lg:rounded-xl"
                            {...register("commentsOrRequest")}
                            error={errors.commentsOrRequest?.message}
                        />
                        <p className="-mt-1 text-sm font-normal lg:text-base">
                            {watch("commentsOrRequest")?.length ?? 0}
                            /700
                        </p>
                    </div>
                </div>

                <div>
                    <Text
                        tag="h3"
                        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                    >
                        Confirmation
                    </Text>
                    <div className="grid grid-cols-1 gap-4">
                        <Input
                            variant="outline"
                            label={"Signature"}
                            labelClassName="!mb-2 !text-base !font-semibold"
                            {...register("signature")}
                            error={errors.signature?.message}
                        />
                        <Input
                            variant="outline"
                            label={"Print Name"}
                            labelClassName="!mb-2 !text-base !font-semibold"
                            {...register("printName")}
                            error={errors.printName?.message}
                        />
                        <Input
                            variant="outline"
                            label={"Date of Signature"}
                            readOnly
                            labelClassName="!mb-2 !text-base !font-semibold"
                            {...register("dateOfSignature")}
                            error={errors.dateOfSignature?.message}
                        />
                    </div>
                </div>

                <CreateListingFooter
                    onBack={() => setStep(6)}
                    onNext={handleSubmit(handleStepSeven)}
                    disabled={isLoading}
                />
            </form>
        </div>
    );
}
