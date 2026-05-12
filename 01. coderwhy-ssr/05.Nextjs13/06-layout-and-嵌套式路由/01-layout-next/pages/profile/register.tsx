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
const Register: FC<IProps> & IStaticProps = memo(function (props) {
  const { children } = props;
  return (
    <div className="register">
      <div>Register</div>
    </div>
  );
});
export default Register;
Register.displayName = "Register"; // 方便以后调试用的
Register.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <NestLayout>{page}</NestLayout>
    </Layout>
  );
};
