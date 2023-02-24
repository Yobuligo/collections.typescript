import { hashSetOf } from "../../src/Functions";
import { HashSet } from "./../../src/hashSets/HashSet";
import { CollectionTests } from "./../CollectionTests";

new CollectionTests(HashSet, (...elements) => {
  return hashSetOf(...elements);
}).run();
