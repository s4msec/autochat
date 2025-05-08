import { RiMessengerLine } from "react-icons/ri";
import TOTPGenerator from "@/components/TOTPGenerator";

interface PageProps {
  params: Promise<{ pageId: string }>;
}

export default async function StartConversation({ params }: PageProps) {
  const { pageId } = await params;
  const secret = "JHW7 5EN6 GK6B 3H5N BL4P M4OP RT5E 53FQ";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold">Start a Conversation</h1>
        <p className="text-lg text-gray-400">
          Click the button below to go to your Messenger conversation.
        </p>

        {pageId ? (
          <a
            href={`https://m.me/${pageId}`}
            className="px-6 py-3 mt-5 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition flex flex-row items-center space-x-2"
          >
            <RiMessengerLine />
            <span>Open Conversation</span>
          </a>
        ) : (
          <p>Loading...</p>
        )}
      </main>

      {/* Aqui exibimos o código TOTP */}
      <TOTPGenerator secret={secret} />
    </div>
  );
}
