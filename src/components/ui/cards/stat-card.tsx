import Text from "@/components/ui/typography/text";
import { StatsType } from "@/types/api-types/user";

interface PricingCardTypes {
    data: StatsType;
}

export default function StatCard({ data }: PricingCardTypes) {
    return (
        <div className="card-gradient rounded-lg border-2 border-gray-lighter p-6 transition-all duration-200 hover:shadow-card md:rounded-xl md:p-8 lg:p-11">
            <Text className="text-sm text-gray md:!text-sm 2xl:!text-base font-semibold">
                {data.title}
            </Text>

            <Text
                tag="h2"
                className="py-2 text-xl md:!text-[22px] lg:py-4 xl:py-5 2xl:!text-[26px] 4xl:!text-3xl"
            >
                {data.count}
            </Text>

            <Text className="text-sm text-gray md:!text-sm 2xl:!text-base">
                {data.description}
            </Text>
        </div>
    );
}
