/* eslint-disable @typescript-eslint/no-explicit-any */

export const get = <T = any>(path: string, object: unknown): T => $get(path, object) as unknown as T;

export const remove = <T = any>(path: string, object: unknown): T => $remove(path, object) as unknown as T;

export const set = <T = any>(path: string, data: unknown, object: unknown): T =>
  $set(path, data, object) as unknown as T;

export const add = <T = any>(path: string, data: unknown, object: unknown): T =>
  $add(path, data, object) as unknown as T;
