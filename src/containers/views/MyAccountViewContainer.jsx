import { useEffect } from "react";
import { MyAccountView } from "../../components/MyAccountView";
import { useAuthContext } from "../../contexts/Auth";
import { useFetchApi } from "../../hooks/useFetchApi";
import { useMyAccountForm } from "../../components/MyAccountForm/useMyAccountForm";
import { useChangePasswordForm } from "../../components/ChangePasswordForm/useChangePasswordForm"
import { check } from "prettier";

export const MyAccountViewContainer = () => {
  const { auth, setAuth } = useAuthContext();

  const { data, startFetch } = useFetchApi("/api/users/me/avatar", "POST", {
    headers: {},
  });

  const { startFetch: changePassword } = useFetchApi("/auth/change-password", "PATCH");

  const { startFetch: myAccount } = useFetchApi("/api/users/me", "PUT");

  const myAccountForm = useMyAccountForm({
    initialValues: {
      name: auth.user.name,
      email: auth.user.email,
      phone: auth.user.phone
    },
    onSubmit: (values) => {
      myAccount(JSON.stringify(values))
    }
  })

  const ChangePasswordForm = useChangePasswordForm({
    onSubmit: (values) => {
      changePassword(JSON.stringify({
        password: values.password,
        newpassword: values.new_password
      }))
    }
  })

  function onChangeAvatar(e) {
  const form = new FormData();
  const file = e.target.files[0];
  form.append("avatar", file);
  startFetch(form);
}

  useEffect(() => {
    if (!data?.avatar) {
      return
    }

    setAuth({
      ...auth,
      user:{
        ...auth.user,
        avatar: data.avatar
      }
    })
  },[data])

  return <MyAccountView onChangeAvatar={onChangeAvatar} user={auth?.user} myAccountFormProps={myAccountForm}  changePasswordFormProps={ChangePasswordForm}/>;
};
