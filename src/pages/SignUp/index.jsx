import Icon from "~/components/Icon";
import Input from "~/components/Input";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { useState } from "react";

//Validando os dados
const validationSchema = yup.object().shape({
  name: yup.string().required("Preencha seu nome"),
  username: yup.string().required("Preencha seu username"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Preencha seu email"),
  password: yup.string().required("Preencha sua senha"),
});

function SignUp() {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [created, setCreated] = useState(false);
  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios({
        method: "post",
        baseURL: import.meta.env.VITE_API_URL,
        url: "/users",
        data: values,
      });

      console.log(res);
      if (res.status === 201) {
        setCreated(true);
      }
    },
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
  });

  // console.log(formik.errors);

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  if (created) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container max-w-5xl flex justify-center ">
          <img className="w-32 md:w-40" src="/logo-bg-white.svg" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="p-4 flex items-center space-x-4">
          <a href="/">
            <Icon name="back" />
          </a>
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>

        <form className=" p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            label="Seu nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
          />

          <Input
            name="username"
            type="text"
            placeholder="Digite um nome de usuário"
            label="Seu nome de usuário"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && formik.errors.username}
          />
          <Input
            name="email"
            type="text"
            placeholder="Digite seu email"
            label="Seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            label="Sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />

          <button
            type="submit"
            className="block w-full text-white bg-red-500 text-lg md:text-xl px-6 py-3 rounded-xl text-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Carregando..." : "Criar minha conta"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default SignUp;

//Colocar um componente de loading no Lugar de Carregando...
