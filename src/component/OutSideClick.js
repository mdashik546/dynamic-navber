"use client";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const OutsideClickWrapper = ({ children, onOutsideClick }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onOutsideClick?.(); // Optional chaining for safety
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onOutsideClick]);

    return <div ref={wrapperRef}>{children}</div>;
};
