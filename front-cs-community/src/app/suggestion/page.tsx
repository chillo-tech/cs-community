"use client";

import Footer from "@/app/suggestion/components/footer";
import NavBar from "@/app/suggestion/components/navbar";
import { useFn } from "@/app/suggestion/lib/hooks";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import GoWhatsappBtn from "./components/goWhatsapp";
import { civilities, phoneIndexes, tags } from "./lib/mockdata";
import styles from "./page.module.scss";
import CountrySelect from "./components/countrySelect";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {/* <NavBar /> */}

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

      {/* <Footer /> */}
      {/* <GoWhatsappBtn /> */}
    </QueryClientProvider>
  );
}

const Main = () => {
  const { onSubmit, errors, register } = useFn();
  return (
    <main>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputLarge + " " + styles.formControl}>
          <label>Votre nom</label>

          <input
            {...register("nom")}
            type="text"
            placeholder="Svp entrez votre nom"
          />
          <p className={styles.errorMessage}>
            {errors?.nom && "Veuillez entrer votre nom"}
          </p>
        </div>

        <div className={styles.inputLarge + " " + styles.formControl}>
          <label>Votre email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Svp entrez votre email"
          />
          <p className={styles.errorMessage}>
            {errors?.email && "Veuillez entrer votre email"}
          </p>
        </div>

        <div className={styles.formControl}>
          <label>Index Telephonique</label>
          <select {...register("phoneIndex")}>
            {/* <option {...{ ["data-countrycode"]: "FR" }} value={""}>
              Selectionnez
            </option> */}
            {phoneIndexes.map((phoneIndex, idx) => (
              <option
                {...{ ["data-countrycode"]: phoneIndex["data-countrycode"] }}
                key={phoneIndex.value + phoneIndex["data-countrycode"] + idx}
                value={phoneIndex.value}
              >
                {phoneIndex.text}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formControl}>
          <label>numero de Telephone</label>
          <input
            {...register("phone")}
            type="number"
            placeholder="svp entrez votre numero"
          />
        </div>
        <p className={styles.errorMessageBottom}>
          {errors?.phoneIndex && "Veuillez entrer index telephonique"}
        </p>
        <p className={styles.errorMessageBottom}>
          {errors?.phone && "Veuillez entrer numero de telephone"}
        </p>
        <div className={styles.inputLarge + " " + styles.formControl}>
          <label>Vous etes...</label>
          <select {...register("tag")}>
            <option value={""}>
              Selectionnez ce qui vous represente le plus
            </option>
            {tags.map((tag, idx) => (
              <option key={tag + idx} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <p className={styles.errorMessage}>
            {errors?.tag && "Veuillez nous indiquer ce que vous etes."}
          </p>
        </div>

        <div className={styles.inputLarge + " " + styles.formControl}>
          <label>Civilite</label>
          <select {...register("civility")}>
            <option value={""}>Civilite</option>
            {civilities.map((civility, idx) => (
              <option key={civility + idx} value={civility}>
                {civility}
              </option>
            ))}
          </select>
          <p className={styles.errorMessage}>
            {errors?.civility && "Veuillez selectionner une civilite"}
          </p>
        </div>

        {/* <div className={styles.inputLarge + " " + styles.formControl}>
          <label>Age</label>
          <input
            type="number"
            placeholder="Svp entrez votre age"
            {...register("age")}
          />
          <p className={styles.errorMessage}>
            {errors?.age && "Veuillez entrer votre age"}
          </p>
        </div> */}
        {/* <CountrySelect /> */}

        <div className={styles.inputLarge + " " + styles.formControl}>
          <label>Quel est le titre de votre vidéo</label>
          <input
            type="text"
            placeholder="Entrez le titre de la vidéo"
            {...register("title")}
          />
          <p className={styles.errorMessage}>
            {errors?.title && "Veuillez entrer un titre"}
          </p>
        </div>

        <div className={styles.inputLarge + " " + styles.formControl}>
          <label>Qu'attendez vous de voir dans cette vidéo ?</label>
          <textarea
            placeholder="Entrez la description"
            {...register("description")}
            rows={4}
          />
          <p className={styles.errorMessage}>
            {errors?.description && "Veuillez entrer une description"}
          </p>
        </div>
        <button
          type="submit"
          className={
            styles.submitButton +
            " text-center flex mx-auto h-fit py-2 mt-1 justify-items-center items-center bg-blue-600 shadow-sm rounded-lg px-4"
          }
        >
          <span className="font-extralight text-xl text-white "> SUBMIT</span>
        </button>
      </form>
    </main>
  );
};
