// import { useState } from 'react';
const Chat = () => {
  // const [chats, setChats] = useState(null);
  const chats = [
    {
      type: 'send',
      message: 'Hii How Are you!',
    },
    {
      type: 'recieve',
      message: 'How may i help you!',
    },
    {
      type: 'send',
      message: 'Hii How Are !',
    },
    {
      type: 'recieve',
      message: 'How may i help !',
    },
    {
      type: 'send',
      message: 'Hii How !',
    },
    {
      type: 'recieve',
      message: 'How may i!',
    },
  ];

  return (
    <div className="md:w-1/3 h-screen mx-auto bg-gray-900 px-2 py-4 flex flex-col justify-end">
      <div className="">
        {chats.map((i) => (
          <div
            className={`flex ${
              i.type === 'send' ? 'justify-end' : 'justify-start'
            } w-full flex`}
          >
            <p
              className={`${
                i.type === 'send' ? 'bg-blue-700' : 'bg-indigo-900'
              }  rounded-xl py-2  px-2 ${
                i.type === 'send' ? 'rounded-tr-sm' : 'rounded-tl-sm'
              }  text-white `}
            >
              {i.message}
            </p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          class="focus:ring-none mb-4  focus:outline-none w-full h-12 bg-gray-800 rounded-xl text-sm leading-6 text-gray-900 placeholder-gray-100 py-2 pl-4 ring-1 ring-gray-600 shadow-sm"
          type="email"
          placeholder="Message..."
        />
        <button className="hover:shadow-xl rounded-xl bg-blue-500 text-white text-sm font-medium px-4 ml-2 h-12 shadow-sm">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
