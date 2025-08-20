import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import "./AdminIndex.css";

export default function AdminIndex() {
    return (
        <div className="admin-layout">
            <header className="admin-header">
                <Header />
            </header>

            <div className="admin-body">
                <aside className="admin-menu">
                    <Menu />
                </aside>
                <main className="admin-main">
                    <Main />
                </main>
            </div>

            <footer className="admin-footer">
                <Footer />
            </footer>
        </div>
    );
}
