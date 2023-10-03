import { useFormik } from "formik";
import {
  AccountButton,
  Error,
  Form,
  LoginForm,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux-store/slice/UserSlice";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { purchase } from "../redux-store/utils/cartUtils";
import { emptyCart } from "../redux-store/slice/CartSlice";

export const Purchase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedUser = useSelector((state) => state.user.loggedUser);
  let cart = useSelector((state) => state.cart.cartItems).filter(
    (x) => x.email == loggedUser.email
  );

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .trim()
      .required("Requerido"),
    telefono: Yup.string()
      .trim()
      .matches(/^[0-9]+$/, "Número de teléfono inválido")
      .required("Requerido"),
    ciudad: Yup.string()
      .trim()
      .required("Requerido"),
    direccion: Yup.string()
      .trim()
      .required("Requerido"),
    codigoPostal: Yup.string()
      .trim()
      .required("Requerido"),
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        nombre: "",
        telefono: "",
        ciudad: "",
        direccion: "",
        codigoPostal: ""
      },
      onSubmit(values, { resetForm }) {
        console.log("a")
        resetForm();
        const purchaseInfo = {
          nombre: values.nombre,
          telefono: values.telefono,
          ciudad: values.ciudad,
          direccion: values.direccion,
          codigoPostal: values.codigoPostal
        }
        purchase(cart, purchaseInfo);
        dispatch(
          emptyCart()
        );
        navigate("/success");
      },
      validationSchema,
    });

  return <LoginForm>
      <h2>Ingrese sus datos de envío</h2>
      <Form>
        <div style={{ width: "80%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.nombre}
            label="Nombre"
            type="text"
            name="nombre"
          />
          {errors.nombre && touched.nombre && <Error>{errors.nombre}</Error>}
        </div>
        <div style={{ width: "80%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.telefono}
            label="Telefono"
            type="text"
            name="telefono"
          />
          {errors.telefono && touched.telefono && <Error>{errors.telefono}</Error>}
        </div>
        <div style={{ width: "80%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.ciudad}
            label="Ciudad"
            type="text"
            name="ciudad"
          />
          {errors.ciudad && touched.ciudad && <Error>{errors.ciudad}</Error>}
        </div>
        <div style={{ width: "80%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.direccion}
            label="Direccion"
            type="text"
            name="direccion"
          />
          {errors.direccion && touched.direccion && <Error>{errors.direccion}</Error>}
        </div>
        <div style={{ width: "80%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.codigoPostal}
            label="Codigo postal"
            type="text"
            name="codigoPostal"
          />
          {errors.codigoPostal && touched.codigoPostal && <Error>{errors.codigoPostal}</Error>}
        </div>
        <AccountButton
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type={"submit"}
          value={"Enviar"}
        />
      </Form>
    </LoginForm>
};
