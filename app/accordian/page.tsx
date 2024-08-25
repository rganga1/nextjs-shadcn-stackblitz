// index.jsx
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Accordian() {
  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger">
            <span>Trigger text</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>…</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
