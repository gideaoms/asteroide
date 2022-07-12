import { Token } from "./types";

function isBlank(char: string) {
  return /\s/.test(char);
}

function isOpenParen(char: string) {
  return char === "(";
}

function isCloseParen(char: string) {
  return char === ")";
}

function isPlusToken(char: string) {
  return char === "+";
}

function isMinusToken(char: string) {
  return char === "-";
}

function isNumericalToken(char: string) {
  return /[0-9]/.test(char);
}

function isLetterToken(char: string) {
  return /[a-z]/.test(char);
}

export function tokenizer(input: string): Token[] {
  const tokens: Token[] = [];
  const numerics: string[] = [];
  for (let cursor = 0; cursor < input.length; cursor++) {
    const char = input[cursor];
    if (isBlank(char)) continue;
    if (isOpenParen(char)) {
      tokens.push({ type: "OpenParenToken" });
      continue;
    }
    if (isCloseParen(char)) {
      tokens.push({ type: "CloseParenToken" });
      continue;
    }
    if (isPlusToken(char)) {
      tokens.push({ type: "PlusToken" });
      continue;
    }
    if (isMinusToken(char)) {
      tokens.push({ type: "MinusToken" });
      continue;
    }
    if (isNumericalToken(char)) {
      // const nextChar = input[cursor + 1];
      // if (isNumericalToken(nextChar)) {
      //   //
      // } else {
      //   //
      // }
      tokens.push({ type: "NumericLiteralToken", value: char });
      continue;
    }
    if (isLetterToken(char)) {
      tokens.push({ type: "Identifier", value: char });
      continue;
    }
    throw new Error(`Unexpected token: ${char}`);
  }
  return tokens;
}
