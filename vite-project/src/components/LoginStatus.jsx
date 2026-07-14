function LoginStatus() {
  const isLogin = true;
  const emergency = true;

  return (
    <>
      <p>
        {isLogin ? "Welcome" : "Please Login"}
      </p>

      {emergency && <h3>🚑 Emergency Service Available</h3>}
    </>
  );
}

export default LoginStatus;