import Main from "@/app/home/main/main";
import VideoHome from "@/app/(content)/about/videoHome/videoHome";
import FeedBack from "@/app/home/feedback/feedback";
import Cooporate from "@/app/home/cooperate/Cooperate";
import Advice from "@/app/home/advise/advise";
import FeedbackClient from "@/app/home/feedbackClient/feedbackClient";
import Review from "@/app/home/review/review";
import GoodDeal from "@/app/home/goodeal/gooddeal";
import Referral from "@/app/home/referral/referral";
import Tool from "@/app/home/tools/tool";
import Theory from "./theory/theory";
import FormInfo from "@/app/(form)/formInfo";
import VideoFeedback from "./videofeedback/videofeedback";

export default function home() {
  return (
    <main className={`flex flex-col items-center cursor-default`}>
      {/* <div className={`max-w-screen-xl cursor-default`}> */}
      <Main />
      {/* <VideoHome /> */}
      <Theory />
      <FeedBack />
      <Tool />
      <Cooporate />
      {/* <Advice /> */}
      <FeedbackClient />
      <VideoFeedback />
      <Review />
      <GoodDeal />
      <Referral />
      {/* <Contact /> */}
      {/* </div> */}
      <FormInfo />
    </main>
  );
}
