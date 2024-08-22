"use client";
import Image from "next/image";
import WelcomeForm from "@/components/WelcomeForm";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import type { TypeJoinChat } from "@/types/base.types";
import { useState } from "react";
import Chat from "@/components/Chat";
import { useMessages } from "@/hooks/useMessages";

export default function Home() {
  const { connection, messages, chatRoom, sendMessage, joinChat, closeChat } =
    useMessages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-0 sm:p-24">
      {connection ? (
        <Chat
          messages={messages}
          chatRoom={chatRoom}
          closeChat={closeChat}
          sendMessage={sendMessage}
        />
      ) : (
        <WelcomeForm joinChat={joinChat} />
      )}
    </main>
  );
}
