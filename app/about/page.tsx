import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen text-neutral-800 tracking-wide">
      <div className="bg-white border rounded-lg p-6 w-full max-w-4xl mx-auto h-[90vh] overflow-y-auto">
        <div className="flex justify-center mb-4">
          <Image
            src="/image/icon.png"
            alt="アイコン画像"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="text-center mb-6 text-gray-500">
          <h1 className="text-2xl font-bold text-stone-800">えほ/Ehor.</h1>
          <p>N高8期生 千葉キャンパス週3コース 2年生</p>
        </div>
        <hr className="mb-6" />
        <div className="text-center mb-6">
          <p className="text-gray-600">
            3月15日生まれ。MBTIはENFP。<br />
            好きな食べ物は醤油ラーメンとレタスです！<br />
            <a href="https://nuller.jp" className="text-blue-600 underline">Nuller開発チーム</a>の運営に携わっています<br />
            よろしくお願いします！<br />
          </p>
        </div>
        <div className="md:mx-4">
          <div className="pt-4">
            <div className="rounded-md py-2 text-xl font-bold mb-4 flex items-center">
              <span className="w-10 h-10 flex items-center justify-center">🏫</span>
              <h2>スケジュール</h2>
            </div>
            <div className="space-y-2">
              <div className="border px-4 py-4 rounded-lg hover:bg-slate-50 cursor-default">
                <div className="mb-2"><span className="bg-green-500 text-white px-2 py-0.5 rounded-md">スクーリング</span></div>
                <p className="text-gray-500">2024/8/23〜8/25</p>
                <h3 className="font-bold rounded-md">ところざわさくらタウン</h3>
              </div>
              <div className="border px-4 py-4 rounded-lg hover:bg-slate-50 cursor-default">
                <div className="mb-2"><span className="bg-green-500 text-white px-2 py-0.5 rounded-md">スクーリング</span></div>
                <p className="text-gray-500">2024/12/5〜12/7</p>
                <h3 className="font-bold rounded-md">ところざわさくらタウン</h3>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="rounded-md py-2 text-xl font-bold mb-4 flex items-center">
            <span className="w-10 h-10 flex items-center justify-center">📱</span>
            <h2>SNS</h2>
          </div>
          <div className="space-y-2">
            <div className="border px-4 py-4 rounded-lg hover:bg-slate-50 cursor-pointer">
              <a href="https://x.com/ehor_N8">
                <span className="font-bold rounded-md underline">X（旧:Twitter）</span>
              </a>
            </div>
            <div className="border px-4 py-4 rounded-lg hover:bg-slate-50 cursor-pointer">
              <a href="https://instagram.com/ehor_N8">
                <span className="font-bold rounded-md underline">Instagram</span>
              </a>
            </div>
          </div>
          <div className="rounded-md py-2 text-xl font-bold mb-4 flex items-center">
            <span className="w-10 h-10 flex items-center justify-center">🔗</span>
            <h2>リンク</h2>
          </div>
          <div className="space-y-2">
            <div className="border px-4 py-4 rounded-lg hover:bg-slate-50 cursor-pointer">
              <a href="https://nuller.jp">
                <span className="font-bold rounded-md underline">Nuller開発チーム</span>
              </a>
            </div>
            <div className="border px-4 py-4 rounded-lg hover:bg-slate-50 cursor-pointer">
              <a href="https://ehor.jp">
                <span className="font-bold rounded-md underline">えほさいと</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
