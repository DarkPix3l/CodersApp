"use client";

import Menu from "src/app/_components/Menu";
/* import challenges from "@src/data/db.json"; */
import challenges from "db.json";

import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/app/_components/Select";
import { Input } from "@src/app/_components/Input";
import Playground from "@src/app/_components/Playground";

// Dynamically import SimpleMDE with no SSR (optional if already client component)
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function ChallengesPage() {
  const item = challenges.challenges;
  const [value, setValue] = useState("");
  return (
    <>
      <Menu />
      <main>
        <h2>Create new challenge</h2>

        <form className="max-w-none w-full h-full grid grid-cols-2">
          <div>
            <label htmlFor="title">
              Title*:
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value="Challenge title"
                  onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label htmlFor="category">
              Category*:
              <Input
                type="text"
                id="category"
                name="category"
                placeholder="category"
                value="enter the category"
                onChange={setValue}
              />
            </label>

            <label htmlFor="level">
              Level*:
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </label>

            <SimpleMDE value={value} onChange={setValue} />
          </div>
          <Playground/>
        </form>
      </main>
    </>
  );
}
