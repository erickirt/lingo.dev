import Z from "zod";

export const bucketTypes = [
  "android",
  "csv",
  "flutter",
  "html",
  "json",
  "markdown",
  "xcode-strings",
  "xcode-stringsdict",
  "xcode-xcstrings",
  "yaml",
  "yaml-root-key",
  "properties",
  "po",
  "xliff",
  "xml",
  "srt",
  "dato",
  "compiler",
] as const;

export const bucketTypeSchema = Z.enum(bucketTypes);
