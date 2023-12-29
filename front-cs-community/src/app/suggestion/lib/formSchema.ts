import * as yup from "yup";
import { tags } from "./mockdata";

export const formSchema = yup.object().shape({
  nom: yup.string().required(),
  email: yup.string().email().required(),
  phoneIndex: yup.number().min(1).max(999).required(),
  phone: yup.number().min(1).required(),
  tag: yup.string().oneOf(tags).required(),
  civility: yup.string().required(),
  description: yup.string().required(),
  title: yup.string().required(),
});

