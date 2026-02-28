import { memo, ReactElement } from "react";
import type { FC } from "react";
import Layout from "../../components/layout";
import NestLayout from "../../components/nest-layout";
export interface IStaticProps {
  getLayout?: (page: ReactElement) => ReactElement;
}

export interface IProps {
  children?: ReactElement;
  // ...
}
const Login: FC<IProps> & IStaticProps = function (props) {
  const { children } = props;
  return (
    <div className="login">
      <div>Login</div>
    </div>
  );
};
export default Login;
Login.displayName = "Login"; // 方便以后调试用的
Login.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <NestLayout>{page}</NestLayout>
    </Layout>
  );
};
