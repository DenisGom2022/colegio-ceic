import styles from "./Login.module.css";
import { Flex } from "@radix-ui/themes";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";

const Login = () => {
  return (
    <div className={styles["container-login"]}>
      <Flex>
        <LoginImage />
        <LoginForm />
      </Flex>
    </div>
  );
};

export default Login;
