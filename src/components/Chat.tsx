import MessageItem from "@/components/MessageItem";
import { useEffect, useRef, useState } from "react";
import { TypeMessage } from "@/types/base.types";

interface IChatProps {
  messages: TypeMessage[];
  chatRoom: string;
  closeChat: () => void;
  sendMessage: (message: string) => void;
}

export default function Chat({
  messages,
  chatRoom,
  closeChat,
  sendMessage,
}: IChatProps) {
  const [message, setMessage] = useState("");
  const endMessagesRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (endMessagesRef.current) {
      endMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div
      className={
        "w-full sm:w-1/2 bg-white p-2 sm:p-8 rounded shadow-lg flex flex-col justify-between min-h-96 h-screen sm:h-full"
      }
    >
      <div className={"flex flex-row justify-between mb-3"}>
        <h1 className={"font-bold"}>{chatRoom}</h1>
        <button onClick={closeChat}>X</button>
      </div>
      <div className={"flex flex-col overflow-auto gap-3 pb-3 h-full"}>
        {messages.map((messageInfo, index) => (
          <MessageItem messageInfo={messageInfo} key={index} />
        ))}
        <span ref={endMessagesRef} />
      </div>

      {/* Блок с полем ввода и кнопкой отправки */}
      <div className={"flex gap-3 mt-auto"}>
        <input
          className={"w-full border border-gray-300 rounded-md p-2"}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type={"text"}
          placeholder={"Напишите сообщение"}
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
}
