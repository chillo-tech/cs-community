"use client";

import { useFn } from "@/app/suggestion/lib/hooks";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { MenuProps } from "./lib/constants";
import { civilities, phoneIndexes, tags } from "./lib/mockdata";
import styles from "./page.module.scss";
import NavBar from "@/app/suggestion/components/navbar";
import Footer from "@/app/suggestion/components/footer";
import Link from "next/link";
import GoWhatsappBtn from "./components/goWhatsapp";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <NavBar />

      <div className={styles.container}>
        <header className="bg-gradient-to-r from-blue-700 via-blue-400 to-green-500 py-12">
          <h2>Avez vous une idee de video ? </h2>
          <p>
            Sentez vous libre de remplir ce formulaire, et je ferais de mon
            mieux pour creer une video a propos du sujet que vous proposez
          </p>
        </header>
        <Main />
      </div>

      <Footer />
      <GoWhatsappBtn />
    </QueryClientProvider>
  );
}

const Main = () => {
  const {
    handleChangeByTagName,
    handleChangeByTagNameAuthor,
    handleSubmit,
    handleChangeTag,
    handlePhoneIndex,
    handleCivility,
    suggestion,
  } = useFn();
  return (
    <main>
      <form className={styles.form}>
        <TextField
          size="small"
          label="Nom"
          className={styles.inputLarge}
          variant="outlined"
          value={suggestion?.author.name}
          placeholder="Please enter your name here"
          onChange={handleChangeByTagNameAuthor}
          name="author.name"
        />
        <TextField
          size="small"
          label="Email"
          variant="outlined"
          className={styles.inputLarge}
          type="email"
          value={suggestion?.author.email}
          placeholder="Please enter your email here"
          onChange={handleChangeByTagNameAuthor}
          name="author.email"
        />

        <FormControl>
          <InputLabel
            id="demo-multiple-name-label"
            sx={{ position: "absolute", left: 0, top: -6 }}
          >
            Index Telephonique
          </InputLabel>
          <Select
            size="small"
            value={suggestion.author.phoneIndex}
            onChange={handlePhoneIndex}
            input={<OutlinedInput label="Index Telephonique" size="small" />}
            MenuProps={MenuProps}
            // sx={{ width: "100%" }}
          >
            {phoneIndexes.map((phoneIndex, idx) => (
              <MenuItem key={phoneIndex + idx} value={phoneIndex}>
                {phoneIndex}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          size="small"
          label="numero de Telephone"
          variant="outlined"
          type="number"
          value={suggestion?.author.phone}
          placeholder="Please enter your phone number here"
          onChange={handleChangeByTagNameAuthor}
          name="author.phone"
          aria-valuemin={1}
        />
        <FormControl className={styles.inputLarge}>
          <InputLabel
            id="demo-multiple-name-label"
            sx={{ position: "absolute", left: 0, top: -6 }}
          >
            Tag
          </InputLabel>
          <Select
            size="small"
            value={suggestion.author.tag[0] || ""}
            onChange={handleChangeTag}
            input={<OutlinedInput label="Tag" size="small" />}
            MenuProps={MenuProps}
          >
            {tags.map((tag, idx) => (
              <MenuItem key={tag + idx} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.inputLarge}>
          <InputLabel
            id="demo-multiple-name-label"
            sx={{ position: "absolute", left: 0, top: -6 }}
          >
            Civilite
          </InputLabel>
          <Select
            size="small"
            value={suggestion.author.civility}
            onChange={handleCivility}
            input={<OutlinedInput label="Civilite" size="small" />}
            MenuProps={MenuProps}
          >
            {civilities.map((civility, idx) => (
              <MenuItem key={civility + idx} value={civility}>
                {civility}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          size="small"
          className={styles.inputLarge}
          label="Age"
          variant="outlined"
          type="number"
          value={suggestion?.author.age}
          placeholder="Please enter your age here"
          onChange={handleChangeByTagNameAuthor}
          name="author.age"
          aria-valuemin={1}
        />

        <TextField
          size="small"
          label="Titre"
          variant="outlined"
          placeholder="Please enter the title of the video here"
          name="title"
          onChange={handleChangeByTagName}
          className={styles.inputLarge}
          value={suggestion.title}
        />

        <TextField
          // size="small"
          multiline
          minRows={4}
          maxRows={6}
          className={styles.inputLarge}
          label="description"
          variant="outlined"
          placeholder="Please enter a description here here"
          name="description"
          onChange={handleChangeByTagName}
          value={suggestion.description}
        />
      </form>
      {/* <button className={styles.submitButton}>submit</button> */}
      <button
        onClick={handleSubmit}
        className="text-center flex mx-auto h-fit py-2 mt-1 justify-items-center items-center bg-blue-600 shadow-sm rounded-lg px-4"
      >
          <span className="font-extralight text-xl text-white "> SUBMIT</span>
      </button>
    </main>
  );
};
