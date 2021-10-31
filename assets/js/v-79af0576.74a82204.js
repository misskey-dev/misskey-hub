"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[5545],{9559:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(6252);const p=(0,e._)("h1",{id:"ストリーミングapi",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#ストリーミングapi","aria-hidden":"true"},"#"),(0,e.Uk)(" ストリーミングAPI")],-1),t={class:"custom-container tip"},l=(0,e._)("i",{class:"fas fa-info"},null,-1),c=(0,e.Uk)("最初に"),o=(0,e.Uk)("Misskey API"),i=(0,e.Uk)("のドキュメントを読むことをお勧めします。"),r=(0,e.uE)('<p>ストリーミングAPIを使うと、リアルタイムで様々な情報(例えばタイムラインに新しい投稿が流れてきた、メッセージが届いた、フォローされた、など)を受け取ったり、様々な操作を行ったりすることができます。</p><h2 id="ストリームに接続する" tabindex="-1"><a class="header-anchor" href="#ストリームに接続する" aria-hidden="true">#</a> ストリームに接続する</h2><p>ストリーミングAPIを利用するには、まずMisskeyサーバーに<strong>websocket</strong>で接続する必要があります。</p><p>以下の形式のURLにwebsocket接続します:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wss://{host}/streaming?i={token}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>ここで、</p><ul><li><code>{host}</code>の部分は、接続したいインスタンスのホストに置き換えます。</li><li><code>{token}</code>の部分は、ユーザーのアクセストークンに置き換えます。</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>アクセストークンは省略することもできますが、その場合非ログインでの利用ということになり、受信できる情報や可能な操作は限られます。</p></div><p>ストリームに接続すると、後述するAPI操作や、投稿の購読を行ったりすることができます。 しかしまだこの段階では、例えばタイムラインへの新しい投稿を受信したりすることはできません。 それを行うには、ストリーム上で、後述する<strong>チャンネル</strong>に接続する必要があります。</p><p><strong>ストリーム上のやり取りはすべてJSONで行われます。</strong></p><h2 id="チャンネル" tabindex="-1"><a class="header-anchor" href="#チャンネル" aria-hidden="true">#</a> チャンネル</h2><p>MisskeyのストリーミングAPIにはチャンネルという概念があります。これは、送受信する情報を分離するための仕組みです。 Misskeyのストリームに接続しただけでは、まだリアルタイムでタイムラインの投稿を受信したりはできません。 ストリーム上でチャンネルに接続することで、様々な情報を受け取ったり情報を送信したりすることができるようになります。</p><div class="custom-container tip"><i class="fas fa-info"></i><p>ひとつのストリーム接続上で、同時に複数のチャンネルに接続することができます。</p></div><p>以下では、チャンネルの使用方法を説明します。どのようなチャンネルがあるかなどは、<a href="TODO">ストリーミングAPIリファレンス</a>を参照してください。</p><h3 id="チャンネルに接続する" tabindex="-1"><a class="header-anchor" href="#チャンネルに接続する" aria-hidden="true">#</a> チャンネルに接続する</h3><p>チャンネルに接続するには、次のようなデータをJSONでストリームに送信します:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\ttype<span class="token operator">:</span> <span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span>\n\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tchannel<span class="token operator">:</span> <span class="token string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">,</span>\n\t\tid<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>\n\t\tparams<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token operator">...</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>ここで、</p><ul><li><code>channel</code>には接続したいチャンネル名を設定します。チャンネルの種類については後述します。</li><li><code>id</code>にはそのチャンネルとやり取りするための任意のIDを設定します。ストリームでは様々なメッセージが流れるので、そのメッセージがどのチャンネルからのものなのか識別する必要があるからです。このIDは、UUIDや、乱数のようなもので構いません。</li><li><code>params</code>はチャンネルに接続する際のパラメータです。チャンネルによって接続時に必要とされるパラメータは異なります。パラメータ不要のチャンネルに接続する際は、このプロパティは省略可能です。</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>IDはチャンネルごとではなく「チャンネルの接続ごと」です。なぜなら、同じチャンネルに異なるパラメータで複数接続するケースもあるからです。</p></div><h3 id="チャンネルからのメッセージを受け取る" tabindex="-1"><a class="header-anchor" href="#チャンネルからのメッセージを受け取る" aria-hidden="true">#</a> チャンネルからのメッセージを受け取る</h3><p>例えばタイムラインのチャンネルなら、新しい投稿があった時にメッセージを発します。そのメッセージを受け取ることで、タイムラインに新しい投稿がされたことをリアルタイムで知ることができます。</p><p>チャンネルがメッセージを発すると、次のようなデータがJSONでストリームに流れてきます:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\ttype<span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>\n\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tid<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>\n\t\ttype<span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>\n\t\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\tsome<span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>ここで、</p><ul><li><code>id</code>には前述したそのチャンネルに接続する際に設定したIDが設定されています。これで、このメッセージがどのチャンネルからのものなのか知ることができます。</li><li><code>type</code>にはメッセージの種類が設定されます。チャンネルによって、どのような種類のメッセージが流れてくるかは異なります。</li><li><code>body</code>にはメッセージの内容が設定されます。チャンネルによって、どのような内容のメッセージが流れてくるかは異なります。</li></ul><h3 id="チャンネルに向けてメッセージを送信する" tabindex="-1"><a class="header-anchor" href="#チャンネルに向けてメッセージを送信する" aria-hidden="true">#</a> チャンネルに向けてメッセージを送信する</h3><p>チャンネルによっては、メッセージを受け取るだけでなく、こちらから何かメッセージを送信し、何らかの操作を行える場合があります。</p><p>チャンネルにメッセージを送信するには、次のようなデータをJSONでストリームに送信します:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\ttype<span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>\n\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tid<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>\n\t\ttype<span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>\n\t\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\tsome<span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>ここで、</p><ul><li><code>id</code>には前述したそのチャンネルに接続する際に設定したIDを設定します。これで、このメッセージがどのチャンネルに向けたものなのか識別させることができます。</li><li><code>type</code>にはメッセージの種類を設定します。チャンネルによって、どのような種類のメッセージを受け付けるかは異なります。</li><li><code>body</code>にはメッセージの内容を設定します。チャンネルによって、どのような内容のメッセージを受け付けるかは異なります。</li></ul><h3 id="チャンネルから切断する" tabindex="-1"><a class="header-anchor" href="#チャンネルから切断する" aria-hidden="true">#</a> チャンネルから切断する</h3><p>チャンネルから切断するには、次のようなデータをJSONでストリームに送信します:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\ttype<span class="token operator">:</span> <span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span>\n\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tid<span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>ここで、</p><ul><li><code>id</code>には前述したそのチャンネルに接続する際に設定したIDを設定します。</li></ul><h2 id="投稿のキャプチャ" tabindex="-1"><a class="header-anchor" href="#投稿のキャプチャ" aria-hidden="true">#</a> 投稿のキャプチャ</h2><p>Misskeyは投稿のキャプチャと呼ばれる仕組みを提供しています。これは、指定した投稿のイベントをストリームで受け取る機能です。</p><p>例えばタイムラインを取得してユーザーに表示したとします。ここで誰かがそのタイムラインに含まれるどれかの投稿に対してリアクションしたとします。 しかし、クライアントからするとある投稿にリアクションが付いたことなどは知る由がないため、リアルタイムでリアクションをタイムライン上の投稿に反映して表示するといったことができません。</p><p>この問題を解決するために、Misskeyは投稿のキャプチャ機構を用意しています。投稿をキャプチャすると、その投稿に関するイベントを受け取ることができるため、リアルタイムでリアクションを反映させたりすることが可能になります。</p><p>以下では、投稿のキャプチャ機能の使用方法を説明します。どのようなキャプチャイベントがあるかなどは、<a href="TODO">ストリーミングAPIリファレンス</a>を参照してください。</p><h3 id="投稿をキャプチャする" tabindex="-1"><a class="header-anchor" href="#投稿をキャプチャする" aria-hidden="true">#</a> 投稿をキャプチャする</h3><p>投稿をキャプチャするには、ストリームに次のようなメッセージを送信します:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\ttype<span class="token operator">:</span> <span class="token string">&#39;subNote&#39;</span><span class="token punctuation">,</span>\n\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tid<span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>ここで、</p><ul><li><code>id</code>にキャプチャしたい投稿の<code>id</code>を設定します。</li></ul><p>このメッセージを送信すると、Misskeyにキャプチャを要請したことになり、以後、その投稿に関するイベントが流れてくるようになります。</p><p>例えば投稿にリアクションが付いたとすると、次のようなメッセージが流れてきます:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\ttype<span class="token operator">:</span> <span class="token string">&#39;noteUpdated&#39;</span><span class="token punctuation">,</span>\n\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tid<span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>\n\t\ttype<span class="token operator">:</span> <span class="token string">&#39;reacted&#39;</span><span class="token punctuation">,</span>\n\t\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\treaction<span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>\n\t\t\tuserId<span class="token operator">:</span> <span class="token string">&#39;yyyyyyyyyyyyyyyy&#39;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>ここで、</p><ul><li><code>body</code>内の<code>id</code>に、イベントを発生させた投稿のIDが設定されます。</li><li><code>body</code>内の<code>type</code>に、イベントの種類が設定されます。</li><li><code>body</code>内の<code>body</code>に、イベントの詳細が設定されます。</li></ul><h3 id="投稿のキャプチャを解除する" tabindex="-1"><a class="header-anchor" href="#投稿のキャプチャを解除する" aria-hidden="true">#</a> 投稿のキャプチャを解除する</h3><p>その投稿がもう画面に表示されなくなったりして、その投稿に関するイベントをもう受け取る必要がなくなったときは、キャプチャの解除を申請してください。</p><p>次のメッセージを送信します:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n\ttype<span class="token operator">:</span> <span class="token string">&#39;unsubNote&#39;</span><span class="token punctuation">,</span>\n\tbody<span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\tid<span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>ここで、</p><ul><li><code>id</code>にキャプチャを解除したい投稿の<code>id</code>を設定します。</li></ul><p>このメッセージを送信すると、以後、その投稿に関するイベントは流れてこないようになります。</p>',59),u={render:function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("div",t,[l,(0,e._)("p",null,[c,(0,e.Wm)(a,{to:"/docs/api.html"},{default:(0,e.w5)((()=>[o])),_:1}),i])]),r],64)}}},7564:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-79af0576",path:"/docs/streaming-api.html",title:"ストリーミングAPI",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"ストリームに接続する",slug:"ストリームに接続する",children:[]},{level:2,title:"チャンネル",slug:"チャンネル",children:[{level:3,title:"チャンネルに接続する",slug:"チャンネルに接続する",children:[]},{level:3,title:"チャンネルからのメッセージを受け取る",slug:"チャンネルからのメッセージを受け取る",children:[]},{level:3,title:"チャンネルに向けてメッセージを送信する",slug:"チャンネルに向けてメッセージを送信する",children:[]},{level:3,title:"チャンネルから切断する",slug:"チャンネルから切断する",children:[]}]},{level:2,title:"投稿のキャプチャ",slug:"投稿のキャプチャ",children:[{level:3,title:"投稿をキャプチャする",slug:"投稿をキャプチャする",children:[]},{level:3,title:"投稿のキャプチャを解除する",slug:"投稿のキャプチャを解除する",children:[]}]}],filePathRelative:"docs/streaming-api.md",git:{updatedTime:1635655282e3,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:1}]}}}}]);