import { atom, useAtomValue, useSetAtom } from "jotai";

const continentAtom = atom<string | null>(null);
const countryAtom = atom<string | null>(null);

export const useRealEstateCategory = () => {
    const continent = useAtomValue(continentAtom);
    const setContinent = useSetAtom(continentAtom);

    const country = useAtomValue(countryAtom);
    const setCountry = useSetAtom(countryAtom);

    return {
        continent,
        setContinent,
        country,
        setCountry,
    };
};
