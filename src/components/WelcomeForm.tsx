"use client";
import { useState } from "react";
import { TypeJoinChat } from "@/types/base.types";

interface IFormProps {
  joinChat: (data: TypeJoinChat) => Promise<void>;
}

export default function WelcomeForm({ joinChat }: IFormProps) {
  const [userName, setUserName] = useState("");
  const [chatRoom, setChatRoom] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    joinChat({ chatRoom, userName });
  };

  return (
    <form>
      <h1 className={"text-center font-bold text-lg"}>Онлайн чат</h1>
      <h2 className={"mt-2"}>Введите имя</h2>
      <input
        className={"px-2 py-2 border border-gray-300 rounded mt-2"}
        type="text"
        name="name"
        placeholder="Введите имя"
        onChange={(event) => setUserName(event.target.value)}
      />
      <h2 className={"mt-2"}>Введите название чата</h2>
      <input
        className={"px-2 py-2 border border-gray-300 rounded mt-2"}
        type="text"
        name="chat"
        placeholder="Введите название чата"
        onChange={(event) => setChatRoom(event.target.value)}
      />

      <button
        onClick={handleSubmitForm}
        className={"block bg-blue-400 rounded w-full py-2 mt-3"}
      >
        Войти в чат
      </button>
    </form>
  );
}
