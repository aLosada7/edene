interface ToastBodyProps {
    children: React.ReactNode;
}

const ToastBody = ({ children }: ToastBodyProps) => {
    return <p>{children}</p>;
};

export default ToastBody;
