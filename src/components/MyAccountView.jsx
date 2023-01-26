import { View } from "./View";
import { Avatar } from "./Avatar";
import {MyAccountForm} from "./MyAccountForm"
import { ChangePasswordForm } from "./ChangePasswordForm/ChangePasswordForm";

export const MyAccountView = ({ user, onChangeAvatar, changePasswordFormProps, myAccountFormProps}) => {
  return (
    <View>
      <div className="flex flex-col items-center">
        <Avatar src={user?.avatar} onChange={onChangeAvatar} />
        <h2 className="text-2xl font-semibold">{user?.name}</h2>
      </div>
      <div className="space-y-16">
        <MyAccountForm {...myAccountFormProps} className="md:container md:mx-auto md:max-w-lg mt-8"/>
        <ChangePasswordForm {...changePasswordFormProps} className="md:container md:mx-auto md:max-w-lg mt-8"/>

      </div>
    </View>
  );
};
