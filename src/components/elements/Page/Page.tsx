type Props = {
    children?: React.ReactNode;
    className?: string;
};

export const Page: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <section className={`relative w-full max-w-screen-2xl h-screen p-5 m-auto ${className}`}>{children}</section>
    );
};
