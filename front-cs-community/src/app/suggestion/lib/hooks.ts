"use client";

import { SuggestionType } from "@/app/suggestion/types/Suggestion";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  useMutation
} from "react-query";
import { apiUri, token } from "./constants";

const initFormObj = {
  author: {
    name: "",
    email: "",
    phoneIndex: "",
    phone: "",
    tag: [],
    civility: "",
    age: "",
  },
  title: "",
  description: "",
};

export const useFn = () => {
  const [suggestion, setSuggestion] = useState<SuggestionType>(initFormObj);

  const mutation = useMutation(postSuggestion, {
    onSettled: () => {
      setSuggestion(initFormObj);
    },
  });

  const handleChangeByTagName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSuggestion((prev) => {
      let temp = { ...prev };
      const key = e.target.name as keyof typeof temp;
      // @ts-ignore
      temp[key] = e.target.value;
      return temp;
    });
  };

  const handleChangeByTagNameAuthor = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSuggestion((prev) => {
      let temp = { ...prev };
      const key = e.target.name.split(".")[1] as keyof typeof temp;
      // @ts-ignore
      temp.author[key] = e.target.value;
      return temp;
    });
  };

  const handleSubmit = () => {
    console.log("suggestion", suggestion);

    const tempObj = {
      ...suggestion,
      author: {
        ...suggestion.author,
        phone: parseInt(suggestion.author.phone),
        phoneIndex: parseInt(suggestion.author.phoneIndex),
        age: parseInt(suggestion.author.age),
      },
    };
    // @ts-ignore
    delete tempObj.tag;
    // Mutations
    mutation.mutateAsync(tempObj);
  };

  async function postSuggestion(obj: any) {
    try {
      const res = await axios.post(
        apiUri+"/suggest",
        obj,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success("success, you will recieve a confirmation via email");
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.response?.data?.message || "something went wrong");
    }
  }

  const handleChangeTag = (e: SelectChangeEvent<string>) => {
    setSuggestion((prev) => {
      let temp = { ...prev };
      temp.author.tag = [e.target.value];
      return temp;
    });
  };
  const handlePhoneIndex = (e: SelectChangeEvent<string>) => {
    setSuggestion((prev) => {
      let temp = { ...prev };
      temp.author.phoneIndex = e.target.value;
      return temp;
    });
  };
  const handleCivility = (e: SelectChangeEvent<string>) => {
    setSuggestion((prev) => {
      let temp = { ...prev };
      temp.author.civility = e.target.value;
      return temp;
    });
  };

  return {
    handleChangeByTagName,
    handleChangeByTagNameAuthor,
    handleSubmit,
    handleChangeTag,
    handlePhoneIndex,
    handleCivility,
    suggestion,
  };
};
