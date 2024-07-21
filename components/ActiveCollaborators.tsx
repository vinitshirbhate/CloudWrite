import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";
import React from "react";

export const ActiveCollaborators = () => {
  const others = useOthers();
  const collaborators = others.map((other) => other.info);
  return (
    <ul className="collaborators-list">
      {collaborators.map(({ id, name, avatar, color }) => {
        return (
          <li key={id}>
            <Image
              src={avatar}
              width={100}
              height={100}
              alt={name}
              className="inline-block size-8 rounded-full ring-2 ring-dark-200"
              style={{ border: `3px solid ${color}` }}
            />
          </li>
        );
      })}
    </ul>
  );
};
