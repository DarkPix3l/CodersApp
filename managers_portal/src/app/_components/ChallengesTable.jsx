"use client";

import challenges from "@src/data/db.json";
import { BsTrash, BsPencil } from "react-icons/bs";
import { Button } from "./Button";
import Link from "next/link";
import removeProduct from "@src/actions/challengesActions";

export default function ChallengesTable() {
  return (
    <div className="w-full h-fit rounded-xl overflow-hidden shadow-[1px_3px_15px_rgba(0,0,0,0.35)]">
      {/* Table Mask */}
      <div className="overflow-x-auto w-full">
        <table className="data-table text-left w-full min-w-full">
          <thead style={{ backgroundColor: "var(--table-head)" }}>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Created at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {challenges.challenges.map((item) => (
              <tr key={item.id} className="group" title={item.title}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.level}</td>
                <td>{item.createdAt}</td>
                <td className="flex gap-2">
                  <Link href={`/challenges/edit/${item.id}`}>
                    <Button>
                      <BsPencil size={20} />
                    </Button>
                  </Link>
                  <form action={removeProduct}>
                    <input type="hidden" name="productId" value={item.id} />
                    <Button type="submit" variant="destructive">
                      <BsTrash size={20} />
                    </Button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
