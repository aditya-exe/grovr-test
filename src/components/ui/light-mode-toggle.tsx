"use client";

import { Icons } from "@/components/Icons";
import { Switch } from "./switch";
import useDarkMode from "@/lib/useDarkMode";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  // const [darkTheme, setDarkTheme] = useDarkMode();
  // const handleMode = () => {
  //   setDarkTheme(!darkTheme);
  // };
  const { setTheme } = useTheme();

  return (
    <div className="md:flex items-center hidden gap-x-2">
      <Icons.sun />
      <Switch
        // checked={darkTheme}
        onCheckedChange={(e) => {
          if (e.valueOf()) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
        // className={`${darkTheme ? "bg-blue-900" : "bg-orange-700"}`}
      />
      <Icons.star />
    </div>
  );
};

export default ThemeSwitch;
