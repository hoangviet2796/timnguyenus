import Image from "next/image";
import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Vision() {
  return (
    <div className="w-full flex justify-center bg-[rgb(241,243,244)]">
      <div className={`max-w-screen-xl w-full h-[750px] flex`}>
        <div className="relative w-[40%] h-full">
          <Image
            className={`h-full w-full`}
            loading="lazy"
            src={`/images/SITETIMNGUYEN/10(3).jpg`}
            fill
            style={{ objectFit: "cover" }}
            alt="main"
          ></Image>
        </div>
        <div className="w-[60%] h-full flex justify-around items-center">
          <Card className="bg-opacity-50 bg-white shadow-none w-[90%] h-[90%] px-10 py-5">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full h-full flex flex-col justify-around"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-[--text-primary-color] h-[50px] text-xl font-bold rounded-xl px-5">
                  Tầm nhìn, sứ mệnh{" "}
                </AccordionTrigger>
                <AccordionContent className="text-lg ml-10">
                  <span className="font-bold">Tầm nhìn:</span>
                  <br />
                  Trở thành người dẫn lối hàng đầu cho cộng đồng người Việt tại
                  Mỹ thoát khỏi nợ nần và xây dựng cuộc sống tài chính tự do,
                  bền vững.
                  <br />
                  <span className="font-bold">Sứ mệnh:</span>
                  <br /> Người đồng hành hỗ trợ mọi hoàn cảnh vượt qua nợ nần,
                  tìm lại hy vọng và tự tin trong cuộc sống Người truyền cảm
                  hứng và cung cấp giải pháp tài chính rõ ràng, giúp mọi người
                  vươn lên từ khó khăn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="bg-[--text-primary-color] text-xl font-bold rounded-xl px-5 h-[50px]">
                  Giá trị cốt lõi{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-lg my-5 ml-10 list-decimal">
                    <li className="my-2">Trao niềm tin, gửi giá trị</li>
                    <li className="my-2">Tận tâm với khách hàng</li>
                    <li className="my-2">
                      Làm đúng cam kết và nhận trách nhiệm
                    </li>
                    <li className="my-2">Minh bạch mọi quy trình</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="bg-[--text-primary-color] text-xl font-bold rounded-xl px-5 h-[50px]">
                  Tim đã làm được gì?
                </AccordionTrigger>
                <AccordionContent className="text-lg my-5 ml-10">
                  <b>
                    Kết nối và hỗ trợ cho hơn 10.000 hoàn cảnh vượt khó thành
                    công
                  </b>
                  <br />
                  +10.000 người xóa nợ thành công, chạm tự do tài chính →{" "}
                  <b>
                    Tổng số nợ được giảm lên đến $40.000.000 thông qua Tim
                    Nguyen
                  </b>
                  <br />
                  <ul className="text-xl mx-10 list-disc">
                    <li className="my-2">
                      Giúp cộng đồng nhận thức và phát giác trước những bẫy tín
                      dụng, dịch vụ scam qua các video chia sẻ kiến thức chuyên
                      sâu
                    </li>
                    <li className="my-2">
                      Hợp tác với đối tác chiến lược CDS mang chương trình giảm
                      nợ đến gần hơn với nhiều người đã và đang gặp khó khăn tài
                      chính, bế tắc trong cuộc sống
                    </li>
                    <li className="my-2">
                      Tái định nghĩa về nợ và chương trình giảm nợ cho công đồng
                    </li>
                    <li className="my-2">
                      Cá nhân hóa hệ thống tài chính hỗ trợ mọi người check
                      thông tin tài chính một cách dễ dàng hơn và hoàn toàn miễn
                      phí.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  );
}
