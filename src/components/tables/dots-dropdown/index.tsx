import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
    EllipsisHorizontalIcon,
    PencilIcon,
    ViewfinderCircleIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";

interface MenuItemProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (e: any) => void;
    edit?: boolean;
    preview?: boolean;
    delete?: boolean;
    chat?: boolean;
    reports?: boolean;
}

const dropdown = ["edit", "preview", "delete"];

export default function DotsDropdown({
    onClick,
    edit,
    preview,
    delete: del,
}: MenuItemProps) {
    const newDropdown = dropdown.filter((item) => {
        if (item === "edit" && edit) {
            return item;
        }
        if (item === "preview" && preview) {
            return item;
        }
        if (item === "delete" && del) {
            return item;
        }
    });

    return (
        <Menu as="div" className="relative inline-block">
            <div>
                <Menu.Button className="text-gray-dark">
                    <EllipsisHorizontalIcon className="h-auto w-5" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 top-full z-10 min-w-[160px] rounded-lg bg-white shadow-lg xl:mt-2 xl:min-w-[192px]">
                    <div className="rounded-lg p-2">
                        {newDropdown.map((item) => (
                            <Menu.Item
                                key={`reservation-${item}`}
                                as="button"
                                type="button"
                                className="flex w-full items-center gap-3 rounded-md p-2 text-left text-sm capitalize hover:bg-gray-lightest"
                                onClick={onClick}
                                id={item}
                            >
                                {item === "edit" && edit && (
                                    <>
                                        <PencilIcon className="h-auto w-5" />
                                        {item}
                                    </>
                                )}
                                {item === "preview" && preview && (
                                    <>
                                        <ViewfinderCircleIcon className="h-auto w-5" />
                                        {item}
                                    </>
                                )}
                                {item === "delete" && del && (
                                    <>
                                        <TrashIcon className="h-auto w-5" />
                                        {item}
                                    </>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
