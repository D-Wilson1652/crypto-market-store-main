import { FaInstagram, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

// Constants Import
import { SOCIAL_MEDIA_LINKS } from "@/constants";

const FooterBottom = () => {
    return (
        <div>
            {/* horizontal line */}
            <div className="w-full h-px bg-[#DFDEDB] mt-5 mb-8" />

            <div className="px-4 sm:px-6  lg:px-14 3xl:px-18">
                <div className="container flex flex-col gap-y-6 sm:flex-row justify-between items-center">
                    {/* Copyeight */}

                    <p className="text-xs text-gray-400">
                        Copyright © {new Date().getFullYear()} - Crypto Market
                        Store
                    </p>

                    {/* Socials */}
                    <div className="flex items-center gap-6">
                        <a
                            className={styles.socialContainer}
                            href={SOCIAL_MEDIA_LINKS.INSTAGRAM}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram className={styles.socialIcon} />
                        </a>

                        <a
                            className={styles.socialContainer}
                            href={SOCIAL_MEDIA_LINKS.TWITTER}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsTwitterX className={styles.socialIcon} />
                        </a>

                        <a
                            className={styles.socialContainer}
                            href={SOCIAL_MEDIA_LINKS.DISCORD}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaDiscord className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    socialContainer:
        "rounded-full ring-offset-1 hover:ring-1 ring-white p-2 cursor-pointer",
    socialIcon: "w-5 h-5 text-white",
};

export default FooterBottom;
