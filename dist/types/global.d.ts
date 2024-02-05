// Globally available utility types for our Typescript declaration files (*.d.ts)
// Do not export anything from this file, or Typescript will interpret this as a module.

declare type Modify<T, R> = Omit<T, keyof R> & R

/** Given an existing type, make a given list of properties required,
 *  and the rest optional.
 * @example type MyNewType = SomeRequired<MyBaseType, 'id' | 'name'>
 * @internal
 */
declare type SomeRequired<T, K extends keyof T> = {
  [P in K]-?: T[P]
} & Partial<T>
