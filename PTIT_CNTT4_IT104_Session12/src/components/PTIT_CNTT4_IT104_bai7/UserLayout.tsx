import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Cart from "./Cart";
import Article from "./Article";
import "./UserLayout.css";

const UserLayout: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <Navbar />
            <Menu />
            <main className="cart-grid">
                {Array.from({ length: 12 }).map((_, index) => (
                    <Cart key={index} />
                ))}
            </main>
            <Article />
        </div>
    );
};

export default UserLayout;
