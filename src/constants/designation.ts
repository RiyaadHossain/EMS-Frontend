import { ENUM_DESIGNATION } from "@/enums/designation";

export const DESIGNATION_OPTIONS = Object.values(ENUM_DESIGNATION).map(designation => ({
    label: designation,
    value: designation,
  }));
  