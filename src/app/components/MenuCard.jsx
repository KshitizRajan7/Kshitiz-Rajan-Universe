'use client';
import { useEffect, useRef } from "react";

export default function MenuCard({
    open,
    items = [],
    color = "blue-500",
    position = {},
    onClose,
    title = "Menu",
}) {
    const ref = useRef();

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose && onClose();
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open, onClose]);

    return (
        <div
            ref={ref}
            className={`
        absolute rounded-xl bg-white/10 backdrop-blur-sm text-white p-6 border-2
        transition-all duration-500 shadow-lg
        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
            style={{
                borderColor: `var(--tw-border-opacity) #3b82f6`, // Tailwind blue-500
                ...position,
            }}
        >
            <h3 className={`font-bold mb-4 text-xl text-${color}`}>{title}</h3>
            <ul className="space-y-4">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className={`flex items-center space-x-3 cursor-pointer hover:text-${color}`}
                    >
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-10 h-10 rounded-full object-cover border-2 border-white"
                            />
                        )}
                        <span className="font-medium">{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
