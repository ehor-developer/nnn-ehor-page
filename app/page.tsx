import schooling from '../data/schooling.json';
import SocialIcon from '../components/social';

interface Schooling {
  date: string;
  location: string;
}

export default function About() {
  const now_date = new Date();
  const now_year = now_date.getFullYear();
  const now_month = now_date.getMonth() + 1;
  return (
    <>
      <div className="bg-white rounded-lg p-6 py-16 w-full m-auto max-w-4xl min-h-screen text-neutral-800 tracking-wide">
          <div className="flex justify-center mb-4">
            <img
              src="/image/icon.webp"
              alt="アイコン"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="text-center mb-6 text-gray-500">
            <h1 className="text-2xl font-bold text-stone-800">えほ/Ehor.</h1>
            <p className="text-sm">@ehor_n8</p>
            <h2 className="text-base mt-2">
              {now_year > 2025 || (now_year === 2025 && now_month >= 4) ? (
                now_year > 2026 || (now_year === 2026 && now_month >= 4) ? (
                  'N高8期生 元千葉キャンパス 週3コース卒業生'
                ) : (
                  'N高8期生 千葉キャンパス週3コース 3年生'
                )
              ) : (
                'N高8期生 千葉キャンパス週3コース 2年生'
              )}
            </h2>
            <div className="flex justify-center space-x-4 text-ellipsis my-4">
              <SocialIcon className="w-6 h-6 fill-black" />
            </div>
          </div>
          <div className="md:mx-4">
            <div className="pt-4">
              <div className="rounded-md py-2 text-xl font-bold mb-4 flex items-center">
                <h2>スケジュール</h2>
              </div>
              <div className="space-y-2">
                {schooling.length > 0 ? (
                  schooling.map((event: Schooling, index: number) => (
                    <div key={index} className="border px-6 py-4 rounded-lg hover:bg-slate-50 cursor-default">
                      <p className="text-gray-500">{event.date}</p>
                      <h3 className="font-bold rounded-md">{event.location}</h3>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">まだ登録されていません</p>
                )}
              </div>

            </div>
            <hr className="my-6" />
            <div className="rounded-md py-2 text-xl font-bold mb-4 flex items-center">
              <h2>リンク</h2>
            </div>
            <a href="https://nuller.jp" className="mt-10">
              <div className="border px-6 py-4 rounded-lg hover:bg-slate-50 cursor-pointer mt-4">
                <span className="font-bold rounded-md hover:underline">Nuller開発チーム</span>
              </div>
            </a>
            <a href="https://ehor.jp">
              <div className="border px-6 py-4 rounded-lg hover:bg-slate-50 cursor-pointer mt-4">

                <span className="font-bold rounded-md hover:underline">えほさいと</span>
              </div>
            </a>
          </div>
      </div >
    </>
  );
}
