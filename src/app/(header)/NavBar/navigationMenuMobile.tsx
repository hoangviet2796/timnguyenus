import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import data from "../data.json";

export function NavigationHeaderMobile() {
  return (
    <Accordion type="single" collapsible className="w-full bg-white">
      <AccordionItem className="pl-2" value="item-0">
        <AccordionTrigger>
          <a href="/home">Home</a>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem className="pl-2" value="item-0">
        <AccordionTrigger>
          <a href="/about">Về chúng tôi</a>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem className="pl-2" value="item-0">
        <AccordionTrigger>
          <a href="/program">Program</a>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem className="pl-2" value="item-0">
        <AccordionTrigger>Công cụ miễn phí</AccordionTrigger>
        {data.tools.map((tool) => (
          <AccordionContent className="pl-2" key={tool.title}>
            <a href={tool.link}>{tool.title}</a>
          </AccordionContent>
          // <AccordionContent className="pl-2" key={tool.title}>
          //   {tool.title}
          // </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem className="pl-2" value="item-0">
        <AccordionTrigger>
          <a href="/topic">Topic</a>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
}
