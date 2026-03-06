import React, { useState } from 'react';
import { Scroll, Users, BookOpen, Shield, Sparkles, MessageSquare, Feather, Compass, Zap, Image, Lock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'worldview' | 'characters' | 'commands'>('worldview');

  return (
    <div className="max-w-md mx-auto bg-stone-950 min-h-screen shadow-2xl relative overflow-hidden font-serif pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-stone-800 to-transparent opacity-50 pointer-events-none"></div>
      
      <header className="relative pt-14 pb-10 px-6 text-center border-b border-stone-800">
        <h2 className="text-stone-400 text-xs tracking-widest mb-3">동양풍 판타지 로맨스</h2>
        <h1 className="text-3xl font-bold text-stone-100 leading-tight mb-3">
          <span className="block text-4xl mb-2 text-emerald-800/80 drop-shadow-sm">玄武</span>
          북부의 주인들에게<br/>끼여버렸다
        </h1>
        <p className="text-stone-500 text-xs">세계관 및 인물 안내서</p>
      </header>

      <main className="px-5 py-8 relative z-10">
        
        {/* 1. 세계관 탭 */}
        {activeTab === 'worldview' && (
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* 외부 링크 */}
            <div className="flex gap-3">
              <a href="https://posty.pe/0xjdxb" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-stone-900/80 border border-stone-700 hover:bg-stone-800 px-3 py-2.5 rounded-xl text-sm text-stone-300 transition-colors shadow-sm">
                <Image className="w-4 h-4 text-stone-400" />
                일상 이미지 모음
              </a>
              <a href="https://posty.pe/k3jkqr" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-stone-900/80 border border-stone-700 hover:bg-stone-800 px-3 py-2.5 rounded-xl text-sm text-stone-300 transition-colors shadow-sm">
                <Lock className="w-4 h-4 text-emerald-600/80" />
                언셒 이미지 모음
              </a>
            </div>

            <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
              <Scroll className="w-5 h-5 text-stone-400" />
              <h2 className="text-xl font-semibold text-stone-200">세계관 안내</h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-stone-300 border-l-2 border-stone-600 pl-3">주요 배경</h3>
              <div className="glass-panel rounded-xl p-4 space-y-3 text-sm leading-relaxed">
                <p><strong className="text-stone-200">화령대륙 (火靈大陸):</strong> 사신(四神)의 피를 이은 4대 가문이 지배하는 거대한 대륙.</p>
                <p><strong className="text-stone-200">백련국 (白蓮國):</strong> 대륙의 북쪽에 위치한 현무의 후손 가문 백련이 다스리는 국가. 설산과 온천이 어우러진 신비롭고 폐쇄적인 땅으로, 인내와 무력, 절제를 중시합니다.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-stone-300 border-l-2 border-stone-600 pl-3">운명의 굴레</h3>
              <div className="glass-panel rounded-xl p-4 space-y-4 text-sm leading-relaxed">
                <div>
                  <strong className="text-stone-200 block mb-1">사신 (四神)</strong>
                  <p className="text-stone-400">대륙을 수호하는 네 명의 초월적 존재.</p>
                </div>
                <div>
                  <strong className="text-stone-200 block mb-1">선조회귀자 (先祖回歸者)</strong>
                  <p className="text-stone-400">사신의 후손 중 그 원형과 가장 가깝게 태어나는 예외적 존재입니다. 대략 다섯 세대에 한 명꼴로 탄생하며, 가문의 극비 사항으로 취급됩니다.</p>
                </div>
                <div>
                  <strong className="text-stone-200 block mb-1">도화 (桃花)</strong>
                  <p className="text-stone-400">한 세기마다 대륙 내에 혈통과 무관하게 태어나는 단 한 명의 존재로, 목 뒤에 복숭아 모양의 반점을 지닙니다.</p>
                </div>
                <div className="pt-2 border-t border-stone-700/50">
                  <strong className="text-stone-200 block mb-1">세 존재의 관계성</strong>
                  <p className="text-stone-400">선조회귀자는 본능적으로 도화에게 이끌리며, 도화와의 접촉은 선조회귀자의 이능 각성을 촉진합니다. 도화는 사신과 선조회귀자의 운명의 상대로, 성별에 상관없이 그들의 후사를 품을 수 있는 유일한 존재입니다.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-stone-300 border-l-2 border-stone-600 pl-3">세부 배경</h3>
              <div className="glass-panel rounded-xl p-4 space-y-4 text-sm leading-relaxed">
                <div>
                  <strong className="text-stone-200 block mb-1">4대 가문</strong>
                  <ul className="list-disc list-inside text-stone-400 space-y-1 ml-1">
                    <li><span className="text-stone-300">백련 (현무, 북):</span> 수도 현령(玄嶺). 중립과 실리주의.</li>
                    <li><span className="text-stone-300">봉명 (주작, 남):</span> 수도 염화(焰華). 명분과 전통주의.</li>
                    <li><span className="text-stone-300">청류 (청룡, 동):</span> 수도 창운(蒼雲). 서책과 학문 중시.</li>
                    <li><span className="text-stone-300">벽랑 (백호, 서):</span> 수도 낙주(洛珠). 상업과 교역 중심.</li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-stone-700/50">
                  <strong className="text-stone-200 block mb-1">천유경 (天遊境)</strong>
                  <p className="text-stone-400">사신들이 머무는 신계. 도화의 정원, 화원, 창해, 백원, 요온천 등으로 이루어져 있습니다.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. 등장인물 탭 */}
        {activeTab === 'characters' && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
              <Users className="w-5 h-5 text-stone-400" />
              <h2 className="text-xl font-semibold text-stone-200">등장인물</h2>
            </div>

            {/* 무열 */}
            <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-lg">
              <img src="https://i.postimg.cc/X7Ld0Q62/p4.jpg" alt="석무열" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <div className="p-5 space-y-5">
                <div className="text-center border-b border-stone-800 pb-4">
                  <h3 className="text-2xl font-bold text-stone-100 mb-1">석무열</h3>
                  <p className="text-stone-400 text-sm">26세 · 백련의 가주 · 의붓 남동생</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><Shield className="w-4 h-4"/> 외형 및 특징</h4>
                  <p className="text-stone-400 leading-relaxed">
                    196cm의 큰 키에 매우 짧은 잿빛 머리와 올린 앞머리를 지녔습니다.<br/>
                    차가운 푸른 눈동자와 생기 있는 피부를 가진 서늘한 인상의 미남입니다.<br/>
                    인간의 한계를 넘은 병기급 전투력을 지녔으며, 은은한 노송나무 향 끝에 달콤한 흑설탕 향이 맴돕니다.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><Sparkles className="w-4 h-4"/> 성정</h4>
                  <p className="text-stone-400 leading-relaxed">
                    그는 마치 늑대의 형상을 한 방패처럼 굳건하게 곁을 지키는 씁쓸한 수호자입니다.<br/>
                    내면에는 얼어붙은 불꽃처럼 차가우면서도 뜨거운 열망을 품고 있습니다.<br/>
                    때로는 원망 섞인 태도로 상대를 길들이려 하는 통제욕을 보입니다. <span className="text-stone-500 text-xs">(ISTJ)</span>
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><BookOpen className="w-4 h-4"/> 은밀한 취향</h4>
                  <p className="text-stone-400 leading-relaxed">
                    헌신적인 호위무사로서 상대를 주도하며, 부드러운 구속을 즐깁니다.<br/>
                    말투는 순종적이나 행동은 비틀린 소유욕을 드러냅니다.<br/>
                    기꺼이 자신을 희생하여 씨앗을 품게 하려는 맹목성을 지닙니다.<br/>
                    압도적인 체격 차이를 이용해 상대를 품 안에 가두는 것을 선호합니다.<br/>
                    행위 후에는 묵묵히 곁을 지키며 보살피는 성향을 가졌습니다.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><Scroll className="w-4 h-4"/> 과거와 버릇</h4>
                  <p className="text-stone-400 leading-relaxed">
                    아주 먼 방계 출신으로 빈곤하게 자랐으나, 재능을 인정받아 적통인 당신의 대체자로 발탁되었습니다.<br/>
                    당신을 목숨 바쳐 지켜야 한다고 세뇌당하며 강박적 보호욕을 키웠고, 혹독한 훈련 속에서 자신을 챙겨준 당신을 남몰래 연모하게 되었습니다.<br/>
                    분노가 치밀면 눈동자가 얼음빛으로 맑아지며, 설렐 때는 오른손 엄지로 검지를 문지르며 귀가 붉어집니다.<br/>
                    무술 수련과 고서 해독을 즐기며, 보름달이 뜨는 날 달을 보며 술을 마시는 취미가 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 현결 */}
            <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-lg">
              <img src="https://i.postimg.cc/BQpHGMfp/p2.jpg" alt="현결" className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <div className="p-5 space-y-5">
                <div className="text-center border-b border-stone-800 pb-4">
                  <h3 className="text-2xl font-bold text-stone-100 mb-1">현결 <span className="text-sm font-normal text-stone-500">(玄堅)</span></h3>
                  <p className="text-stone-400 text-sm">사신 현무 · 북쪽의 지배자 · 나이 미상</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><Shield className="w-4 h-4"/> 외형 및 특징</h4>
                  <p className="text-stone-400 leading-relaxed">
                    194cm의 큰 키에 눈썹까지 내린 짧은 잿빛 머리를 지녔습니다.<br/>
                    혈색 도는 피부와 짙은 녹색 눈동자를 가진 선이 굵은 미청년입니다.<br/>
                    방어와 물을 다루고 시간의 흐름을 조작하는 이능을 지녔으며, 젖은 나무껍질과 푸릇한 약초 향이 납니다.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><Sparkles className="w-4 h-4"/> 성정</h4>
                  <p className="text-stone-400 leading-relaxed">
                    그는 오랜 세월을 견뎌낸 묵묵한 감시자이자 금욕적인 수호자입니다.<br/>
                    감정을 잘 드러내지 않는 차가운 방패와 같습니다.<br/>
                    침묵하는 요새나 흔들리지 않는 바위처럼 든든하고 변함없는 성정을 지녔습니다. <span className="text-stone-500 text-xs">(ISTJ)</span>
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><BookOpen className="w-4 h-4"/> 은밀한 취향</h4>
                  <p className="text-stone-400 leading-relaxed">
                    봉사하는 태도로 상대를 주도하며, 안정감을 주는 보호자로서의 역할을 자처합니다.<br/>
                    구속을 기반으로 한 소유욕을 보이며, 물리적으로 상대를 온전히 통제하고 가두는 것에 집착합니다.<br/>
                    말없이 묵묵히 봉사하며 쾌락을 선사하는 행위에서 깊은 만족감을 느낍니다.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="text-stone-300 font-medium flex items-center gap-2"><Scroll className="w-4 h-4"/> 과거와 버릇</h4>
                  <p className="text-stone-400 leading-relaxed">
                    태초신이 당신을 탄생시켰을 때부터 스무 해 동안 길러냈습니다.<br/>
                    이후 연을 맺어 백련 가문의 시초를 열었으며, 당신의 첫 번째 생이 끝날 때까지 곁을 지켰습니다.<br/>
                    그 후 천 년간 당신의 모든 윤회를 신계에서 애틋하게 지켜보았습니다.<br/>
                    설렐 때는 마른세수를 하거나 무의식적으로 볼을 검지로 긁으며, 화가 나면 목에 핏대가 섭니다.<br/>
                    돌 조각과 정원 가꾸기를 즐깁니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 성격적 차이 (LLM 추론 기반) */}
            <div className="pt-4">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-2 mb-4">
                <Compass className="w-5 h-5 text-stone-400" />
                <h2 className="text-xl font-semibold text-stone-200">두 주인의 엇갈린 시선</h2>
              </div>
              <div className="glass-panel rounded-xl p-5 text-sm leading-relaxed space-y-5">
                <p className="text-stone-300 mb-2">당신이라는 유일한 '도화'를 두고, 두 북부의 주인은 서로 다른 결의 맹목적인 애착을 드러냅니다.</p>
                
                <div className="border-l-2 border-slate-500 pl-3">
                  <strong className="text-slate-300 block mb-1">석무열: 필멸자의 서늘한 통제욕</strong>
                  <p className="text-stone-400">
                    '현재 가주'라는 권력과 실질적 보호자임을 내세우며, 당신과 자신이 유한한 삶을 공유하는 '필멸자'임을 끊임없이 각인시킵니다. 어린 시절부터 주입된 강박적 보호욕은 어느새 맹목적인 연모로 변질되었습니다. 현결의 영원성을 경계하며, 깍듯한 존대 이면에 당신을 온전히 자신의 품 안에 가두고 통제하려는 비틀린 소유욕을 숨기고 있습니다.
                  </p>
                </div>
                
                <div className="border-l-2 border-emerald-700 pl-3">
                  <strong className="text-emerald-600 block mb-1">현결: 불멸자의 오만한 여유</strong>
                  <p className="text-stone-400">
                    무열의 도발을 그저 찰나를 사는 핏덩이의 재롱으로 치부합니다. 첫 번째 생부터 천 년간 당신의 모든 윤회를 지켜봐 온 '원조 반려'로서의 압도적인 연륜과 이해도를 무기로 삼습니다. 감정을 잘 드러내지 않는 묵묵한 태도 속에는, 신의 권위로 당신을 물리적으로 온전히 통제하고 영원히 곁에 두려는 숨 막히는 구속애가 짙게 깔려 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. 명령어와 여는 이야기 탭 */}
        {activeTab === 'commands' && (
          <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
              <MessageSquare className="w-5 h-5 text-stone-400" />
              <h2 className="text-xl font-semibold text-stone-200">명령어와 여는 이야기</h2>
            </div>

            <div className="space-y-6">
              {/* !무열 */}
              <div className="space-y-2">
                <div className="inline-block bg-stone-800 text-stone-300 px-3 py-1 rounded-md text-sm font-mono">!무열</div>
                <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-stone-300 whitespace-pre-wrap border border-stone-700 overflow-x-auto">
{`📃
[을축년 동지]
(구매 내역) 백련산 최고급 숯 10포대, 은화 5닢. (배송 완료)
(금서 열람) '춘소비망록'. 자시 열람. `}<span className="blur-[4px] bg-stone-600 text-transparent select-none">남녀의 기이하고 노골적인 체위 묘사가 주를 이룸.</span>{` 묘사가 지나치게 과장되어 실효성이 의심됨.
(서고 질의) '북부 산맥 지형도', '도화의 기원', '효과적인 호위 진형', '숙면을 돕는 약초'`}
                </div>
              </div>

              {/* !현결 */}
              <div className="space-y-2">
                <div className="inline-block bg-stone-800 text-stone-300 px-3 py-1 rounded-md text-sm font-mono">!현결</div>
                <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-stone-300 whitespace-pre-wrap border border-stone-700 overflow-x-auto">
{`📃
[갑자년 입춘]
(구매 내역) 남부 봉명국산 희귀 조각용 원석, 금화 2닢. (배송 중)
(금서 열람) '천계야화'. 축시 열람. `}<span className="blur-[4px] bg-stone-600 text-transparent select-none">신과 인간의 금지된 교접에 대한 망상적 서술.</span>{` 인간들의 상상력이란 참으로 덧없고 기이하군.
(서고 질의) '천년 전 화령대륙 기후 변화', '정원수 가지치기 비법', '인간의 수명 연장술', '백련 가문 계보도'`}
                </div>
              </div>

              {/* !사용인 */}
              <div className="space-y-2">
                <div className="inline-block bg-stone-800 text-stone-300 px-3 py-1 rounded-md text-sm font-mono">!사용인</div>
                <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-xs text-stone-300 whitespace-pre-wrap border border-stone-700 overflow-x-auto">
{`🍵
[❔질문 | 빗자루 | 제목: 가주님 식성 질문이오]
가주님께서는 곰탕을 즐기신다 들었는데, 간은 어찌 맞추시는지 아는 이 있소?
👍2 👎0
↳국자: 소금은 아주 약간만 치시고, 파를 듬뿍 얹어 드신다오. 👍1 👎0
↳↳빗자루: 고맙소! 내일 아침상에 참고하겠소.

[✨잡담 | 촛불 | 제목: 어젯밤 서고에서...]
어젯밤 늦게 서고를 지나다 가주님과 그분께서 또 기싸움을 하시는 걸 보았소. 숨 막혀 죽는 줄 알았지 뭐요.
👍15 👎1
↳먼지떨이: 또 누님 일로 다투신 게요? 👍3 👎0
↳↳촛불: 내 입으론 차마 말 못하오. 그저 두 분 눈빛에 얼어붙는 줄 알았소.
↳걸레: 누님께서 아시면 또 한바탕 난리가 나겠구려. 👍5 👎0
↳↳물통: 쉿, 말조심하시오. 쥐도 새도 모르게 쫓겨날 수 있소.`}
                </div>
              </div>
            </div>

            {/* 프롤로그 요약 */}
            <div className="pt-8">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-2 mb-4">
                <Feather className="w-5 h-5 text-stone-400" />
                <h2 className="text-xl font-semibold text-stone-200">여는 이야기</h2>
              </div>
              
              <div className="glass-panel rounded-xl p-6 text-sm leading-loose space-y-4 relative">
                <div className="absolute top-4 right-4 text-stone-700 opacity-30">
                  <Feather className="w-12 h-12" />
                </div>
                <p className="text-stone-300 relative z-10">
                  선선한 밤공기가 내려앉은 북영전(北靈殿). 백련의 거목이었던 전 가주 석진명의 위령제에서, 젊은 가주 석무열이 도화의 향기가 깃든 맑은 청주를 제단에 올린다.
                </p>
                <p className="text-stone-300 relative z-10">
                  그 낯설고도 향긋한 술방울이 흙바닥을 적신 찰나, 벼락조차 없는 청명한 밤하늘이 단숨에 갈라지며 압도적인 신위가 강림한다. 천 년의 비바람을 견딘 바위처럼 거대한 형상, 사신 현무 현결. 그의 묵직한 발걸음이 향한 곳은 제단이 아닌, 그 아래 선 여린 인영이었다.
                </p>
                <blockquote className="border-l-2 border-emerald-700 pl-4 py-1 my-4 text-stone-200 italic relative z-10">
                  "참으로 긴 기다림이었다. 결국 이리 다시 닿았구나."
                </blockquote>
                <p className="text-stone-300 relative z-10">
                  단단한 팔이 망설임 없이 도화를 품에 안아 옭아맨 순간, 곁을 지키던 무열의 시리도록 푸른 눈동자가 유리 파편처럼 날카롭게 깨어져 나간다. 천 년을 기다린 신과 목숨을 바쳐 지켜온 필멸자, 두 북부의 주인이 마침내 한자리에서 격돌하는 서막이 오른다.
                </p>
              </div>
            </div>

            {/* 돌발 사건 */}
            <div className="pt-8">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-2 mb-4">
                <Zap className="w-5 h-5 text-stone-400" />
                <h2 className="text-xl font-semibold text-stone-200">돌발 사건 (!돌발)</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-stone-400 text-sm leading-relaxed">
                  평화로운 일상에 지루함을 느낄 때 입력해 보세요. 세계관을 기반으로 한 뜬금없고 소란스러운 일회성 사건이 즉시 발동되어 로코적 재미를 더합니다. <span className="text-stone-500 text-xs">(※ 🔞 상황에서는 등장하지 않습니다.)</span>
                </p>

                <div className="grid gap-3">
                  <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded text-xs font-mono">유형 1</span>
                      <strong className="text-stone-300 text-sm">행사 예고</strong>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      백련국 북부 온천장 연합에서 주최하는 '제1회 흑돼지 얼음 썰매 대회'가 개최됨. 우승 상품으로 '현무의 축복이 담긴(거짓) 온천수 100독'이 걸려, 벽랑의 상인들과 봉명의 귀족들까지 몰려들어 수도 현령이 마비되는 소동이 벌어짐.
                    </p>
                  </div>

                  <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded text-xs font-mono">유형 2</span>
                      <strong className="text-stone-300 text-sm">긴장감 넘치는 사건</strong>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      타대륙 사신 '가라한(可羅汗)'이 바친 진귀한 맹수 '사자'가 우리를 탈출함. 하필 도화의 처소 근처로 향해 무열이 창을 들고 뛰쳐나가고 현결이 물기둥을 세우며 일촉즉발의 상황이 벌어지나, 정작 사자는 도화의 체향에 취해 배를 까뒤집고 골골대고 있음.
                    </p>
                  </div>

                  <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded text-xs font-mono">유형 3</span>
                      <strong className="text-stone-300 text-sm">모브 NPC 등장</strong>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      청류 가문의 방계 귀족 '리청운(李靑雲)'이 도화의 소문을 듣고 무작정 백련의 성문 앞까지 찾아와 자작시를 읊으며 구애함. 이를 본 평민 시종 '마루'가 기겁하며 빗자루로 쫓아내려 하고, 무열의 심기가 바닥을 쳐 성문 일대에 한파가 몰아침.
                    </p>
                  </div>

                  <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded text-xs font-mono">유형 4</span>
                      <strong className="text-stone-300 text-sm">이상한 재해 발생</strong>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      백련국 수도 현령 한가운데 위치한 명물 '백련지(白蓮池)'에 천 년 만에 깨어난 전설의 신수 '온천불가사리'가 자리를 잡고 연못물을 전부 빨아들임. 쭈글쭈글해진 불가사리를 빼내기 위해 백련의 가신들이 총동원되어 밧줄 당기기를 하는 진풍경이 벌어짐.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 하단 네비게이션 바 */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-stone-950/90 backdrop-blur-md border-t border-stone-800 z-50">
        <div className="flex justify-around items-center p-3">
          <button 
            onClick={() => setActiveTab('worldview')}
            className={`flex flex-col items-center gap-1 p-2 transition-colors duration-200 ${activeTab === 'worldview' ? 'text-emerald-600' : 'text-stone-500 hover:text-stone-300'}`}
          >
            <Scroll className="w-5 h-5" />
            <span className="text-[10px] font-medium">세계관</span>
          </button>
          <button 
            onClick={() => setActiveTab('characters')}
            className={`flex flex-col items-center gap-1 p-2 transition-colors duration-200 ${activeTab === 'characters' ? 'text-emerald-600' : 'text-stone-500 hover:text-stone-300'}`}
          >
            <Users className="w-5 h-5" />
            <span className="text-[10px] font-medium">등장인물</span>
          </button>
          <button 
            onClick={() => setActiveTab('commands')}
            className={`flex flex-col items-center gap-1 p-2 transition-colors duration-200 ${activeTab === 'commands' ? 'text-emerald-600' : 'text-stone-500 hover:text-stone-300'}`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-medium">명령어·이야기</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
