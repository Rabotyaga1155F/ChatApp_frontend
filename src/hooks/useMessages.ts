import { useState } from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import type { TypeJoinChat } from "@/types/base.types";

export function useMessages() {
  const [connection, setConnection] = useState<HubConnection>(null);
  const [chatRoom, setChatRoom] = useState("");
  const [messages, setMessages] = useState([]);

  const joinChat = async ({ chatRoom, userName }: TypeJoinChat) => {
    const connection = new HubConnectionBuilder()
      .withUrl(process.env.NEXT_PUBLIC_BACKEND_URL)
      .withAutomaticReconnect()
      .build();

    connection.on("ReceiveMessage", (userName, message) => {
      setMessages((messages) => [...messages, { userName, message }]);
    });

    try {
      await connection.start();
      await connection.invoke("JoinChat", {
        userName: userName,
        chatRoom: chatRoom,
      });

      setConnection(connection);
      setChatRoom(chatRoom);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = (message: string) => {
    connection.invoke("SendMessage", message);
  };

  const closeChat = async () => {
    await connection.stop();
    setConnection(null);
  };

  return {
    connection,
    messages,
    chatRoom,
    closeChat,
    joinChat,
    sendMessage,
  };
}
