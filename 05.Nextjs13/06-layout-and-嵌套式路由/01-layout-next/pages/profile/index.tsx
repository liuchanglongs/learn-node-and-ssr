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

const Profile: FC<IProps> & IStaticProps = function (props) {
  const { children } = props;
  return (
    <div className="profile">
      <div>Profile</div>
    </div>
  );
};
export default Profile;
Profile.displayName = "Profile"; // 方便以后调试用的
Profile.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <NestLayout>{page}</NestLayout>
    </Layout>
  );
};
