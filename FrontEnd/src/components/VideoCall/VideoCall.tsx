/* eslint-disable jsx-a11y/anchor-is-valid */
/* react */
import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IVideoCallProps } from "./IVideoCall";
import { DocotrDataProvider } from "../../lib/service/DocotrDataProvider";
import {
  OTSession,
  OTPublisher,
  OTStreams,
  OTSubscriber,
  preloadScript,
  createSession,
  SessionHelper,
  CreateSessionOptions,
} from "opentok-react";
import $ from "jquery";
import "jquery-ui";
import * as _ from "lodash";
import { Common } from "../../lib/utils/common";
import moment from "moment";
const OT = require("@opentok/client");

export const VideoCall: FunctionComponent<{}> = (props) => {
  const docotrDataProvider = new DocotrDataProvider();
  const [session, setSession] = useState("" as any);
  const [streams, setStreams] = useState([] as any);
  const [archiveId, setArchiveId] = useState("" as any);
  const [archiveURL, setArchiveURL] = useState("" as any);
  const [publishVideo, setPublishVideo] = useState(true);
  // const [apiKey, setApiKey] = useState("");
  const [sessionId, setSessionId] = useState("");
  // const [token, setToken] = useState("");

  const [timer, setTimer] = useState<number>(0);
  const [timer2, setTimer2] = useState<number>(0);
  const [timerStart, setTimerStart] = useState<NodeJS.Timeout | null>(null);

  const [chat, setChat] = useState<NodeJS.Timeout | null>(null);
  const [chatList, setChatList] = useState([] as any);
  /* componentDidMount && componentDidUpdate */
  const param: any = useParams();

  const common = new Common();

  useEffect(() => {
    const fetchArticles = async () => {
      const call = await docotrDataProvider.openCall(param.id);
      common.ResizePage();
      setSessionId(call.sessionId);
      setSession(
        createSession({
          apiKey: call.apiKey,
          sessionId: call.sessionId,
          token: call.token,
          onStreamsUpdated: (streams: any) => {
            console.log(streams);
            if (streams.length === 1) {
              $(".calling").css("display", "none");
            }
            setStreams(streams);
          },
        })
      );
    };
    if (session === "") {
      fetchArticles();
    }
  }, [props]);

  const onEndClick = () => {
    session.disconnect();
  };
  const toggleVideo = () => {
    if (!publishVideo) {
      $("#toggleVideo").removeClass("disabled");
    } else {
      $("#toggleVideo").addClass("disabled");
    }

    setPublishVideo(!publishVideo);
  };
  const OnOffArchive = async () => {
    if ($("#spnRecord").text() === "Start Recording") {
      $("#divRec").css("display", "");
      $("#spnRecord").text("Stop Recording");
      startTimer();

      const dt = await docotrDataProvider.startArchive(sessionId);
      setArchiveId(dt);
    } else {
      //$("#divRec").css("display", "none");
      $("#spnRecord").text("Start Recording");
      pauseTimer();

      const dt = await docotrDataProvider.stopArchive(archiveId);
      setArchiveId(dt);
    }
  };

  const chatText = async (e: any) => {
    setChat(e.target.value);
  };

  const publisherEventHandlers = {
    streamCreated: (event: any) => {
      fixDisplay();
      session.session.on("signal:chat", (d: any) => {
        if (_.isString(d.data)) {
          let dt = JSON.parse(d.data);
          dt["time"] = moment(new Date(), "s").format("HH:mm");
          chatList.push(dt);
        } else {
          chatList.push(d.data);
        }
      });
      const timer = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    },
    streamDestroyed: (event: any) => {
      window.close();
      window.open("about:blank", "_self")?.close();
      console.log("Publisher stream destroyed!");
    },
  };
  const subscriberEventHandlers = {
    connected: (event: any) => {
      fixDisplay();
    },
    destroyed: (event: any) => {
      console.log("subscriber stream destroyed!");
    },
  };
  const startTimer = () => {
    const tick = () => setTimer2((prevTime) => prevTime + 1);
    const timerStart = setInterval(() => {
      tick();
    }, 1000);
    setTimerStart(timerStart);
  };
  const pauseTimer = () => {
    if (timerStart) {
      clearInterval(timerStart);
    }
  };
  const sendSignal = () => {
    session.session.signal(
      {
        type: "chat",
        data: {
          sender: "doctor1",
          connectionId: "mine",
          msg: chat,
          time: moment(new Date(), "s").format("HH:mm"),
        },
      },

      function (error: any) {
        if (error) {
          //console.log("signal error: " + error.message);
        } else {
          //console.log("signal sent");
        }
      }
    );
  };
  const chageChat = () => {
    var isOn = $("#aChat").hasClass("on");
    if (isOn !== true) {
      $("#aChat").addClass("on");
      $("#secVideo").addClass("on");
    } else {
      $("#aChat").removeClass("on");
      $("#secVideo").removeClass("on");
    }
  };

  const fixDisplay = () => {
    const ht1: any = $("#video1").height();
    $("#video1").children("div").height(ht1);
    const ht2: any = $("#video2").height();
    $("#video2").children("div").height(ht2);
    const ht3: any = $("#video3").height();
    $("#video3").children("div").height(ht3);
    const ht4: any = $("#video4").height();
    $("#video4").children("div").height(ht4);
  };

  return (
    <div className="comHeight">
      {session !== "" ? (
        <div className="wrap">
          <div className="video-call">
            <header className="header">
              <button type="button" className="menu-all">
                <span className="blind">전체메뉴</span>
                <div className="icon icon--menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>

              <div className="tit">
                <div className="name on">
                  <span>Development 1 team</span>
                </div>

                <div className="count">
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <span>3</span>
                </div>
              </div>

              <nav className="gnb">
                <ul>
                  <li>
                    <a href="#none" onClick={OnOffArchive}>
                      <i
                        className="fa fa-circle icon-rec"
                        aria-hidden="true"
                      ></i>
                      <span id="spnRecord">Start Recording</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#none"
                      onClick={() => common.openLayer("popAddCall")}
                    >
                      <i className="fa fa-user-plus" aria-hidden="true"></i>
                      <span>Add to call</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#none"
                      onClick={() => common.openLayer("popLayout")}
                    >
                      <i className="fa fa-th-large" aria-hidden="true"></i>
                      <span>Change Layout</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </header>

            <main id="content" className="video-call__wrap">
              <section id="secVideo" className="video-call__cont on">
                <section className="items">
                  <div className="controller">
                    <ul>
                      <li>
                        <a
                          href="#"
                          id="toggleVideo"
                          className="disabled"
                          onClick={toggleVideo}
                        >
                          <i
                            className="fa fa-video-camera"
                            aria-hidden="true"
                          ></i>
                          <span className="blind">영상</span>
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i
                            className="fa fa-microphone"
                            aria-hidden="true"
                          ></i>
                          <span className="blind">마이크</span>
                        </a>
                      </li> */}
                      <li>
                        <a
                          id="aChat"
                          href="#"
                          className="icon-chat on"
                          onClick={chageChat}
                        >
                          <i className="fa fa-comments" aria-hidden="true"></i>
                          <span className="blind">채팅</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div id="divRec" className="rec" style={{ display: "none" }}>
                    <div className="rec-icon">
                      <span>REC</span>
                    </div>
                    <span className="rec-time">
                      {moment()
                        .hour(0)
                        .minute(0)
                        .second(timer2)
                        .format("mm:ss")}
                    </span>
                  </div>

                  <p id="pCalling" className="calling">
                    Calling...
                  </p>

                  <div className="call-info">
                    <div className="duration">
                      <span>
                        {moment()
                          .hour(0)
                          .minute(0)
                          .second(timer)
                          .format("mm:ss")}
                      </span>
                    </div>
                    <div className="endcall">
                      <a href="#" onClick={onEndClick}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className="blind">통화종료</span>
                      </a>
                    </div>
                  </div>
                </section>

                <section className="layout type01">
                  <article className="block">
                    <header>{localStorage.getItem("id")}</header>
                    <div id="video1" className="video">
                      <OTPublisher
                        session={session.session}
                        eventHandlers={publisherEventHandlers}
                        properties={{
                          publishVideo,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </article>
                  {streams.map((stream: any, i: any) => {
                    return (
                      <article className="block">
                        <header>{stream.name}</header>
                        <div id={"video" + (i + 2)} className="video">
                          <OTSubscriber
                            key={stream.id}
                            eventHandlers={subscriberEventHandlers}
                            session={session.session}
                            stream={stream}
                            properties={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                      </article>
                    );
                  })}
                </section>

                <section className="chat">
                  <header>
                    <strong>Chat</strong>
                    <span className="icon icon--close lg chat-close"></span>
                  </header>
                  <div className="chat__msg">
                    {chatList.map((d: any, i: any) => {
                      let connectionId = "";
                      if (d["connectionId"] === "mine") {
                        connectionId = "send";
                      } else {
                        connectionId = "receive";
                      }

                      return (
                        <article className={connectionId}>
                          <header>
                            <span>{d["time"]}</span>
                            <strong> {d["sender"]}</strong>
                          </header>
                          <div className="box">
                            <p>{d["msg"]}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                  <footer>
                    <div className="tf">
                      <textarea
                        name="chatText"
                        id="chatText"
                        cols={0}
                        rows={1}
                        placeholder="input your text hear"
                        onChange={chatText}
                      ></textarea>
                      <label htmlFor="chatText" className="blind">
                        text input
                      </label>
                    </div>
                    <button
                      type="button"
                      className="btn md blue"
                      onClick={sendSignal}
                    >
                      <i
                        className="fa fa-paper-plane icon"
                        aria-hidden="true"
                      ></i>
                      <span className="blind">메세지 전송</span>
                    </button>
                  </footer>
                </section>
              </section>
            </main>
          </div>
        </div>
      ) : null}

      <div className="pop-layer pop-layer--layout" id="popLayout">
        <section className="pop-layer__wrap">
          <div className="cont">
            <div className="cont__wrap">
              <ul className="layout-thumb low">
                <li>
                  <a href="#type01" onClick={fixDisplay}>
                    <span className="blind">레이아웃1</span>
                  </a>
                </li>
                <li>
                  <a href="#type02" onClick={fixDisplay}>
                    <span className="blind">레이아웃2</span>
                  </a>
                </li>
                <li>
                  <a href="#type03" onClick={fixDisplay}>
                    <span className="blind">레이아웃3</span>
                  </a>
                </li>
                <li>
                  <a href="#type04" onClick={fixDisplay}>
                    <span className="blind">레이아웃4</span>
                  </a>
                </li>
                <li>
                  <a href="#type05" onClick={fixDisplay}>
                    <span className="blind">레이아웃5</span>
                  </a>
                </li>
                <li>
                  <a href="#type06" onClick={fixDisplay}>
                    <span className="blind">레이아웃6</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="pop-layer pop-layer--xsm" id="popVoice1">
        <section className="pop-layer__wrap">
          <header>
            <h3>
              <strong>VoiceChat</strong>
            </h3>
            <span className="icon icon--close lg popClose"></span>
          </header>

          <div className="cont">
            <div className="cont__wrap">
              <p>Are you sure you want to end the call?</p>
            </div>
          </div>

          <footer>
            <div className="btn-wrap">
              <button type="button" className="btn md grey popClose">
                <span>Cancel</span>
              </button>
              <button type="button" className="btn md blue">
                <span>END CALL</span>
              </button>
            </div>
          </footer>
        </section>
      </div>

      <div className="pop-layer pop-layer--xsm" id="popVoice2">
        <section className="pop-layer__wrap">
          <header>
            <h3>
              <strong>VoiceChat</strong>
            </h3>
            <span className="icon icon--close lg popClose"></span>
          </header>

          <div className="cont">
            <div className="cont__wrap">
              <p>Not answering your call</p>
              <p>Please, check and call again later.</p>
            </div>
          </div>

          <footer>
            <div className="btn-wrap">
              <button type="button" className="btn md blue popClose">
                <span>OK</span>
              </button>
            </div>
          </footer>
        </section>
      </div>

      <div className="pop-layer pop-layer--xsm" id="popAddCall">
        <section className="pop-layer__wrap">
          <header>
            <h3>
              <strong>Add to Call</strong>
            </h3>
            <span className="icon icon--close lg popClose"></span>
          </header>

          <div className="cont">
            <div className="cont__wrap">
              <p className="mb5">Invite Participants</p>
              <div className="tf">
                <label htmlFor="add" id="add" className="blind">
                  Invite Participants
                </label>
                <input
                  type="text"
                  name="add"
                  id="add"
                  value="https://test-doctor.hicare.net:8001/VideoCall/?call_seq=5221"
                  readOnly
                />
              </div>
            </div>
          </div>

          <footer>
            <div className="btn-wrap">
              <button type="button" className="btn md grey">
                <span>Copy meeting url</span>
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default VideoCall;
