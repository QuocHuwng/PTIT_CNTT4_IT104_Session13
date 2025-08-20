import React from "react";

type ColorBoxProps = {
    color: string;
};

export default function ColorBox({ color }: ColorBoxProps) {
    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                backgroundColor: color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px"
            }}
        >
            Box
        </div>
    );
}