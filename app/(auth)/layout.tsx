type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
