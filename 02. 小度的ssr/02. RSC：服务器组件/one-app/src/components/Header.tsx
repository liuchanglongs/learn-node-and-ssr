"use client";

import { useTheme } from "./Theme";

export default function Header() {
  const value = useTheme();
  return <div>header component {value}</div>;
}
