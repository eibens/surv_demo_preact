import { React } from "../deps/preact.ts";

export function Hello(props: {
  name: string;
}) {
  return <h1>hello, {props.name}!</h1>;
}
