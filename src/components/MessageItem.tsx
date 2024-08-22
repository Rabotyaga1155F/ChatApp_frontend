import { TypeMessage } from "@/types/base.types";

interface IMessageItemProps {
  messageInfo: TypeMessage;
}
export default function MessageItem({ messageInfo }: IMessageItemProps) {
  return (
    <div className={"px-6"}>
      <span className={"text-sm text-red-600 "}>{messageInfo.userName}</span>
      <div>
        <div
          className={
            "py-2 px-3 mt-1 bg-gray-200 rounded-xl shadow-2xl inline-block"
          }
        >
          {messageInfo.message}
        </div>
      </div>
    </div>
  );
}
