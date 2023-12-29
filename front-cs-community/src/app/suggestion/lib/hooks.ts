"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { formSchema } from "./formSchema";
import { FormEvent } from "react";
import axios from "./axios";

export const useFn = () => {
  const mutation = useMutation(postSuggestion, {
    onSettled: () => {
      console.log("fait");
    },
  });

  async function postSuggestion(obj: any) {
    try {
      const res = await axios.post("/suggest", obj);
      toast.success("success, you will recieve a confirmation via email");
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.response?.data?.message || "something went wrong");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    const tempObj = {
      author: {
        name: data.nom,
        email: data.email,
        phoneIndex: parseInt(data.phoneIndex),
        phone: parseInt(data.phone),
        civility: data.civility,
        tag: data.tag.split(","),
        age: parseInt(data.age),
      },
      title: data.title,
      description: data.description,
    };

    console.log("tempObj", tempObj);

    mutation.mutateAsync(tempObj);

    // reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const reactHookSubmitter = handleSubmit(onSubmitHandler, onInvalid);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await reactHookSubmitter();
    console.log("submitted");
  };
  return {
    register,
    errors,
    onSubmit,
  };
};
