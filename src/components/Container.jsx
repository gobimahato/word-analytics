import { useState } from "react";

import Stats from "./Stats";
import TextArea from "./TextArea"

import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants.js";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - text.length;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - text.length;

  const stats = {
    numberOfWords: numberOfWords,
    numberOfCharacters: numberOfCharacters,
    instagramCharactersLeft: instagramCharactersLeft,
    facebookCharactersLeft: facebookCharactersLeft,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
