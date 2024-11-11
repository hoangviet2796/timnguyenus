import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]
  
  export function NavigationHeaderMobile() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="pl-2" value="item-1">
          <AccordionTrigger>Công cụ miễn phí</AccordionTrigger>
          <AccordionContent className="pl-2">
            Công cụ 2
          </AccordionContent>
          <AccordionContent className="pl-2">
            Công cụ 2
          </AccordionContent>
          <AccordionContent className="pl-2">
            Công cụ 3
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="pl-2" value={`item-${components.length}`}>
          <AccordionTrigger>Chủ đề</AccordionTrigger>
          {components.map((component) => (
                  <AccordionContent className="pl-2" key={component.title}>
                      {component.title}
                  </AccordionContent>
              ))}
        </AccordionItem>
        <AccordionItem className="pl-2" value="item-0">
          <AccordionTrigger><a href="/about">
              Về chúng tôi
          </a></AccordionTrigger>
        </AccordionItem>
      </Accordion>
    )
  }
  