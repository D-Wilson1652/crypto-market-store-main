import Dexie, { type EntityTable } from "dexie";

interface ListingImage {
    id: string;
    name: string;
    blob: Blob;
}

const db = new Dexie("add-listing-real-estate-images-c81d46955rg") as Dexie & {
    listingImages: EntityTable<ListingImage, "id">;
};

db.version(1).stores({
    listingImages: "++id, name, blob",
});

export type { ListingImage };
export { db };
