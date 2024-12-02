import { useState, useCallback } from "react";

export function useShowHidePassword() {
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const handleShowPassword = useCallback(
        (type: "password" | "confirmPassword") => {
            setShowPassword((prevState) => ({
                ...prevState,
                [type]: !prevState[type],
            }));
        },
        []
    );

    return { showPassword, handleShowPassword };
}
