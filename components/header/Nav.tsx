"use client";
import React from "react";

interface NavProps {
  children: React.ReactNode;
  flex: string;
  margin: string;
}

export default function Nav({
  flex,
  margin,

  children,
}: NavProps) {
  return <nav className={`${flex} ${margin}`}>{children}</nav>;
}
