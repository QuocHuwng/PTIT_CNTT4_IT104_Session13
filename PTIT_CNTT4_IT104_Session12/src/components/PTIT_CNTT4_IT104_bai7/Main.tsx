import Cart from "./Cart";

const Main = () => {
    return (
        <main className="cart-grid">
            {Array.from({ length: 12 }).map((_, idx) => (
                <Cart key={idx} />
            ))}
        </main>
    );
};
export default Main;
