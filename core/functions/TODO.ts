/**
 * This function is responsible for raising a TODO exception
 */
export function TODO(message: string = "Not implemented exception") {
  throw new Error(message);
}
