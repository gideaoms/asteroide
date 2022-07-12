import {
  NumericLiteralNode,
  NumericLiteralToken,
  Program,
  Token,
  Node,
  IdentifierToken,
  CallExpressionNode
} from "./types";

function isNumericLiteral(token: Token): token is NumericLiteralToken {
  return token.type === "NumericLiteralToken";
}

function isIdentifier(token: Token): token is IdentifierToken {
  return token.type === "Identifier";
}

function parseNumericLiteral(token: NumericLiteralToken): NumericLiteralNode {
  return { type: "NumericLiteral", value: token.value };
}

function parseCallExpression(token: IdentifierToken): CallExpressionNode {
  return { type: "CallExpression", identifier: token, argument: parse(token) };
}

function parse(token: Token): Node {
  if (isNumericLiteral(token)) return parseNumericLiteral(token);
  if (isIdentifier(token)) return parseCallExpression(token);
  return null!;
}

export function parser(tokens: Token[]): Program {
  const program: Program = { body: [] };
  for (let cursor = 0; cursor < tokens.length; cursor++) {
    program.body.push();
  }
  return program;
}
