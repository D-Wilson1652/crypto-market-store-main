import { UPLOAD_IMAGE_CONSTANTS } from "@/constants";

export const checkStorageAvailability = async () => {
    if (navigator.storage && navigator.storage.estimate) {
        const { quota, usage } = await navigator.storage.estimate();

        if (quota === undefined || usage === undefined) {
            return false;
        }
        console.log(`Quota: ${quota / (1024 * 1024)} MB`);
        console.log(`Usage: ${usage / (1024 * 1024)} MB`);

        const availableStorageMB = (quota - usage) / (1024 * 1024);
        return availableStorageMB >= UPLOAD_IMAGE_CONSTANTS.REQUIRED_STORAGE_MB;
    }

    return true;
};
